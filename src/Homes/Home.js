import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Mailer from '../Mailer/Mailer';
import Services from '../Services/Services';
import Hello from './Hello/Hello';
import MyProjects from './MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
            <Hello></Hello>
            <MyProjects></MyProjects>
            <Services></Services>
            <Mailer></Mailer>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;