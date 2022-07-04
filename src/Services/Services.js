import React from 'react';
import { FaCode, FiSett } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='container mx-auto bg-current' >
            <h1 className='text-white text-3xl mb-5'>Services</h1>
            <div className='grid grid-cols lg:grid-cols-4 justify-center justify-items-center gap-y-3'>
                <div>
                    <div class="card card-compact w-64 bg-base-100 shadow-xl">
                        <figure className='mask mask-circle ' ><FaCode className='bg-red-500 w-10 text-white text-5xl'></FaCode>
                         </figure>
                         
                        <div class="card-body">
                            <h2 class="card-title">Web Development</h2>
                            
                           <p>Fast, responsive and engaging apps that bring your ideas to life.</p>
                          
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card card-compact w-64 bg-base-100 shadow-xl">
                        <figure className='mask mask-circle ' ><FaCode className='bg-red-500 w-10 text-white text-5xl'></FaCode>
                        </figure>

                        <div class="card-body">
                            <h2 class="card-title">API Development</h2>

                            <p>REST APIs that are tailored to your needs and follow the best practices in performance and security.</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card card-compact w-64 bg-base-100 shadow-xl">
                        <figure className='mask mask-circle ' ><FaCode className='bg-red-500 w-10 text-white text-5xl'></FaCode>
                        </figure>

                        <div class="card-body">
                            <h2 class="card-title">Third-party API
                                Integration</h2>

                            <p>Integration with any third-party API of your choice. Extend the functionality of your apps with the least amount of effort.</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card card-compact w-64 bg-base-100 shadow-xl">
                        <figure className='mask mask-circle ' ><FaCode className='bg-red-500 w-10 text-white text-5xl'></FaCode>
                        </figure>

                        <div class="card-body">
                            <h2 class="card-title">Database Design</h2>

                            <p>Proper Database design for effective Web & Mobile development, always aiming for performance, scale and stability.</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;