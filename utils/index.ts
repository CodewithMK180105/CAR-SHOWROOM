
// export async function fetchCars(){
//     const headers={
//         'x-rapidapi-key': '05d358f57dmsh09ccdd70206b396p1eb3abjsn2f1e98c04059',
//         'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
//     }

//     const response=await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',{
//         headers: headers,
//     });

//     const result=await response.json();

//     return result;
// }

import axios from 'axios';

export async function fetchCars() {
  try {
    const response = await axios.get('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
      headers: {
        'x-rapidapi-key': '05d358f57dmsh09ccdd70206b396p1eb3abjsn2f1e98c04059',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
      },
    });

    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.error('Error fetching cars:', error);
    return null; // Handle errors gracefully
  }
}

