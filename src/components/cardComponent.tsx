import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

function CardComponent(): JSX.Element {
  return (
    <Card
      sx={{
        width: '309px',
      }}
    >
      <CardMedia
        sx={{ height: 449 }}
        image="https://fwcdn.pl/fpo/28/96/712896/7756000.3.jpg"
        title="Mock Picture 1"
      />
      <CardContent>
        <Typography sx={{ fontSize: 12 }}>Lizard</Typography>
        <Box>
          <Typography sx={{ fontSize: 12 }}>
            Lizards are a widespread
          </Typography>
          <Typography sx={{ fontSize: 12 }}>10.0</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
