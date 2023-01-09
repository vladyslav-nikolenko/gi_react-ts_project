import React from 'react';
import Footer from './footer';
import Header from './header';
import CardComponent from './cardComponent';
import { ICard } from '../models';

interface MainProps {
  filmsArray: ICard[];
}

function Main({ filmsArray }: MainProps): JSX.Element {
  // console.log(filmsArray, 'filmsArMAin');
  return (
    <div>
      <Header />
      {filmsArray.map((film: ICard) => (
        <CardComponent film={film} key={Math.random()} />
      ))}
      <Footer />
    </div>
  );
}
export default Main;
