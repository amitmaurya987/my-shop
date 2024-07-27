
import './App.css';

import Main from './Componants/Main';

import About from  './Pages/About/About';
import Cart from './Pages/Cart/Cart'; 
import Checkout from './Pages/Checkout/Checkout';
import Contact from './Pages/Contact/Contact';
import Faqs from './Pages/Faqs/Faqs';
import Products from './Pages/Products/Products';
import Productdetail from './Pages/Productdetail/Productdetail';
import NotFound from './Pages/NotFound/NotFount';

import Test from './Componants/Test';

import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';


function App() {
  return (
  <Routes>
    <Route path='/' element={<Main />} exact >
      <Route index element={ <Home /> } exact  />
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
