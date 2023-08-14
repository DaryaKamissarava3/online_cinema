import React, { useState } from 'react';

import { Footer } from '../../components/SharedComponents/Footer';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { MobileStepper } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

import { useTheme } from '@mui/styles';

const steps = [
  {
    label: 'About cinema',
    description: `SKYLINE Cinema is a new chain of cinemas with unique technical solutions,
          atmospheric space, trendy design and exceptional service.
          The cinema space occupies more than 3,500 m2 in the Galileo shopping center.
          There are 7 cinema halls of different capacities on three tiers.
          The English architectural firm Chapman Taylor is responsible for the design,
          creating interiors for cinemas in Dubai (the famous multiplex in Dubai Mall),
          London, Hamburg and Madrid. There has never been anything like it in Belarus,
          both in terms of the visual concept and the level of finish and decor.
          The ideal 4K image is provided thanks to the ultra-modern laser projectors
          of the fourth series BARCO SP4K and SP2K made in Belgium. Surround multi-channel
          sound is reproduced by high-quality MAG AUDIO acoustic systems and American QSC
          cinema processors. Silver screens from the industry leader - Galaite Prism give
          you the opportunity to enjoy the depth of colors from anywhere in the room.
          All this makes our cinemas one of the most high-tech in Belarus!`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export const About = () => {
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{maxWidth: 700, flexGrow: 1, boxShadow: '2px 3px 5px 3px rgba(0, 0, 255, 0.4)'}} mt={5}>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 2,
              backgroundColor: '#3f51b5',
              color: 'white',
            }}
          >
            <Typography>{steps[activeStep].label}</Typography>
          </Paper>
          <Box sx={{height: 300, maxWidth: 700, width: '100%', p: 2}}>
            {steps[activeStep].description}
          </Box>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft/>
                ) : (
                  <KeyboardArrowRight/>
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight/>
                ) : (
                  <KeyboardArrowLeft/>
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Container>
      <Footer/>
    </>
  );
};
