import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MarketContainer from '../features/MarketContainer';
import Sobre from '../features/Sobre';
import Product from '../features/Product';
import Local from '../features/localização/Local';
import Especial from '../features/especiais/Especial';
import './App.css';

function App() {
// eslint-disable-next-line
  return (
    (
      <>
        <Routes>
          <Route exact path="/" element={<Sobre />} />
          <Route exact path="/sobre" element={<Sobre />} />
          <Route exact path="/produtos" element={<Product />} />
          <Route exact path="/local" element={<Local />} />
          <Route exact path="/especiais" element={<Especial />} />
        </Routes>
      </>
    ));
}

export default App;
