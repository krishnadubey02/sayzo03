import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';

import './index.css';
import B2B from './Pages/B2B';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Payment from './Pages/Payment';
import ProductDetails from './Pages/ProductDetails';


function App() {

  return (
   
    <>
   
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails/>}   />
         <Route path='/login' element={<Login/>}     /> 
         <Route path='/b2b' element={<B2B/>}   />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/payment' element={<Payment/>} />
      
     </Routes>
    </>
  )
}

export default App
