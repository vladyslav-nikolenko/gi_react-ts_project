import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { ICard } from '../models';
import ModalPage from './modalPage';

interface CardProps {
  film: ICard;
}

const baseUrlImg = 'https://image.tmdb.org/t/p/w500';

function CardComponent({ film }: CardProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);

  const handleClose = (): void => setOpen(false);

  return (
    <>
      <Card
        sx={{
          width: '309px',
          marginBottom: '32px',
        }}
        onClick={handleOpen}
      >
        <CardMedia
          sx={{ height: 449 }}
          image={baseUrlImg + film.poster_path}
          title={film?.name || film?.original_name || film?.original_title}
        />
        <CardContent>
          <Typography sx={{ fontSize: 12 }}>
            {film?.name || film?.title}
          </Typography>
          <Box>
            <Typography sx={{ fontSize: 12 }}>{film.vote_average}</Typography>
          </Box>
        </CardContent>
      </Card>
      <ModalPage handleClose={handleClose} open={open} film={film} />
    </>
  );
}

export default CardComponent;
