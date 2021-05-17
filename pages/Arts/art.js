import React, { useContext, useState } from "react";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ImagePage from "./ImagePage";
import { CartContext } from "../index";
import PopUp from "../Dropdown"

function Art({ art, id, onAdd, setOpen }) {
  const cartCount = useContext(CartContext);
   
  const addItem = ()=>{
    setOpen(false)
   cartCount.cartDispatch('INCREMENT')
   onAdd(art)
  } 
  console.log(addItem)

  return (
    <>
     
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          xIndex: 1,

        }}
      >
        <h2 style={{ float: "left" }}>{art.data.name}</h2>
       
        <Button style={{ background: "#2c3225", height: 40, color: "white" }} onClick={addItem}>
          ADD TO CART
        </Button>
      </div>
      <Image
        src={art.data.image.src}
        alt="Vercel Logo"
        width={1800}
        height={750}
      />
      <Grid container style={{ marginBottom: 60 }}>
        <Grid item md={8} style={{ paddingRight: 40 }}>
          <Typography
            variant="h6"
            component="div"
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
            All about{""} {art.data.name}{" "}
          </Typography>
          <Typography variant="h6" component="div" style={{ opacity: 0.7 }}>
            {art.data.category}
          </Typography>

          <Typography variant="body2" component="div">
            {art.data.details.description}
          </Typography>
        </Grid>
        <Grid item md={4}>
          <div
            style={{
              fontFamily: "serif",
              fontWeight: "bolder",
              right: 0,
              marginTop: 8,
              marginBottom: 16,
            }}
          >
            PEOPLE ALSO BUY
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {art.data.details.recommendations.map((image) => (
              <ImagePage image={image} key={image.id} />
            ))}
          </div>
          <div style={{ fontWeight: "bold" }}>Detail</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <em> Size </em>
            {""}
            {art.data.details.dimmentions.width} *{" "}
            {art.data.details.dimmentions.height}
            <em>pixel</em>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <em> Size </em>
            {""}
            {art.data.details.size}
            <em>kb</em>
          </div>
        </Grid>
      </Grid>
      <hr />
    </>
  );
}

export default Art;
