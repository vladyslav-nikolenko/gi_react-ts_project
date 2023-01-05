import React from 'react';
import Footer from './footer';
import Header from './header';
import CardComponent from './cardComponent';

function Main(): JSX.Element {
  return (
    <div>
      <Header />
      <CardComponent />
      <Footer />
    </div>
  );
}

export default Main;
