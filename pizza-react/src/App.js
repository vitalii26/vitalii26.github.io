import React from 'react';
import './App.scss';
import Header from './components/header';
import Routes from './context/Routes';
import {CartState} from './context/cart-context/CartState';
import Footer from './components/footer/Footer';



function App() {
  return (
    <CartState>
      <div className="p">
        <Header />
        <Routes />
        <Footer />
      </div>
    </CartState>
  );
}

export default App;
