import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

import { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

import { useNavigate } from "react-router-dom";

import { getFbData, postFbData } from "../../Config/Firebasemethods";

function CarFrom() {
  const [open, setOpen] = useState(false);
  const [msgopen, setmsgOpen] = useState(false);
  const [model, setModel] = useState({});
  const [loader, setloader] = useState(false);
  const [listData, setlistData] = useState([]);
  const [displayObj, setdisplayObj] = useState({});
  const [res, setRes] = useState();
  const [condition, setCondition] = useState("");
  const navigation = useNavigate();

  const col = [
    {
      displayName: "Action",
      key: "",
      displayField: (e) => (
        <Button
          onClick={() =>
            setdisplayObj({
              ...displayObj,
              userName: e.userName,
              email: e.email,
              message: e.message,
            })
          }
          variant="contained">
          View
        </Button>
      ),
      searchAble: true,
    },
    {
      key: "userName",
      displayName: "User",
      searchAble: true,
    },
    {
      key: "email",
      displayName: "E-mail",
      searchAble: true,
    },
    {
      key: "message",
      displayName: "Message",
      searchAble: true,
    },
  ];


  let saveFeed = (event) => {
    event.preventDefault();
    setloader(true);
    postFbData("CarForm", model)
      .then(() => {
        console.log("Save SuccessFully !");
        setOpen(false);
        setmsgOpen(true);
        setloader(false);
        setCondition("success");
        setRes("Save SuccessFully !");
        navigation("/Adminhome/carlist");
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
        setOpen(true);
        setRes(err);
        setmsgOpen(true);
        setCondition("error");
        setRes(res);
      });
  };



  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}></Grid>
      <Typography
        className=" text-center text-primary mt-3 mb-3"
        variant="h3">Add New Cars</Typography>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Car Name</Form.Label>
          <Form.Control
            type="text"

            onChange={(e) => setModel({ ...model, Car: e.target.value })}
          />

          <Form.Label>Car Modal</Form.Label>
          <Form.Control
            type="text"
           
            onChange={(e) => setModel({ ...model, Modal: e.target.value })}
          />

          <Form.Label>Car Price</Form.Label>
          <Form.Control
            type="text"

            onChange={(e) => setModel({ ...model, Price: e.target.value })}
          />
          <Form.Label>Car Color</Form.Label>
          <Form.Control
            type="text"
            
            onChange={(e) => setModel({ ...model, Color: e.target.value })}
          />
        </Form.Group>

        <Button   onClick={saveFeed} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export default CarFrom;
