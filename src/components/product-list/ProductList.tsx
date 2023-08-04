import type { ReactElement } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { State, getAll } from "../../slice/inventorySlice";
import { Fragment, useEffect, useState } from "react";
import CardItem from "../card-item/CardItem";
import Grid from "@mui/material/Grid";
import { uniqueId } from "lodash";
import {  Link, TextField } from "@mui/material";

const ProductList = (): ReactElement => {
  const [searchName, setSearchName] = useState<string>("");
  const location = useLocation().state as string;
  const inventory = useSelector(getAll);
  const [dataList, setDataList] = useState<State[]>([]);
  const showAll: string[] = ["all", ""];
  const sortArray = ():void => {
    setDataList([...dataList].sort((a,b) => b.unitPrice - a.unitPrice))
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
 
  return (
    <Fragment>
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
          onChange={(e) => setSearchName(e.target.value)}
          value={searchName}
          sx={{ width: "50%" }}
        />
        <Grid sx={{position:'absolute', top:150, right:100}}>
            <Link onClick={() => sortArray()} sx={{textDecoration:'none', cursor:'pointer',fontFamily:'sans-serif', fontSize:'15px', color:'black'}}>Sort price high to low</Link>
        </Grid>
      </div>

      <Grid
        container
        gap={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {dataList.map((list) => (
          <Fragment key={uniqueId()}>
            <CardItem data={list} />
          </Fragment>
        ))}
      </Grid>
    </Fragment>
  );
};

export default ProductList;
