import React, {useState} from 'react';
import {FormControl, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import Button from "@mui/material/Button";

import {deleteFilm, updateFilm} from "../../../store/actions/filmsActions";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

const AdminMovieDetails = ({filmInformation,params}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState(filmInformation.title);
  const [description, setDescription] = useState(filmInformation.description);
  const [price, setPrice] = useState(filmInformation.price);
  const [startDate, setStartDate] = useState(filmInformation.startDate);
  const [endDate, setEndDate] = useState(filmInformation.startDate);
  const [tags, setTags] = useState(filmInformation.tags);

  const handleDeleteFilm = () => {
    dispatch(deleteFilm(params.id));
    navigate('/');
  };

  const handleUpdateFilm = () => {
    const updatedFilm = {
      id: filmInformation.id,
      title: title,
      description: description,
      price: price,
      startDate: startDate,
      endDate: endDate,
      tags: tags,
    }

    dispatch(updateFilm(updatedFilm));
  }
  return (
    <>
      <img
        src={filmInformation.image}
        alt="Movie Image"
      />
      <TextField
        label='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label='Description'
        value={description}
        multiline
        onChange={(e) => setDescription(e.target.value)}
      />

      <FormControl fullWidth sx={{m: 1}}>
        <InputLabel htmlFor="outlined-adornment-amount">Cost</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </FormControl>
      <TextField
        label='Film start date'
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <TextField
        label='Film end date'
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <TextField
        label='TAGS'
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <Button
        variant='contained'
        onClick={handleUpdateFilm}
      >
        Update film
      </Button>
      <Button
        variant='contained'
        onClick={handleDeleteFilm}
      >
        DELETE FILM
      </Button>
    </>
  );
};

export default AdminMovieDetails;