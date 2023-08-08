import React from 'react';

import './FilmsItem.css';
import {Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const FilmsItem = ({
  title,
  price,
  imgUrl,
  startDate,
  endDate,
  }) => {
  const formattedStartDate = new Date(startDate).toLocaleDateString();
  const formattedEndDate = new Date(endDate).toLocaleDateString();

  return (
    <Card sx={{ maxWidth: 280,margin:'20px 20px' }}>
      <CardMedia
        sx={{ height: 380 ,width:260 }}
        image={imgUrl}
        title="film image"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Dates: {formattedStartDate}-{formattedEndDate}
        </Typography>
      </CardContent>
    </Card>
  );
};
