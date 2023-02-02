import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MarketContainer from '../features/MarketContainer';
import Sobre from '../features/Sobre';
import Product from '../features/Product';
import Local from '../features/Local';
import './App.css';

function App() {
  return (
    (
      <>
        <Routes>
          <Route exact path="/" element={<MarketContainer />} />
          <Route exact path="/sobre" element={<Sobre />} />
          <Route exact path="/produtos" element={<Product />} />
          <Route exact path="/local" element={<Local />} />
        </Routes>
      </>
    ));
}

export default App;
