import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home/HomePage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './Components/navbar/navbar';

function App() {
  return (
   <>
   <Navbar/>
   <HomePage/>
   </>
  );
}

export default App;
