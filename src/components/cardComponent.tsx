import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { ICard } from '../models';

interface CardProps {
  film: ICard;
}

function CardComponent({ film }: CardProps): JSX.Element {
  return (
    <Card
      sx={{
        width: '309px',
        marginBottom: '32px',
      }}
    >
      <CardMedia
        sx={{ height: 449 }}
        image={film.picture.image}
        title={film.picture.title}
      />
      <CardContent>
        <Typography sx={{ fontSize: 12 }}>{film.name}</Typography>
        <Box>
          <Typography sx={{ fontSize: 12 }}>{film.description}</Typography>
          {/* <Typography sx={{ fontSize: 12 }}>10.0</Typography> */}
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
