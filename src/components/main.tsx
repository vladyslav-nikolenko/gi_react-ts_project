import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './footer';
import Header from './header';
import PaginationComponent from './pagination';
import CardList from './cardList';

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
      };
      fetchFilms();
    } catch (error) {
      console.error(error); // ?
    }
  }, [currentPage]);

  return (
    <div>
      <Header />
      <CardList filmsArray={filmsArray} />
      <PaginationComponent setCurrentPage={setCurrentPage} pages={pages} />
      <Footer />
    </div>
  );
}
export default Main;
