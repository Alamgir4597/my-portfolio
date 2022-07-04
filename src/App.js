import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Home from './Homes/Home';
import Footer from './Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Mailer from './Mailer/Mailer';
import MotorCycle from './MotorCycle/MotorCycle';
import CarHouse from './CarHouse/CarHouse';
import Photographer from './Photographer/Photographer';
import About from './About/About';
import Blogs from './Blogs/Blogs';

function App() {
  return (
    <div className="App">
     <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Mailer />}></Route>
        <Route path='/motorcycle_parts' element={<MotorCycle />}></Route>
        <Route path='/car_house' element={<CarHouse />}></Route>
        <Route path='/sport_Photographer' element={<Photographer />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
