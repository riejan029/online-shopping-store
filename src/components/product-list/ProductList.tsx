import type { ReactElement } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { State, getAll } from "../../slice/inventorySlice";
import { Fragment, useEffect, useState } from "react";
import CardItem from "../card-item/CardItem";
import Grid from "@mui/material/Grid";
import { uniqueId } from "lodash";
import { Button, TextField } from "@mui/material";
import React from "react";

const ProductList = (): ReactElement => {
  const [searchName, setSearchName] = useState<string>("");
  const location = useLocation().state as string;
  const inventory = useSelector(getAll);
  const [dataList, setDataList] = useState<State[]>([]);
  const showAll: string[] = ["all", ""];
  const sortArray = ():void => {
    
  }
  useEffect(() => {
    if (location !== "all")
      setDataList(inventory.filter((fil) => fil.category === location));
    if (showAll.includes(location)) setDataList(inventory);
    if (searchName !== "")
      setDataList(
        inventory.filter((nameFil) => nameFil.productName.includes(searchName))
      );
  }, [location, searchName]);
  const searchByName = (e: string): void => {
    setSearchName(e);
  };
  return (
    <Fragment key={uniqueId()}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <TextField
          placeholder="Search Item"
          onChange={(e) => searchByName(e.target.value)}
          value={searchName}
          sx={{ width: "50%" }}
        />
        <Grid sx={{position:'absolute', top:140, right:100}}>
            <Button onClick={() => sortArray()} variant="text">Sort price high to low</Button>
        </Grid>
      </div>

      <Grid
        container
        gap={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {dataList.map((list) => (
          <CardItem data={list} />
        ))}
      </Grid>
    </Fragment>
  );
};

export default ProductList;
