import './reset.css';
import './app.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import Footer from './components/footer/Footer';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AllProductsPage from './pages/AllProductsPage';
import ShoppingCartPage from './pages/ShoppingCartPage';





function App() {
  return (
    <div className="App">
      <Router> 
        <Header/>
        <main>
        <Routes>
          
          <Route path='/' element={<HomePage/>}/>
          <Route path='/product' element={<ProductPage/>}/>
          <Route path='/allproducts' element={<AllProductsPage/>}/>
          <Route path='/cart' element={<ShoppingCartPage/>}/>
          
        </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
