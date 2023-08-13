import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  openBtn: {
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#9bc0ff',
  },
  modal: {
    padding: theme.spacing(4),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    backgroundColor: 'white',
    border: '2px solid #fefefe',
    boxShadow: 24,
  },
  innerBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
  searchGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
  },
  btn: {
    height: '55px'
  },
}));


export const ModalForSearch = ({updateClassStatus, updateDataSearch}) => {
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState('');
  const [open, setOpen] = useState(false);

  const films = useSelector((state) => state.film.films);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const findMatchesInArray = (value) => {
    const string = value.toString().toLowerCase();
    return films.filter((item) => item.title.toLowerCase().includes(string));
  };

  const handleSearch = () => {
    const res = findMatchesInArray(searchValue);
    if (res.length === 0) {
      alert('No films found');
      return;
    }
    updateClassStatus((prevState) => !prevState);
    updateDataSearch(res);
  };

  return (
    <div className="container">
      <Box className={classes.openBtn}>
        <Button
          variant='contained'
          onClick={handleOpen}
        >
          Search movies
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{backdrop: Backdrop}}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box className={classes.modal}>
              <Box className={classes.innerBlock}>
                <Typography id="transition-modal-title" variant="h6" component="h2" className={classes.title}>
                  Enter movie name or letters to search.
                </Typography>
                <Box className={classes.searchGroup}>
                  <TextField
                    id="search"
                    name="search"
                    autoFocus
                    label="Movie name"
                    variant="outlined"
                    onChange={handleInput}
                  />
                  <Button
                    className={classes.btn}
                    variant="contained"
                    endIcon={<SearchOutlinedIcon/>}
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </div>
  );
};
