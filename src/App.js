
import './App.css';

import Main from './Componants/Main';
import Home from './Componants/Home/Home';
import About from './Componants/About/About';
import Cart from './Componants/Cart/Cart'; 
import Checkout from './Componants/Checkout/Checkout';
import Contact from './Componants/Contact/Contact';
import Faqs from './Componants/Faqs/Faqs';
import Products from './Componants/Products/Products';
import Productdetail from './Componants/Productdetail/Productdetail';
import NotFound from './Componants/NotFound/NotFount';

import Test from './Componants/Test';

import { Routes,Route } from 'react-router-dom';


function App() {
  return (
  <Routes>
    <Route path='/' element={<Main />} >
      <Route index element={ <Home /> } />
      <Route path='/about' element={ <About  /> } />
      <Route path='/cart' element={ <Cart /> } />
      <Route path='/ckeckout' element={ <Checkout /> } />
      <Route path='/faqs' element={ <Faqs /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/productdetail' element={ <Productdetail /> } />
      <Route path='/products' element={ <Products /> } />
      <Route path='*' element={ <NotFound /> } />
    </Route>
    <Route path='*' element={ <NotFound /> } />
    <Route path='test' element={ <Test/> } />
  </Routes>
    
  

  );
}

export default App;
