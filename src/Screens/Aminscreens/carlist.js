import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

import * as React from "react";

import { useNavigate } from "react-router-dom";

import { Table } from "react-bootstrap";

import SmButton from "../../Components/Smbutton";
import SMGrid from "../../Components/Smgrid";
import { getFbData } from "../../Config/Firebasemethods";



export default function CarList() {
  const [listData, setlistData] = React.useState([]);
  const [loader, setloader] = React.useState(false);


  const navigation = useNavigate();

  const pagegoestoCarForm = () => {
    navigation("/Adminhome/carForm");
  };
  
  let showData = () => {
    setloader(true)
    getFbData("CarForm")
      .then((res) => {
        console.log("Data Fetched Successfully  ", res);
        setlistData([...res]);
        console.log(res)
        setloader(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    showData();
  }, []);
  

  const col = [
    {
      key: "Car",
      displayName: "Car",
    },
    {
      key: "Modal",
      displayName: "Car Modal",
      
    },
    {
      key: "Price",
      displayName: "Price",
      
    },

    {
      key: "Color",
      displayName: "Car Color",
    
    },
  ];

  return (
    <>
      <SMGrid datasource={listData} columns={col} title="Car List" />
      <Box className=" d-flex justify-content-center align-items-center">
        <SmButton label="Add Cars" variant="contained" onClick={pagegoestoCarForm} />
      </Box>
    </>
  );
}