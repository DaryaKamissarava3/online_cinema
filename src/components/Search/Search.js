import React from 'react';
import {Button, Input} from "@mui/material";

export const Search = () => {
  return (
    <div>
      <Input placeholder="Search films"  />
      <Button variant="outlined">Search</Button>
    </div>
  );
};

