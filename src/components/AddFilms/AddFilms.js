import React, {useState} from 'react';
import {Button, Input} from '@mui/material';

import {db,storage} from '../../firebase.config';
import {collection, addDoc} from 'firebase/firestore';
import {  ref, uploadBytes,getDownloadURL } from 'firebase/storage';

import './AddFilms.css';

export const AddFilms = () => {
  const [filmTitle, setFilmTitle] = useState('');
  const [filmDescription, setFilmDescription] = useState('');
  const [filmPrice, setFilmPrice] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filmImage, setFilmImage] = useState('');
  const [filmTags, setFilmTags] = useState('');

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

  const handleSubmit = async () => {
    try {
      // Upload the film image to Firebase Storage
      const storageRef = ref(storage, `film_images/${filmImage.name}`);
      await uploadBytes(storageRef, filmImage);

      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(storageRef);

      // Create a new document in the "films" collection with the image link
      const docRef = await addDoc(collection(db, 'films'), {
        title: filmTitle,
        description: filmDescription,
        price: filmPrice,
        startDate: startDate,
        endDate: endDate,
        image: downloadURL, // Save the image link in Firestore
        tags: filmTags
      });

      console.log('Film added with ID: ', docRef.id);

      // Reset the form fields after successful submission
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
          value={filmTitle}
          onChange={(e) => setFilmTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter film description"
          className="add__film__input"
          value={filmDescription}
          onChange={(e) => setFilmDescription(e.target.value)}
        />
        <Input
          type="number"
          min="1"
          max="1000"
          placeholder="Enter film price"
          className="add__film__input"
          value={filmPrice}
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
          value={filmTags}
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
