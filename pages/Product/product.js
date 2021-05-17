import React, { useContext, useState } from "react";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { CartContext } from "../index";
import PopUp from "../Dropdown";

const useStyles = makeStyles((theme) => ({
  card: {
    // marginTop: theme.spacing(3),
    maxWidth: "400px",
    height: "500px",
    position: "relative",
    zIndex: 1,
  },
  container: {
    justifyContent: "space-between",
  },
  media: {
    height: "300px",
    paddingTop: "56.25%",
  },

  avatar: {
    color: "black",
    background: "white",
    width: 100,
    justifyContent: "start",
    marginBottom: -40,
  },
  icons: {
    margin: "0",
    padding: "0",
  },
 
}));

function Product({ product, id, onAdd, setOpen }) {
  // console.log(setOpenPopUp, "product");
  const classes = useStyles();
  const cartCount = useContext(CartContext);
  const addItems = () => {
    setOpen(false);
    cartCount.cartDispatch("INCREMENT");
    onAdd(product);
  };

  return (
    <Container>
      <Card className={classes.card} elevation={0}>
        {product.data.bestseller === true ? (
          <Avatar
            aria-label="recipe"
            variant="square"
            className={classes.avatar}
          >
            Best Seller{" "}
          </Avatar>
        ) : (
          ""
        )}

        <CardMedia
          className={classes.media}
          image={
            product.data.image.src ? product.data.image.src : product.data.image
          }
          title="Paella dish"
          width={100}
          height={150}
        >
        </CardMedia>
         

        <Button
          style={{
            background: "#2c3225",
            height: 40,
            color: "white",
            width: "100%",
          }}
          onClick={addItems}
        >
          ADD TO CART
        </Button>
        <Typography
          variant="subtitle1"
          component="div"
          style={{
            fontWeight: "bold",
            fontFamily: "serif",
            opacity: 0.7,
            textTransform: "uppercase",
          }}
        >
          {product.data.category}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{
            fontWeight: "bold",
            fontFamily: "serif",
            textTransform: "uppercase",
          }}
        >
          {product.data.name}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{
            fontWeight: "bold",
            fontFamily: "serif",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          ${product.data.price}
        </Typography>
      </Card>
    </Container>
  );
}

export default Product;
