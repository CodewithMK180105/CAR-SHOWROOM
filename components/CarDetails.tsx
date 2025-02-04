import React from 'react'
import { CarProps } from '@/types'
import Image from 'next/image';

// interface CarDetails {
//     isOpen: boolean,
//     closeModal: ()=>void,
//     car: CarProps
// }

interface CarCardProps {
  car: CarProps;
}

const CarDetails = ({ car }: CarCardProps) => {
  return (
    <div>

      <h1 className='font-bold text-xl'>Car Details & Rental Information</h1>

      <div className='mt-4 bg-blue-700 p-4 rounded-xl'>
        <Image
          src={"/hero.png"}
          alt="car model"
          width={200}
          height={200}
          className="object-contain h-40 w-72 mx-auto"
        />
      </div>

      <div className='w-full mt-2 flex justify-between'>
        <div className='bg-blue-100 p-4 w-[32%] rounded-xl'>
          <Image
            src="/hero.png"
            alt="car model"
            width={200}
            height={200}
            className="object-contain h-16 w-full mx-auto"
          />
        </div>
        <div className='bg-blue-100 p-4 w-[32%] rounded-xl'>
          <Image
            src="/hero.png"
            alt="car model"
            width={200}
            height={200}
            className="object-contain h-16 w-full mx-auto"
          />
        </div>
        <div className='bg-blue-100 p-4 w-[32%] rounded-xl'>
          <Image
            src="/hero.png"
            alt="car model"
            width={200}
            height={200}
            className="object-contain h-16 w-full mx-auto"
          />
        </div>
      </div>

      <h3 className='mt-4 font-semibold text-lg capitalize'>{car.make} {car.model}</h3>

      <div className='mt-1 flex flex-col gap-1'>
        {Object.entries(car).map(([key, value])=>(
          <div className='flex justify-between' key={key}>
            <p className='text-gray-400 capitalize'>{key.split("_").join(" ")}</p>
            <p className='font-bold'>{value}</p>
        </div>
        ))}
      </div>

    </div>
  )
}

export default CarDetails


{/* <div className='flex justify-between'>
          <p className='text-gray-400'>City Mpg</p>
          <p className='font-bold'>{car.city_mpg}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-gray-400'>Class</p>
          <p className='font-bold'>{car.class}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-gray-400'>Combination Mpg</p>
          <p className='font-bold'>{car.combination_mpg}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-gray-400'>Cylinders</p>
          <p className='font-bold'>{car.cylinders}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-gray-400'>Displacement</p>
          <p className='font-bold'>{car.displacement}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-gray-400'>Drive</p>
          <p className='font-bold'>{car.drive}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-gray-400'>Fuel Type</p>
          <p className='font-bold'>{car.fuel_type}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-gray-400'>Highway Mpg</p>
          <p className='font-bold'>{car.highway_mpg}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-gray-400'>Make</p>
          <p className='font-bold'>{car.make}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-gray-400'>Model</p>
          <p className='font-bold'>{car.model}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-gray-400'>Transmission</p>
          <p className='font-bold'>{car.transmission}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-gray-400'>Year</p>
          <p className='font-bold'>{car.year}</p>
        </div> */}