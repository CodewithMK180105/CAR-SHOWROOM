
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

import { CarProps, FilterProps } from '@/types';

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "x-RapidAPI-Key": "05d358f57dmsh09ccdd70206b396p1eb3abjsn2f1e98c04059",
    "x-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}


// Function to estimate car price
export function estimateCarPrice(car: CarProps): number {
  let price = 20000;

  // Adjust price based on the car's age (older cars are cheaper)
  const currentYear = new Date().getFullYear();
  const age = currentYear - car.year;
  price -= age * 1000; // Subtract $1000 for each year of age

  // Adjust price based on fuel type
  if (car.fuel_type === "electric") {
    price += 5000; // Electric cars are generally more expensive
  } else if (car.fuel_type === "hybrid") {
    price += 3000; // Hybrid cars are slightly more expensive
  }

  // Adjust price based on transmission type
  if (car.transmission === "automatic") {
    price += 1000; // Automatic cars are often more expensive
  }

  // Adjust price based on drive type
  if (car.drive === "awd" || car.drive === "4wd") {
    price += 2000; // All-wheel drive or 4WD cars are more expensive
  }

  // Adjust price based on fuel efficiency (higher MPG = higher price)
  const averageMPG = (car.city_mpg + car.highway_mpg) / 2;
  price += averageMPG * 50; // Add $50 for each MPG

  // Adjust price based on car class (luxury cars are more expensive)
  if (car.class === "luxury" || car.class === "sports") {
    price += 10000; // Luxury or sports cars are more expensive
  } else if (car.class === "compact" || car.class === "subcompact") {
    price -= 5000; // Smaller cars are cheaper
  }

  // Ensure the price doesn't go below a minimum value
  const MIN_PRICE = 5000;
  return Math.max(price, MIN_PRICE);
}

// Function to estimate daily rental price
export function estimateDailyRentalPrice(car: CarProps): number {
  let rentalPrice = 50;

  // Adjust price based on the car's age (newer cars are more expensive to rent)
  const currentYear = new Date().getFullYear();
  const age = currentYear - car.year;
  rentalPrice += age * -5; // Subtract $5 for each year of age (newer cars cost more)

  // Adjust price based on fuel type
  if (car.fuel_type === "electric") {
    rentalPrice += 20; // Electric cars are often more expensive to rent
  } else if (car.fuel_type === "hybrid") {
    rentalPrice += 10; // Hybrid cars are slightly more expensive to rent
  }

  // Adjust price based on transmission type
  if (car.transmission === "automatic") {
    rentalPrice += 5; // Automatic cars are often more expensive to rent
  }

  // Adjust price based on drive type
  if (car.drive === "awd" || car.drive === "4wd") {
    rentalPrice += 15; // All-wheel drive or 4WD cars are more expensive to rent
  }

  // Adjust price based on fuel efficiency (higher MPG = lower rental price)
  const averageMPG = (car.city_mpg + car.highway_mpg) / 2;
  rentalPrice -= averageMPG * 0.2; // Subtract $0.20 for each MPG (more efficient cars are cheaper to rent)

  // Adjust price based on car class (luxury and sports cars are more expensive to rent)
  if (car.class === "luxury" || car.class === "sports") {
    rentalPrice += 50; // Luxury or sports cars are more expensive to rent
  } else if (car.class === "compact" || car.class === "subcompact") {
    rentalPrice -= 10; // Smaller cars are cheaper to rent
  }

  // Ensure the rental price doesn't go below a minimum value
  const MIN_DAILY_RENTAL_PRICE = 20;
  return Math.max(rentalPrice, MIN_DAILY_RENTAL_PRICE);
}

export const generateCarImageUrl= (car: CarProps, angle?: string)=>{
  const url= new URL('https://cdn.imagin.studio/getimage');

  const {make, year, model}= car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
}

// 05d358f57dmsh09ccdd70206b396p1eb3abjsn2f1e98c04059