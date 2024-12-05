import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home/HomePage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './Components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import MunePage from './pages/MunePage/MunePage';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos"
import "aos/dist/aos.css"
import ProductDetalis from './Components/productdetalis/productdetalis';
import AboutPage from './pages/AboutPage/AboutPage.jsx';





function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
   <>
   <Navbar/>
   <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/MunePage' element={<MunePage/>}/>
        <Route path='/AboutPage' element={<AboutPage/>}/>
        <Route path='/productdetalis/:productId' element={<ProductDetalis/>}/>
   </Routes>
   </>
  );
}

export default App;
