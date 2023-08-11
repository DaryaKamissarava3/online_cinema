import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteFilm, updateFilm } from '../../../store/actions/filmsActions';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: '100%'
  },
  cost: {
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    borderRadius: '20px',
    padding: theme.spacing(1),
  },
  dateBtn: {
    margin: theme.spacing(2)
  }
}));
const AdminMovieDetails = ({filmInformation, params}) => {
  const classes = useStyles();
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
    <Grid container spacing={2}>
      <Grid item lg={3}>
        <img
          src={filmInformation.image}
          alt="Movie Image"
          className={classes.img}
        />
      </Grid>
      <Grid item lg={8} mr={2}>
        <Grid container ml={5} direction='column'>
          <Grid item lg={3} mb={2}>
            <TextField
              label='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} mb={2}>
            <TextField
              label='Description'
              value={description}
              multiline
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} mb={2}>
            <FormControl>
              <InputLabel htmlFor="cost">Cost</InputLabel>
              <OutlinedInput
                id="cost"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Cost"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item lg={3} mb={2}>
            <TextField
              label='Film start date'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} mb={2}>
            <TextField
              label='Film end date'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} mb={2}>
            <TextField
              label='TAGS'
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} mb={2}>
            <Button
              variant='contained'
              onClick={handleUpdateFilm}
              sx={{marginRight:'20px'}}
            >
              Update film
            </Button>
            <Button
              variant='contained'
              onClick={handleDeleteFilm}
            >
              DELETE FILM
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdminMovieDetails;