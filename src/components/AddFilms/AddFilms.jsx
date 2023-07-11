import React, { useState } from 'react';
import { Button, Input } from '@mui/material';
import { useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../firebase.config';

import { addFilm } from '../../store/actions/filmsActions';

import './AddFilms.css';

export const AddFilms = () => {
  const [title, setFilmTitle] = useState('');
  const [description, setFilmDescription] = useState('');
  const [price, setFilmPrice] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [image, setFilmImage] = useState('');
  const [tags, setFilmTags] = useState('');

  const dispatch = useDispatch();

  const getCurrentDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  const getTomorrowDate = () => {
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    return tomorrowDate.toISOString().split('T')[0];
  };

  const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    setStartDate(selectedStartDate);
    if (endDate < selectedStartDate) {
      setEndDate(selectedStartDate);
    }
  };

  const handleEndDateChange = (e) => {
    const selectedEndDate = e.target.value;
    if (selectedEndDate < startDate) {
      return;
    }
    setEndDate(selectedEndDate);
  };

  const generateRandomId = () => {
    return uuidv4();
  };

  const handleSubmit = async () => {
    try {
      const randomId = generateRandomId();
      const storageRef = ref(storage, `film_images/${randomId}`);
      await uploadBytes(storageRef, image);

      const downloadURL = await getDownloadURL(storageRef);

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

  return (
    <div className="films__container">
      <h1>Add films</h1>
      <div className="add__films__container">
        <Input
          type="text"
          placeholder="Enter film title"
          className="add__film__input"
          value={title}
          onChange={(e) => setFilmTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter film description"
          className="add__film__input"
          value={description}
          onChange={(e) => setFilmDescription(e.target.value)}
        />
        <Input
          type="number"
          min="1"
          max="1000"
          placeholder="Enter film price"
          className="add__film__input"
          value={price}
          onChange={(e) => setFilmPrice(e.target.value)}
        />
        <input
          type="date"
          placeholder="Select start date"
          className="add__film__input"
          min={getCurrentDate()}
          value={startDate}
          onChange={handleStartDateChange}
        />
        <input
          type="date"
          placeholder="Select end date"
          className="add__film__input"
          value={endDate}
          min={getTomorrowDate()}
          onChange={handleEndDateChange}
        />
        <Input
          type="file"
          placeholder="Select image"
          className="add__film__input"
          onChange={(e) => setFilmImage(e.target.files[0])}
        />
        <Input
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
      </div>
    </div>
  );
};
