import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Container from "@material-ui/core/Container";
import Products from "./Product/Products";
import Arts from "./Arts/Arts";
import ProductContainer from "./ProductContainer";
import React, { useState, useReducer } from "react";
import Button from "@material-ui/core/Button";
import useSWR from "swr";
import DropDown from "./Dropdown";

export const CartContext = React.createContext();

const initialCartState = 0;
const cartReducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "reset":
      return initialCartState;
    default:
      return state;
  }
};
export default function Home() {
  // const goods = data.data

  const [cartItems, setCartItems] = useState([]);
  const [count, dispatch] = useReducer(cartReducer, initialCartState);
  const [open, setOpen] = useState(true);

  const onAdd = (good) => {
    const onStore = cartItems.find((x) => x.id === good.id);
    if (onStore) {
      setCartItems(
        cartItems.map((x) => (x.id == good.id ? { ...onStore } : x))
      );
    } else {
      setCartItems([...cartItems, { ...good }]);
    }
  };
  const onClear = () => {
    setCartItems([]);
    dispatch("reset");
    setOpen(true)
  };

  const toggle = () => setOpen(true);
  return (
    <CartContext.Provider value={{ cartState: count, cartDispatch: dispatch }}>
      <html>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div style={{ positon: "absolute", padding: 40 }}>
          <Header setOpen={setOpen} toggle={toggle} />

          <DropDown
            cartItems={cartItems}
            open={open}
            setOpen={setOpen}
            onClear={onClear}
            toggle={toggle}
          />
          <Arts onAdd={onAdd} setOpen={setOpen} />

          <div>
            <ProductContainer onAdd={onAdd} setOpen={setOpen} />
          </div>
        </div>

      
      </html>
    </CartContext.Provider>
  );
}
