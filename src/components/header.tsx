import React from 'react';
import {
  Typography,
  AppBar,
  CssBaseline,
  Button,
  Box,
  IconButton,
  TextField,
} from '@mui/material';
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
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <AppBar color="primary" sx={{ height: '40%' }}>
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
              <TheatersIcon
                sx={{
                  marginTop: '3%',
                }}
              />
              <Typography variant="h6">Filmoteka</Typography>
            </Box>
            <Box
              sx={{
                marginRight: '5%',
                color: 'white',
              }}
            >
              <Button
                variant="text"
                sx={{
                  color: 'white',
                }}
              >
                Home
              </Button>
              <Button
                variant="text"
                sx={{
                  color: 'white',
                }}
              >
                My Library
              </Button>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <TextField
              inputProps={{ 'aria-label': 'search' }}
              label="Search films"
              type="search"
              variant="standard"
            />
            <IconButton
              type="button"
              aria-label="search"
              sx={{
                marginTop: '1.4%',
              }}
            >
              <Search />
            </IconButton>
          </Box>
        </AppBar>
      </ThemeProvider>
    </>
  );
}

export default Header;
