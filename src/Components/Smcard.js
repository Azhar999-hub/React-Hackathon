import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import * as React from 'react';

import { useNavigate } from 'react-router-dom';

export default function SmCard(props) {
  let { id, car, carModel, price } = props;

  let navigate = useNavigate();



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcePrkEVcreicGnwJnU4z8eLlGixfmRJZb0bcl0Ua&s"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {car}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {carModel}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}