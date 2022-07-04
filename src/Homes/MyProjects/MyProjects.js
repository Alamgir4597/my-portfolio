import React from 'react';
import parts from '../../asset/home_parts.png';
import car from '../../asset/Car House.png';
import photo from '../../asset/photographer.png';
import { useNavigate } from 'react-router-dom';
const MyProjects = () => {
    const navigate= useNavigate();
    const goMotorcycle=()=>{
        navigate('/motorcycle_parts')
    };
    const goCarhouse = () => {
        navigate('/car_house')
    };
    const goPhoto = () => {
        navigate('/sport_Photographer')
    };
    return (
        <div className='container mx-auto bg-current' >
            <h1 className='text-white text-3xl mb-5'>My Projects</h1>
            <div className='grid grid-cols lg:grid-cols-3 justify-center justify-items-center gap-y-3'>
                <div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={parts} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Motorcycle Patrs!</h2>
                            <p>MERN Stack Project</p>
                            <div class="card-actions">
                                <button onClick={goMotorcycle} class="btn btn-primary">Explore Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={car} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Car House!</h2>
                            <p>MERN Stack Project</p>
                            <div class="card-actions">
                                <button onClick={goCarhouse} class="btn btn-primary">Explore Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={photo} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Sport Photographer!</h2>
                            <p>Javascript Project</p>
                            <div class="card-actions">
                                <button onClick={goPhoto} class="btn btn-primary">Explore Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MyProjects;