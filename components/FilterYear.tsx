'use client'
import React, { useState } from 'react'
import SearchModelYear  from "@/components/SearchModelYear"


const FilterYear = () => {

  const [year, setYear]=useState('');

  return (
    <div className="searchbar__item">
      <SearchModelYear 
          year={year}
          setYear={setYear}
        />
    </div>
  )
}

export default FilterYear
