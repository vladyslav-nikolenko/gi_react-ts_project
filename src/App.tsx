import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import MyLibrary from './components/myLibrary';

function App(): JSX.Element {
  const [filmsArray, setFilmsArray] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/week?api_key=2032130bcff8870a261e91758a5d6ab3',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(res => setFilmsArray(res.results))
      .catch(err => console.log(err));
  }, []);
  return (
    <BrowserRouter basename="/gi_react-ts_project">
      <Routes>
        <Route path="/" element={<Main filmsArray={filmsArray} />} />
        <Route path="/myLibrary" element={<MyLibrary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
