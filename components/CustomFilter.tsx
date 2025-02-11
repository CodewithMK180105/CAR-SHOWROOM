'use client'
import React, { useState } from 'react'
import SearchFuel from "@/components/SearchFuel"


const CustomFilter = () => {

  const [fuel, setFuel]=useState('');

  return (
    <div className="searchbar__item">
      <SearchFuel 
          fuel={fuel}
          setFuel={setFuel}
        />
    </div>
  )
}

export default CustomFilter
