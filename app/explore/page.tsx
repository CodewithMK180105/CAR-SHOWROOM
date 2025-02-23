import CarCard from '@/components/CarCard'
import { cars } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div className='pt-20'>
      <section className='px-8'>
            <div className="home__cars-wrapper">
                {cars?.map((car, index)=>(
                    <CarCard
                    car={car} key={index} />
                ))}
            </div>
        </section>
    </div>
  )
}

export default page
