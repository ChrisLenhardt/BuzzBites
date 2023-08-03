import './App.css';
import Header from './components/header';
import Italian from './components/italian';
import Indian from './components/indian';
import Western from './components/western';
import Middle from './components/middle';
import Cart from './components/cart';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingCart from './components/shoppingCart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<ShoppingCart/>}/>
    </Routes>
  );
}

export default App;
