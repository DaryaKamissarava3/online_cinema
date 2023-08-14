import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../../firebase.config';
import { v4 as uuidv4 } from 'uuid';

import {addFilm} from '../../../../store/actions/filmsActions';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import format from 'date-fns/format';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
  blockInner: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#bbdefb',
  },
}));

export const AddFilms = () => {
  const classes = useStyles();

  const [title, setFilmTitle] = useState('');
  const [description, setFilmDescription] = useState('');
  const [price, setFilmPrice] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [image, setFilmImage] = useState('');
  const [tags, setFilmTags] = useState('');

  const dispatch = useDispatch();

  const generateRandomId = () => {
    return uuidv4();
  };

  const handleSubmit = async () => {
    try {
      const randomId = generateRandomId();
      const storageRef = ref(storage, `film_images/${randomId}`);
      await uploadBytes(storageRef, image);

      const downloadURL = await getDownloadURL(storageRef);
      console.log(startDate)
      console.log(endDate)
      const filmData = {
        title,
        description,
        price,
        downloadURL,
        startDate,
        endDate,
        tags,
      };

      dispatch(addFilm(filmData));

      setFilmTitle('');
      setFilmDescription('');
      setFilmPrice('');
      setStartDate('');
      setEndDate('');
      setFilmImage('');
      setFilmTags('');
    } catch (err) {
      console.error('Error adding film: ', err);
    }
  };

  const handleStartDateChange = (selectedDate) => {
    const parsedDate = new Date(selectedDate);
    const formattedParsedDate = format(parsedDate, 'yyyy-MM-dd');
    setStartDate(formattedParsedDate);
  };

  const handleEndDateChange = (selectedDate) => {
    const parsedDate = new Date(selectedDate);
    const formattedParsedDate = format(parsedDate, 'yyyy-MM-dd');
    setEndDate(formattedParsedDate);
  };

  return (
    <Container>
      <Box mt={6}>
        <Typography variant='h4' className={classes.title}>ADD MOVIE</Typography>
        <Box className={classes.blockInner}>
          <TextField
            type="text"
            placeholder="Enter film title"
            className="add__film__input"
            value={title}
            onChange={(e) => setFilmTitle(e.target.value)}
          />
          <TextField
            type="text"
            placeholder="Enter film description"
            className="add__film__input"
            value={description}
            onChange={(e) => setFilmDescription(e.target.value)}
          />
          <TextField

            type="number"
            min="1"
            max="1000"
            placeholder="Enter film price"
            className="add__film__input"
            value={price}
            onChange={(e) => setFilmPrice(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateField', 'DatePicker']}>
              <DatePicker
                label="START DATE"
                format="YYYY/MM/DD"
                value={startDate}
                onChange={handleStartDateChange}
              />
              <DatePicker
                label="END DATE"
                format="YYYY/MM/DD"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            type="file"
            placeholder="Select image"
            className="add__film__input"
            onChange={(e) => setFilmImage(e.target.files[0])}
          />
          <TextField
            type="text"
            placeholder="Enter tags"
            className="add__film__input"
            value={tags}
            onChange={(e) => setFilmTags(e.target.value)}
          />
          <Button
            variant="outlined"
            className="add__film__btn"
            type="submit"
            onClick={handleSubmit}
          >
            Add film
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
