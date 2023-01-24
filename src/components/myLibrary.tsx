import React, { useState } from 'react';
import { AppBar, CssBaseline, Box, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import TheatersIcon from '@mui/icons-material/Theaters';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CardList from './cardList';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function MyLibrary(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [watchedFilms, setWatchedFilms] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [queueFilms, setQueueFilms] = useState([]);
  const [showQueue, setShowQueue] = useState(false);

  const onClick = (): void => {
    setShowQueue(!showQueue);
  };

  console.log(showQueue);
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <AppBar color="primary" sx={{ height: '150px', position: 'static' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                marginLeft: '5%',
                display: 'flex',
              }}
            >
              <Link to="/">
                <TheatersIcon />
                Filmoteka
              </Link>
            </Box>
            <Box
              sx={{
                marginRight: '5%',
                color: 'white',
              }}
            >
              <Link to="/">Home</Link>
              <Link to="/myLibrary">My Library</Link>
            </Box>
          </Box>
          <Stack
            direction="row"
            spacing={5}
            display="flex"
            justifyContent="center"
            paddingTop="3%"
          >
            <Button onClick={onClick} variant="contained">
              Watched
            </Button>
            <Button onClick={onClick} variant="contained">
              queue
            </Button>
          </Stack>
        </AppBar>
      </ThemeProvider>
      {showQueue ? (
        <CardList filmsArray={queueFilms} />
      ) : (
        <CardList filmsArray={watchedFilms} />
      )}
    </>
  );
}

export default MyLibrary;
