import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import MyLibrary from './components/myLibrary';

function App(): JSX.Element {
  return (
    <BrowserRouter basename="/gi_react-ts_project">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/myLibrary" element={<MyLibrary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
