'use client'
import React, { useState } from 'react'
import SearchFuel from "@/components/SearchFuel"
import { SearchButton } from './SearchBar';
import { useRouter } from 'next/navigation';


const CustomFilter = () => {

  const [fuel, setFuel]=useState('');
  const router= useRouter();

  const handleSearch=(e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();

    if(fuel===''){
      return alert('Please select the fuel type');
    }

    updateSearchParams(fuel.toLowerCase());
  }

  const updateSearchParams= (fuel: string)=>{
    const searchParams= new URLSearchParams(window.location.search);

    if(fuel){
      searchParams.set('fuel',fuel);
    } else{
      searchParams.delete('fuel');
    }

    const newPathName= `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathName);
  }

  return (
    <div className="searchbar__item">
      <SearchFuel 
          fuel={fuel}
          setFuel={setFuel}
      />
      <button onClick={handleSearch}>
        <SearchButton otherClasses="ml-1 rounded-full" />
      </button>
    </div>
  )
}

export default CustomFilter
