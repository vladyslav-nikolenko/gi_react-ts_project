import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Pagination } from '@mui/material';
import Footer from './footer';
import Header from './header';
import CardComponent from './cardComponent';
import { ICard } from '../models';

function Main(): JSX.Element {
  const [pages, setPages] = useState(10);
  const [filmsArray, setFilmsArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    try {
      const fetchFilms: () => void = async () => {
        const res = await axios.get(
          `https://api.themoviedb.org/3/trending/all/week?api_key=2032130bcff8870a261e91758a5d6ab3&page=+${currentPage}`,
        );
        setFilmsArray(res.data.results);
        setPages(res.data.total_pages);
        console.log(res, 'res');
      };
      fetchFilms();
    } catch (error) {
      console.error(error); // ?
    }
  }, [currentPage]);

  const handleChange: (page: number) => void = (page: number) => {
    setCurrentPage(page);
    window.scroll(0, 0);
  };
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
      <Pagination
        onChange={(e: any) => handleChange(e.target.textContent)} // ?!
        count={pages}
        shape="rounded"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '20px',
        }}
      />
      <Footer />
    </div>
  );
}
export default Main;
