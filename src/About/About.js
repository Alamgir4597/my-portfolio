import React from 'react';
import amarrPic from '../asset/my_image.png'
const About = () => {
    return (
        <div className='container mx-auto bg-current'>
            <div className='grid grid-cols lg:grid-cols-2'>
                <div >
                    
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                           
                            <div>
                                <h1 class="text-2xl font-bold"> My name is Alamgir Hossain, I am  MERN Stack  Developer</h1>
                                <p class="py-6"> I love working on new and exciting technologies emerging nowadays. I have good work experience as a MERN Stack Developer .</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img class="mask mask-squircle" src={amarrPic} />
                            
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default About;