import React from 'react';
import pic from '../../asset/portfolio-pic.png'
const Hello = () => {
    return (
        <div className='container mx-auto '>
            <div className='bg-current grid grid-cols-1  lg:grid-cols-2'>
                <div>
                   
                    <div class="hero min-h-screen ">
                      
                         
                            <div>
                           
                               
                            <h1 class="text-5xl font-bold text-white ">HELL0  </h1>
                            <h3 class="py-3 text-white ">I AM   <span className='text-2xl'> ALAMGIR HOSSAIN</span></h3>  
                            <h5 class="py-3 text-white">Junior MERN Stack Developer</h5>
                            
                           
                            <button class="btn btn-sm btn-primary"> <a href="https://drive.google.com/file/d/1RtdTpFsTT6pUzYNpOPUzAcTHLd0po7By/view?usp=sharing" target="_blank" rel="noreferrer">
                                    GET RESUME
                                </a></button>
                               
                               
                            
                             </div>
                    </div>
                </div>
                <div>
                   
                    <div class="hero min-h-screen ">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img src={pic} class="max-w-sm rounded-lg shadow-2xl" />
                            
                        </div>
                    </div>
                </div>
            </div>
           

            
        </div>
    );
};

export default Hello;