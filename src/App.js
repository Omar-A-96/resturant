import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home/HomePage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './Components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import MunePage from './pages/MunePage/MunePage';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/MunePage' element={<MunePage/>}/>
   </Routes>
   </>
  );
}

export default App;
