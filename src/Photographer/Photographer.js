import React from 'react';

const Photographer = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <img src='' class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Car House</h1>
                        <p class="py-6">Car Buying React Web application</p>
                        <p> many types car collection, user login system with firebase and Also
                            backend system with mongodb
                        </p>
                        <button class="btn btn-primary"><a
                            target="_blank"

                            href='https://splendorous-centaur-2307c3.netlify.app/'>
                            Go to car House
                        </a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photographer;