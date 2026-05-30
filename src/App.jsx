import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Om from './components/Om';
import Tilmelding from './components/Tilmelding';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Om />
      <Tilmelding />
      <Footer />
    </div>
  );
}
