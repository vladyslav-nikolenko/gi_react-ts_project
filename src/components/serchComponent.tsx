import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import CardList from './cardList';
import PaginationComponent from './pagination';

function SerchComponent(): JSX.Element {
  const path = useLocation();
  const searchFilm = path.pathname.split('/')[2];

  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsArray, setFilmsArray] = useState([]);

  useEffect(() => {
    const fetchFilms: () => void = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=2032130bcff8870a261e91758a5d6ab3&page=${currentPage}&query=${searchFilm}`,
      );
      console.log(res.data.results, 'res');
      setFilmsArray(res.data.results);
      setPages(res.data.total_pages);
    };
    fetchFilms();
  }, [currentPage, searchFilm]);

  return (
    <>
      <Header />
      <CardList filmsArray={filmsArray} />
      <PaginationComponent pages={pages} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default SerchComponent;
