import {
  START_LOADING,
  END_LOADING,
  GET_ALL_PRODUCTS,
  FILTER_PRODUCTS,
  FILTER_STATES,
  FILTER_CITIES,
} from "../actions/index";

const products = (state = { isLoading: true, products: [] }, action) => {
  let categories = [];
  let states = [];
  let cities = [];
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_ALL_PRODUCTS:
      const products = action.data;

      products.forEach((product) => {
        const category = categories.find(
          (c) => c.product_name === product.product_name
        );
        if (!category) {
          categories.push({
            product_name: product.product_name,
            products: [product],
          });
        } else {
          category.products = [...category.products, product];
        }

        if (!states.includes(product.address.state)) {
          states.push(product.address.state);
        }

        if (!cities.includes(product.address.city)) {
          cities.push(product.address.city);
        }
      });

      return {
        ...state,
        products: products,
        cProducts: categories.map((c) => c.product_name),
        categories: categories,
        cities: cities,
        states: states,
      };
    case FILTER_PRODUCTS:
      const filter = action.data;
      let results = [];
      let sResults = [];
      let cResults = [];

      filter.values.forEach((value) => {
        if (value === "all") {
          state.products.forEach((product) => {
            const category = results.find(
              (c) => c.product_name === product.product_name
            );
            if (!category) {
              results.push({
                product_name: product.product_name,
                products: [product],
              });
            } else {
              category.products = [...category.products, product];
            }

            if (!sResults.includes(product.address.state)) {
              sResults.push(product.address.state);
            }

            if (!cResults.includes(product.address.city)) {
              cResults.push(product.address.city);
            }
          });
        } else {
          state.products
            .filter((p) => p.product_name === value)
            .forEach((product) => {
              const category = results.find(
                (c) => c.product_name === product.product_name
              );
              if (!category) {
                results.push({
                  product_name: product.product_name,
                  products: [product],
                });
              } else {
                category.products = [...category.products, product];
              }

              if (!sResults.includes(product.address.state)) {
                sResults.push(product.address.state);
              }

              if (!cResults.includes(product.address.city)) {
                cResults.push(product.address.city);
              }
            });
        }
      });
      return {
        ...state,
        categories: results,
        states: sResults,
        cities: cResults,
      };
    case FILTER_STATES:
      const filterStates = action.data.values;

      let stateResults = [];
      let fCResults = [];

      if (filterStates.includes("all")) {
        state.categories.forEach((category) => {
          const categoryProducts = state.products.filter(
            (p) => p.product_name === category.product_name
          );
          categoryProducts.forEach((product) => {
            if (!fCResults.includes(product.address.city)) {
              fCResults.push(product.address.city);
            }
          });
          stateResults.push({ ...category, products: categoryProducts });
        });
      } else {
        stateResults = [];
        state.categories.forEach((category) => {
          let categoryProducts = state.products
            .filter((p) => p.product_name === category.product_name)
            .filter((p) => filterStates.includes(p.address.state));
          categoryProducts.forEach((product) => {
            if (!fCResults.includes(product.address.city)) {
              fCResults.push(product.address.city);
            }
          });
          stateResults.push({ ...category, products: categoryProducts });
        });
      }

      return { ...state, categories: stateResults, cities: fCResults };

    case FILTER_CITIES: 
      const filters = action.data.values;
      const stateChecked = action.data.stateChecked;

      let cityResults = [];

      if (filters.includes('all')) {
        state.categories.forEach((category) => {
          let categoryProducts =[]
          if (stateChecked.length > 0) {
            categoryProducts = state.products.filter(p => p.product_name === category.product_name && stateChecked.includes(p.address.state));
          } else {
            categoryProducts = state.products.filter(p => p.product_name === category.product_name);
          }

          cityResults.push({ ...category, products: categoryProducts });
        });
      } else {
        cityResults = [];
        state.categories.forEach((category) => {
          const categoryProducts = category.products.filter(p => filters.includes(p.address.city) && stateChecked.includes(p.address.state));

          cityResults.push({ ...category, products: categoryProducts });
        });
      }

      return {...state, categories: cityResults}
    default:
      return state;
  }
};

export default products;
