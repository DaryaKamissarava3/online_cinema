import React, { useState } from 'react';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

import { makeStyles, useTheme } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  seatGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(14, 25px)',
    gap: '1px',
    textAlign: 'center',
  },
  numberCell: {
    fontWeight: 'bold',
    borderBottom: '1px solid #ccc',
    borderRight: '1px solid #ccc',
    width: '20px'
  },
  screen: {
    width: '45%',
    height: '10px',
    background: theme.palette.primary.light,
    borderBottomRightRadius: '15px',
    borderBottomLeftRadius: '15px',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const SeatSelector = ( ) => {
  const theme = useTheme();
  const classes = useStyles();

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (row, column) => {
    const seat = `${row}${column}`;
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <>
      <Typography variant="h6" gutterBottom mt={2}>
        Choose Your Seats
      </Typography>
      <div className={classes.screen}/>
      <div className={classes.seatGrid}>
        <div className={classes.numberCell}/>
        {columns.map((column) => (
          <Box key={`col${column}`} className={classes.numberCell}>
            {column}
          </Box>
        ))}
        {rows.map((row) => (
          <React.Fragment key={`row${row}`}>
            <div className={classes.numberCell}>{row}</div>
            {columns.map((column) => (
              <ButtonBase
                key={`${row}${column}`}
                onClick={() => toggleSeatSelection(row, column)}
                sx={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  margin: '1px',
                  backgroundColor: selectedSeats.includes(`${row}${column}`) ? theme.palette.secondary.main : theme.palette.primary.main,
                  color: selectedSeats.includes(`${row}${column}`) ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText,
                }}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
      <Typography variant="body1" mt={3} mb={3}>
        Selected Seats: {selectedSeats.join(', ')}
      </Typography>
    </>
  );
};

export default SeatSelector;