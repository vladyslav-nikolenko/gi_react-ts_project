import React from 'react';
import { Box } from '@mui/material';
import { ICard } from '../models';
import CardComponent from './cardComponent';

interface PropsCardList {
  filmsArray: ICard[];
}

function CardList({ filmsArray }: PropsCardList): JSX.Element {
  return (
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
  );
}

export default CardList;
