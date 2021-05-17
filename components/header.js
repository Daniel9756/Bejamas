import React, { useContext, useReducer, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "../pages/index";
import  PopUp  from "../pages/Dropdown";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toobar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function ButtonAppBar({setOpen}) {
  // console.log(toggle)

  const classes = useStyles();
  const cartCount = useContext(CartContext);
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toobar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            BEJAMAS
          </Typography>

          <Button color="white">
            <Badge badgeContent={cartCount.cartState} color="primary">
              <ShoppingCartIcon
                size="large"
                color="secondary"
                style={{ fontSize: 40 }}
                onClick={()=>setOpen(false)}
              />
            </Badge>
          </Button>

        </Toolbar>
       
      </AppBar>
    </div>
  );
}

{
  /* <ShoppingCartIcon style={{ fontSize: 100 }} /> */
}
