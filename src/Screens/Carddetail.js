import { Height } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";

import axios from "axios";

import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

const CardDetail = () => {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  let render = () => {
    navigate("/Login");
  };

  let [data, setData] = useState([
    {
      id: 1,
      car: "Mitsubishi",
      car_model: "Montero",
      car_color: "Yellow",
      car_model_year: 2002,
      car_vin: "SAJWJ0FF3F8321657",
      price: "$2814.46",
      availability: "Available",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
    {
      id: 2,
      car: "Volkswagen",
      car_model: "Passat",
      car_color: "Maroon",
      car_model_year: 2008,
      car_vin: "WBANV9C51AC203320",
      price: "$1731.98",
      availability: "Available",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
    {
      id: 3,
      car: "Saturn",
      car_model: "L-Series",
      car_color: "Red",
      car_model_year: 2003,
      car_vin: "1HGCR6F34EA246317",
      price: "$2238.35",
      availability: "Available",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
    {
      id: 4,
      car: "Jeep",
      car_model: "Compass",
      car_color: "Violet",
      car_model_year: 2012,
      car_vin: "4USBT33454L511606",
      price: "$2732.99",
      availability: "Available",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
    {
      id: 5,
      car: "Mitsubishi",
      car_model: "Lancer Evolution",
      car_color: "Purple",
      car_model_year: 2002,
      car_vin: "WAU2GBFCXDN339713",
      price: "$3849.47",
      availability: "Available",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
    {
      id: 6,
      car: "Chevrolet",
      car_model: "Suburban",
      car_color: "Indigo",
      car_model_year: 2009,
      car_vin: "WAUSH98E96A592763",
      price: "$1252.30",
      availability: "Available",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
    {
      id: 7,
      car: "Dodge",
      car_model: "Ram Van B350",
      car_color: "Yellow",
      car_model_year: 1994,
      car_vin: "KNADH4A37A6919967",
      price: "$1762.42",
      availability: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
    {
      id: 8,
      car: "Isuzu",
      car_model: "Ascender",
      car_color: "Teal",
      car_model_year: 2004,
      car_vin: "5GTMNGEE8A8713093",
      price: "$1081.40",
      availability: "Available",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
    {
      id: 9,
      car: "BMW",
      car_model: "6 Series",
      car_color: "Purple",
      car_model_year: 2008,
      car_vin: "5TDBY5G16DS675822",
      price: "$1258.99",
      availability: "Available",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
    {
      id: 10,
      car: "Mitsubishi",
      car_model: "GTO",
      car_color: "Purple",
      car_model_year: 1994,
      car_vin: "JM1NC2PFXE0140518",
      price: "$3822.92",
      availability: "Available",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
    {
      id: 11,
      car: "Mazda",
      car_model: "Mazda5",
      car_color: "Red",
      car_model_year: 2010,
      car_vin: "WAUNE78P18A342660",
      price: "$3963.20",
      availability: "Available",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
    {
      id: 12,
      car: "Audi",
      car_model: "Q7",
      car_color: "Pink",
      car_model_year: 2012,
      car_vin: "WA1WYBFE2AD448505",
      price: "$1144.27",
      availability: "Available",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
    {
      id: 13,
      car: "Mercedes-Benz",
      car_model: "SL-Class",
      car_color: "Aquamarine",
      car_model_year: 1989,
      car_vin: "4A4AP3AU8FE713946",
      price: "$1386.49",
      availability: "Available",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
    {
      id: 14,
      car: "Volvo",
      car_model: "C70",
      car_color: "Red",
      car_model_year: 2012,
      car_vin: "WAUHGBFC9DN768366",
      price: "$1366.96",
      availability: "Available",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
    {
      id: 15,
      car: "GMC",
      car_model: "Envoy XL",
      car_color: "Green",
      car_model_year: 2006,
      car_vin: "WA1AV74L67D649365",
      price: "$1221.46",
      availability: "Available",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
    {
      id: 16,
      car: "GMC",
      car_model: "Vandura G3500",
      car_color: "Teal",
      car_model_year: 1996,
      car_vin: "1FMJK2A5XAE576485",
      price: "$1877.63",
      availability: "available",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s",
      descriptions:
        "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
    },
  ]);

  return (
    <Container>
      <div className="row">
        {data
          .filter((e) => e.id === parseInt(params.id))
          .map((x, index) => {
            return (
              <div className="cur my-2 col-md-6 mx-auto">
                <Card key={index} sx={{ display: "flex", height: 400 }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto", width: 300 }}>
                      <Typography component="div" variant="h5">
                        {x.car}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div">
                        {x.car_model}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div">
                        {x.car_model_year}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div">
                        {x.availability}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div">
                        {x.price}
                      </Typography>
                      <Typography
                        variant="body"
                        color="text.secondary"
                        component="div">
                        {x.descriptions}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={render}
                        variant="contained"
                        color="primary">
                        Book Now
                      </Button>
                    </CardActions>
                    {/* <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}></Box> */}
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 300 }}
                    image={x.image}
                    alt="Live from space album cover"
                  />
                </Card>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

export default CardDetail;
