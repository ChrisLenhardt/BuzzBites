import './App.css';
import Home from './components/home';
import { Routes, Route } from 'react-router-dom';
import ShoppingCart from './components/shoppingCart';
import TestPage from './components/testPage';



function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<ShoppingCart/>}/>
      <Route path="/test" element={<TestPage />}/>
    </Routes>
  );
}

export default App;
