import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import useSWR from "swr";
import Grid from "@material-ui/core/Grid";
import Select from "react-select";
import Sidebar from "./Sidebar";
import Products from "./Product/Products";

const useStyles = makeStyles((theme) => ({}));

function ProductContainer({ onAdd, setOpen }) {
  const { data } = useSWR("./api/products");
  const [products, setProducts] = useState(data);
  const [sorType, setSorType] = useState("");
  const [filterItem, setFilterItem] = useState("");
  
  const filtered = products?.filter((item) => {
    if (filterItem == "") {
      return item;
    } else if (
      (
        item.data.category.toLowerCase() ||
        item.data.price.toLowerCase() ||
        item.data.name.toLowerCase()
      ).includes(filterItem.toLowerCase())
    ) {
      return item;
    }
  });
  console.log(data, "product");
  const classes = useStyles();
  // const onPriceSort = (e) =>
  //   products.sort((a, b) => {
  //     return a.data.price < b.data.price ? 1 : -1;
  //   });

  const onSort = filtered?.sort((a, b) => {
    const isReversed = sorType === "asc" ? 1 : -1;
    return isReversed * a.data.category.localeCompare(b.data.category) || "";
  });

  const options = [
    { value: 50, label: "Less than 50" },
    { value: 100, label: "Less than 100" },
    { value: 200, label: "More than 100" },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          marginLeft: 8,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            marginLeft: 8,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2>
            Photography<em style={{ margin: 16 }}>/</em>
          </h2>

          <h2 style={{ opacity: 0.7 }}>Premium Photos</h2>
        </div>
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => {
            setFilterItem(e.target.value);
          }}
          style={{
            margin: "auto",
            padding: 8,
            height: 30,
          }}
        />
        <div
          style={{
            display: "flex",
            marginLeft: 8,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ArrowDownwardIcon
            onClick={() => onSort(setSorType("asc"))}
            style={{ cursor: "pointer" }}
          />
          <ArrowUpwardIcon
            onClick={() => onSort(setSorType("desc"))}
            style={{ cursor: "pointer" }}
          />
          <h3>Price</h3>
          {/* <Select
            options={options}
            name="price"
            onChange={(event) =>
              onPriceSort(setPrice({ value: event.target.value }))
            }
          /> */}
        </div>
      </div>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", position: "absolute" }}
      >
        <Grid container item xs={2} style={{ display: "flex" }}>
          <Sidebar />
        </Grid>
        <Grid
          container
          item
          xs={10}
          style={{ display: "flex", overflow: "hidden" }}
        >
          <Products onAdd={onAdd} setOpen={setOpen} onSort={onSort} />
        </Grid>
      </Grid>
    </>
  );
}

export default ProductContainer;
