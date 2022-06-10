import React from 'react';
import Mailer from '../Mailer/Mailer';
import Hello from './Hello/Hello';

const Home = () => {
    return (
        <div>
            <Hello></Hello>
            <Mailer></Mailer>
        </div>
    );
};

export default Home;