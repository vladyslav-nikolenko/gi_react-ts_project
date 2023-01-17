import React, { useState } from 'react';
import { AppBar, CssBaseline, Box, IconButton, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { Search } from '@mui/icons-material';
import TheatersIcon from '@mui/icons-material/Theaters';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function Header(): JSX.Element {
  const [searchFilm, setSearchFilm] = useState('');
  function onChange(e: string): void {
    setSearchFilm(e);
  }

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
          <Box display="flex" justifyContent="center">
            <TextField
              value={searchFilm}
              inputProps={{ 'aria-label': 'search' }}
              label="Search films"
              type="search"
              variant="standard"
              onChange={e => onChange(e.target.value)}
            />
            <Link to={`../search/${searchFilm}`}>
              <IconButton
                type="button"
                aria-label="search"
                sx={{
                  marginTop: '1.4%',
                }}
              >
                <Search />
              </IconButton>
            </Link>
          </Box>
        </AppBar>
      </ThemeProvider>
    </>
  );
}

export default Header;
