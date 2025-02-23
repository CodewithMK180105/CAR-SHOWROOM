import React from 'react'
import { cars } from '@/constants';
import CarCard from './CarCard';

const ExploreCars = () => {
  return (
    <div className='mt-12 padding-x padding-y max-width'>
        <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like.</p>
        </div>

        <section>
            <div className="home__cars-wrapper">
                {cars?.slice(0, 9).map((car, index)=>(
                    <CarCard
                    car={car} key={index} />
                ))}
            </div>
        </section>
        
    </div>
  )
}

export default ExploreCars
