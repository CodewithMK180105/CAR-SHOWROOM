import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit",
    textStyles?: string,
    rightIcon?: string,
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string)=> void;
}

export interface CarProps {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}

export interface FilterProps {
    manufacturer?: string,
    year?: string,
    fuel?: string,
    // limit: string,
    model?: string,
}

export interface HomeProps {
    searchParams: Promise<FilterProps>;
}
  
export interface optionProps {
    title: string,
    value: string
}

export interface CustomFilterProps {
    title: string,
    options: optionProps[]
}

export interface SearchFuel {
    fuel: string,
    setFuel: (fuel: string)=> void;
}

export interface SearchYear {
    year: string,
    setYear: (year: string)=> void;
}
