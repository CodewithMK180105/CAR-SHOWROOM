'use client'
import React, { useState } from 'react'
import SearchModelYear  from "@/components/SearchModelYear"
import { SearchButton } from './SearchBar';
import { useRouter } from 'next/navigation';


const FilterYear = () => {

  const [year, setYear]=useState('');
  const router= useRouter();

  const handleSearch=(e: React.MouseEvent<HTMLButtonElement>)=>{
      e.preventDefault();
  
      if(year===''){
        return alert('Please select the fuel type');
      }
  
      updateSearchParams(year.toLowerCase());
    }
  
    const updateSearchParams= (year: string)=>{
      const searchParams= new URLSearchParams(window.location.search);
  
      if(year){
        searchParams.set('year',year);
      } else{
        searchParams.delete('year');
      }
  
      const newPathName= `${window.location.pathname}?${searchParams.toString()}`;
  
      router.push(newPathName);
    }

  return (
    <div className="searchbar__item">
      <SearchModelYear 
          year={year}
          setYear={setYear}
      />
      <button onClick={handleSearch}>
        <SearchButton otherClasses="ml-1 rounded-full" />
      </button>
    </div>
  )
}

export default FilterYear
