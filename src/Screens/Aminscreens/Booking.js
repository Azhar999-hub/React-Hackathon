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



export default function Booking() {
  const [listData, setlistData] = React.useState([]);
  const [loader, setloader] = React.useState(false);


  const navigation = useNavigate();

  const pagegoestoBookingForm = () => {
    navigation("/Adminhome/Bookingform");
  };
  
  let showData = () => {
    setloader(true)
    getFbData("BookingForm")
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
      key: "Cost",
      displayName: "Cost",
    },
    {
      key: "Status",
      displayName: "Car Modal",
      
    },
    {
      key: "Day",
      displayName: "Days",
      
    },

    {
      key: "CarName",
      displayName: "Car Name",
    
    },
  ];

  return (
    <>
      <SMGrid datasource={listData} columns={col} title="Booking List" />
      <Box className=" d-flex justify-content-center align-items-center">
        <SmButton label="Add Booking" variant="contained" onClick={pagegoestoBookingForm} />
      </Box>
    </>
  );
}