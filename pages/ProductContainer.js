import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";

import Sidebar from "./Sidebar";
import Products from "./Product/Products";

const useStyles = makeStyles((theme) => ({}));

function ProductContainer({ product, id, onAdd,           setOpen
}) {
  console.log(product, "product");
  const classes = useStyles();

  return (
    <Container>
      <div
        style={{
          display: "flex",
          marginLeft: 8,
          marginBottom: 24,
          alignItems: "center",
        }}
      >
        <h2>Photography</h2>
        <h3 style={{ opacity: 0.7, margin: 16 }}>/</h3>
        <h2 style={{ opacity: 0.7 }}>Premium Photos</h2>
      </div>
      <Grid container style={{ display: "flex" }}>
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={10}>
          <Products onAdd={onAdd} setOpen={setOpen} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductContainer;
