import React from 'react';
import { Box } from '@mui/material';
import Footer from './footer';
import Header from './header';
import CardComponent from './cardComponent';
import { ICard } from '../models';

interface MainProps {
  filmsArray: ICard[];
}
function Main({ filmsArray }: MainProps): JSX.Element {
  return (
    <div>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          padding: '60px 32px 160px 32px',
        }}
      >
        {filmsArray.map((film: ICard) => (
          <CardComponent film={film} key={Math.random()} />
        ))}
      </Box>
      <Footer />
    </div>
  );
}
export default Main;
