import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Typography, Grid, Card, IconButton } from "@mui/material";

import Loading from "../Util/Loading";

import useStyles from "./styles";

import arrow from "./Vector 107.svg";

const Category = (props) => {
  const { category } = props;
  const classes = useStyles();
  const [start, setStart] = useState(-1);
  const getDate = (date) => {
    const event = new Date(date);
    let options = { year: "numeric", month: "numeric", day: "numeric" };
    return event.toLocaleString("en-us", options).replaceAll("/", ":");
  };

  return (
    <div>
      <div className={classes.head}>
        <Typography variant="h3" className={classes.heading3}>
          {category.product_name}
        </Typography>
        <hr className={classes.break} />
      </div>
      <div className={classes.categoryContainer}>
        {start !== -1 && (
          <IconButton
            style={{ justifyContent: "start" }}
            className={classes.nextArrow}
          >
            <img
              onClick={() => {
                setStart((prev) => prev - 1);
                console.log(start);
              }}
              src={arrow}
              alt="arrow"
              style={{ transform: "rotate(180deg)" }}
            />
          </IconButton>
        )}
        <Grid container className={`${classes.cProducts} cProducts`}>
          {category.products
            .slice(start + 1, category.products.length)
            .map((product, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                style={{ padding: 10, minWidth: "fit-content" }}
              >
                <Card className={`${classes.product} product`}>
                  <div className={classes.pDetails}>
                    <div>
                      <img
                        className={`img ${classes.pImage}`}
                        src={product.image}
                        alt={product.product_name}
                      />
                      <Typography className={classes.pLocation}>
                        {product.address.state}, {product.address.city}
                      </Typography>
                    </div>
                    <div style={{ paddingLeft: "20px" }}>
                      <Typography className={classes.pName}>
                        {product.product_name}
                      </Typography>
                      <Typography className={classes.pBrand}>
                        {product.brand_name}
                      </Typography>
                      <Typography className={classes.signDolor}>
                        ${" "}
                        <span className={classes.pPrice}>{product.price}</span>
                      </Typography>
                      <Typography className={classes.date1}>
                        Date:{" "}
                        <span className={classes.date2}>
                          {getDate(product.date)}
                        </span>
                      </Typography>
                    </div>
                  </div>
                  <Typography className={classes.pLocation}>
                    {product.discription}
                  </Typography>
                </Card>
              </Grid>
            ))}
        </Grid>
        {start !== category.products.length - 2 && (
          <IconButton className={classes.nextArrow}>
            <img
              onClick={() => {
                setStart((prev) => prev + 1);
                console.log(start);
              }}
              src={arrow}
              alt="arrow"
            />
          </IconButton>
        )}
      </div>
    </div>
  );
};

function Products() {
  const classes = useStyles();
  const { categories, isLoading, products } = useSelector((state) => state.products);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className={classes.head}>
        <Typography variant="h1" className={classes.heading1}>
          Edvora
        </Typography>
        <Typography variant="h2" className={classes.heading2}>
          Products
        </Typography>
      </div>
      {(products.length !== 0 ) ? (
        <>
          {categories.map((category, index) => (
            <> 
              {category.products.length > 0 && (
                <div key={index}>
                  <Category category={category} />
                </div>
              )}
            </>
          ))}
        </>
      ) : (
        <Typography variant="h2" align="center" className={classes.heading2}>
          No Products
        </Typography>
      )}
    </div>
  );
}

export default Products;
