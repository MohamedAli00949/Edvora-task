import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllProducts } from "./actions/index";

import { Container, Grid } from '@mui/material';

import Aler from './components/Util/Aler';

import Products from './components/Products/Products';
import Filter from './components/FilterSection/Filter';


function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [error, setError] = useState("");

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts(setError));
    }
  }, []); // eslint-disable-line

  return (
    <div>
      {error && <Aler message={error} type="error" title="Error" className="authError" />}
      <Container maxWidth="xl" style={{marginTop: "60px"}}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={5} md={4} lg={2.5} style={{padding: 8, height: "fit-content"}}>
            <Filter />
          </Grid> 
          <Grid item xs={12} sm={7} md={8} lg={9.5} style={{padding: 10, height: "fit-content"}}>
            <Products />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App;