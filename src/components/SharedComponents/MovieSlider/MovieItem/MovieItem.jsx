import React from 'react';

import { Paper } from "@mui/material";

export const MovieItem = ({ item }) => {
  return (
    <Paper sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <img src={item.path} alt="carousel img"  style={{ width: "100%", height: "100vh" }}  />
      </div>
    </Paper>
  );
};
