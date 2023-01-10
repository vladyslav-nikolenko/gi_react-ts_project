import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import Footer from './footer';
import Header from './header';
import CardComponent from './cardComponent';
import { ICard } from '../models';

interface MainProps {
  filmsArray: ICard[];
}
// https://api.themoviedb.org/3/trending/all/week?api_key=2032130bcff8870a261e91758a5d6ab3&language=en-US
// https://api.themoviedb.org/3/trending/all/week?api_key=2032130bcff8870a261e91758a5d6ab3&page=2
function Main({ filmsArray }: MainProps): JSX.Element {
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/week?api_key=2032130bcff8870a261e91758a5d6ab3',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(res => console.log(res, 'Response'))
      .catch(err => console.log(err));
  });
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
