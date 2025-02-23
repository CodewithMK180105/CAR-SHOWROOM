export const manufacturers = [
  { value: "acura", label: "Acura" },
  { value: "alfa-romeo", label: "Alfa Romeo" },
  { value: "aston-martin", label: "Aston Martin" },
  { value: "audi", label: "Audi" },
  { value: "bentley", label: "Bentley" },
  { value: "bmw", label: "BMW" },
  { value: "buick", label: "Buick" },
  { value: "cadillac", label: "Cadillac" },
  { value: "chevrolet", label: "Chevrolet" },
  { value: "chrysler", label: "Chrysler" },
  { value: "citroen", label: "Citroen" },
  { value: "dodge", label: "Dodge" },
  { value: "ferrari", label: "Ferrari" },
  { value: "fiat", label: "Fiat" },
  { value: "ford", label: "Ford" },
  { value: "gmc", label: "GMC" },
  { value: "honda", label: "Honda" },
  { value: "hyundai", label: "Hyundai" },
  { value: "infiniti", label: "Infiniti" },
  { value: "jaguar", label: "Jaguar" },
  { value: "jeep", label: "Jeep" },
  { value: "kia", label: "Kia" },
  { value: "lamborghini", label: "Lamborghini" },
  { value: "land-rover", label: "Land Rover" },
  { value: "lexus", label: "Lexus" },
  { value: "lincoln", label: "Lincoln" },
  { value: "maserati", label: "Maserati" },
  { value: "mazda", label: "Mazda" },
  { value: "mclaren", label: "McLaren" },
  { value: "mercedes-benz", label: "Mercedes-Benz" },
  { value: "mini", label: "MINI" },
  { value: "mitsubishi", label: "Mitsubishi" },
  { value: "nissan", label: "Nissan" },
  { value: "porsche", label: "Porsche" },
  { value: "ram", label: "Ram" },
  { value: "rolls-royce", label: "Rolls-Royce" },
  { value: "subaru", label: "Subaru" },
  { value: "tesla", label: "Tesla" },
  { value: "toyota", label: "Toyota" },
  { value: "volkswagen", label: "Volkswagen" },
  { value: "volvo", label: "Volvo" },
];

  
  export const yearsOfProduction = [
    { title: "Year", value: "" },
    { title: "2015", value: "2015" },
    { title: "2016", value: "2016" },
    { title: "2017", value: "2017" },
    { title: "2018", value: "2018" },
    { title: "2019", value: "2019" },
    { title: "2020", value: "2020" },
    { title: "2021", value: "2021" },
    { title: "2022", value: "2022" },
    { title: "2023", value: "2023" },
    { title: "2024", value: "2024" },
    { title: "2025", value: "2025" },
  ];
  
  export const fuels = [
    // {
    //   title: "Fuel",
    //   value: "",
    // },
    {
      title: "Gas",
      value: "Gas",
    },
    {
      title: "Electricity",
      value: "Electricity",
    },
  ];
  
  export const footerLinks = [
    {
      title: "About",
      links: [
        { title: "How it works", url: "/" },
        { title: "Featured", url: "/" },
        { title: "Partnership", url: "/" },
        { title: "Bussiness Relation", url: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Events", url: "/" },
        { title: "Blog", url: "/" },
        { title: "Podcast", url: "/" },
        { title: "Invite a friend", url: "/" },
      ],
    },
    {
      title: "Socials",
      links: [
        { title: "Discord", url: "/" },
        { title: "Instagram", url: "/" },
        { title: "Twitter", url: "/" },
        { title: "Facebook", url: "/" },
      ],
    },
  ];


  export const cars = [
    {
      id: 1,
      make: "acura",
      model: "ILX",
      year: 2020,
      class: "compact",
      cylinders: 4,
      displacement: 2.4,
      drive: "fwd",
      fuel_type: "gas",
      city_mpg: 24,
      highway_mpg: 34,
      combination_mpg: 28,
      transmission: "automatic",
      rentalPrice: 45.40,
    },
    {
      id: 2,
      make: "alfa-romeo",
      model: "Giulia",
      year: 2019,
      class: "luxury",
      cylinders: 4,
      displacement: 2.0,
      drive: "rwd",
      fuel_type: "gas",
      city_mpg: 24,
      highway_mpg: 33,
      combination_mpg: 27,
      transmission: "automatic",
      rentalPrice: 91.60,
    },
    {
      id: 3,
      make: "audi",
      model: "e-tron",
      year: 2022,
      class: "electric",
      cylinders: 0,
      displacement: 0,
      drive: "awd",
      fuel_type: "electric",
      city_mpg: 78,
      highway_mpg: 77,
      combination_mpg: 78,
      transmission: "automatic",
      rentalPrice: 85.00,
    },
    {
      id: 4,
      make: "bmw",
      model: "i4",
      year: 2023,
      class: "electric",
      cylinders: 0,
      displacement: 0,
      drive: "rwd",
      fuel_type: "electric",
      city_mpg: 109,
      highway_mpg: 108,
      combination_mpg: 109,
      transmission: "automatic",
      rentalPrice: 91.60,
    },
    {
      id: 5,
      make: "chevrolet",
      model: "Bolt EV",
      year: 2021,
      class: "electric",
      cylinders: 0,
      displacement: 0,
      drive: "fwd",
      fuel_type: "electric",
      city_mpg: 127,
      highway_mpg: 108,
      combination_mpg: 118,
      transmission: "automatic",
      rentalPrice: 75.00,
    },
    {
      id: 6,
      make: "ford",
      model: "Mustang Mach-E",
      year: 2022,
      class: "electric",
      cylinders: 0,
      displacement: 0,
      drive: "awd",
      fuel_type: "electric",
      city_mpg: 100,
      highway_mpg: 86,
      combination_mpg: 93,
      transmission: "automatic",
      rentalPrice: 91.80,
    },
    {
      id: 7,
      make: "honda",
      model: "Clarity Electric",
      year: 2020,
      class: "electric",
      cylinders: 0,
      displacement: 0,
      drive: "fwd",
      fuel_type: "electric",
      city_mpg: 126,
      highway_mpg: 103,
      combination_mpg: 114,
      transmission: "automatic",
      rentalPrice: 66.80,
    },
    {
      id: 8,
      make: "hyundai",
      model: "Kona Electric",
      year: 2021,
      class: "electric",
      cylinders: 0,
      displacement: 0,
      drive: "fwd",
      fuel_type: "electric",
      city_mpg: 132,
      highway_mpg: 108,
      combination_mpg: 120,
      transmission: "automatic",
      rentalPrice: 65.00,
    },
    {
      id: 9,
      make: "jaguar",
      model: "I-PACE",
      year: 2023,
      class: "electric",
      cylinders: 0,
      displacement: 0,
      drive: "awd",
      fuel_type: "electric",
      city_mpg: 80,
      highway_mpg: 72,
      combination_mpg: 76,
      transmission: "automatic",
      rentalPrice: 91.80,
    },
    {
      id: 10,
      make: "kia",
      model: "EV6",
      year: 2022,
      class: "electric",
      cylinders: 0,
      displacement: 0,
      drive: "rwd",
      fuel_type: "electric",
      city_mpg: 117,
      highway_mpg: 101,
      combination_mpg: 109,
      transmission: "automatic",
      rentalPrice: 66.80,
    },
    {
      id: 11,
      make: "lucid",
      model: "Air",
      year: 2023,
      class: "luxury",
      cylinders: 0,
      displacement: 0,
      drive: "awd",
      fuel_type: "electric",
      city_mpg: 131,
      highway_mpg: 117,
      combination_mpg: 124,
      transmission: "automatic",
      rentalPrice: 111.80,
    },
    {
      id: 12,
      make: "mercedes-benz",
      model: "EQC",
      year: 2021,
      class: "luxury",
      cylinders: 0,
      displacement: 0,
      drive: "awd",
      fuel_type: "electric",
      city_mpg: 76,
      highway_mpg: 79,
      combination_mpg: 78,
      transmission: "automatic",
      rentalPrice: 101.00,
    },
    {
      id: 13,
      make: "nissan",
      model: "Leaf",
      year: 2020,
      class: "compact",
      cylinders: 0,
      displacement: 0,
      drive: "fwd",
      fuel_type: "electric",
      city_mpg: 123,
      highway_mpg: 99,
      combination_mpg: 111,
      transmission: "automatic",
      rentalPrice: 45.60,
    },
    {
      id: 14,
      make: "porsche",
      model: "Taycan",
      year: 2023,
      class: "sports",
      cylinders: 0,
      displacement: 0,
      drive: "awd",
      fuel_type: "electric",
      city_mpg: 76,
      highway_mpg: 84,
      combination_mpg: 80,
      transmission: "automatic",
      rentalPrice: 111.80,
    },
    {
      id: 15,
      make: "rivian",
      model: "R1T",
      year: 2023,
      class: "pickup",
      cylinders: 0,
      displacement: 0,
      drive: "awd",
      fuel_type: "electric",
      city_mpg: 74,
      highway_mpg: 66,
      combination_mpg: 70,
      transmission: "automatic",
      rentalPrice: 96.80,
    },
    {
      id: 16,
      make: "tesla",
      model: "Model S",
      year: 2022,
      class: "luxury",
      cylinders: 0,
      displacement: 0,
      drive: "awd",
      fuel_type: "electric",
      city_mpg: 124,
      highway_mpg: 115,
      combination_mpg: 120,
      transmission: "automatic",
      rentalPrice: 111.80,
    },
    {
      id: 17,
      make: "volkswagen",
      model: "ID.4",
      year: 2021,
      class: "compact",
      cylinders: 0,
      displacement: 0,
      drive: "rwd",
      fuel_type: "electric",
      city_mpg: 104,
      highway_mpg: 89,
      combination_mpg: 97,
      transmission: "automatic",
      rentalPrice: 65.00,
    },
    {
    id: 18,
    make: "volvo",
    model: "XC40 Recharge",
    year: 2022,
    class: "suv",
    cylinders: 0,
    displacement: 0,
    drive: "awd",
    fuel_type: "electric",
    city_mpg: 92,
    highway_mpg: 79,
    combination_mpg: 85,
    transmission: "automatic",
    rentalPrice: 85.00,
  },
  {
    id: 19,
    make: "audi",
    model: "Q5",
    year: 2021,
    class: "luxury",
    cylinders: 4,
    displacement: 2.0,
    drive: "awd",
    fuel_type: "gas",
    city_mpg: 23,
    highway_mpg: 28,
    combination_mpg: 25,
    transmission: "automatic",
    rentalPrice: 91.60,
  },
  {
    id: 20,
    make: "bmw",
    model: "X3",
    year: 2020,
    class: "luxury",
    cylinders: 4,
    displacement: 2.0,
    drive: "awd",
    fuel_type: "gas",
    city_mpg: 24,
    highway_mpg: 29,
    combination_mpg: 26,
    transmission: "automatic",
    rentalPrice: 91.60,
  },
  {
    id: 21,
    make: "cadillac",
    model: "XT5",
    year: 2021,
    class: "luxury",
    cylinders: 6,
    displacement: 3.6,
    drive: "awd",
    fuel_type: "gas",
    city_mpg: 19,
    highway_mpg: 26,
    combination_mpg: 22,
    transmission: "automatic",
    rentalPrice: 101.00,
  },
  {
    id: 22,
    make: "chevrolet",
    model: "Tahoe",
    year: 2022,
    class: "suv",
    cylinders: 8,
    displacement: 5.3,
    drive: "rwd",
    fuel_type: "gas",
    city_mpg: 16,
    highway_mpg: 20,
    combination_mpg: 18,
    transmission: "automatic",
    rentalPrice: 101.00,
  },
  {
    id: 23,
    make: "dodge",
    model: "Charger",
    year: 2020,
    class: "sports",
    cylinders: 6,
    displacement: 3.6,
    drive: "rwd",
    fuel_type: "gas",
    city_mpg: 19,
    highway_mpg: 30,
    combination_mpg: 23,
    transmission: "automatic",
    rentalPrice: 85.00,
  },
  {
    id: 24,
    make: "ford",
    model: "Explorer",
    year: 2021,
    class: "suv",
    cylinders: 4,
    displacement: 2.3,
    drive: "rwd",
    fuel_type: "gas",
    city_mpg: 21,
    highway_mpg: 28,
    combination_mpg: 24,
    transmission: "automatic",
    rentalPrice: 85.00,
  },
  {
    id: 25,
    make: "gmc",
    model: "Yukon",
    year: 2022,
    class: "suv",
    cylinders: 8,
    displacement: 5.3,
    drive: "4wd",
    fuel_type: "gas",
    city_mpg: 15,
    highway_mpg: 20,
    combination_mpg: 17,
    transmission: "automatic",
    rentalPrice: 101.00,
  },
  {
    id: 26,
    make: "honda",
    model: "Civic",
    year: 2020,
    class: "compact",
    cylinders: 4,
    displacement: 2.0,
    drive: "fwd",
    fuel_type: "gas",
    city_mpg: 30,
    highway_mpg: 38,
    combination_mpg: 33,
    transmission: "automatic",
    rentalPrice: 45.60,
  },
  {
    id: 27,
    make: "hyundai",
    model: "Sonata",
    year: 2021,
    class: "midsize",
    cylinders: 4,
    displacement: 2.5,
    drive: "fwd",
    fuel_type: "gas",
    city_mpg: 27,
    highway_mpg: 37,
    combination_mpg: 31,
    transmission: "automatic",
    rentalPrice: 65.00,
  },
  {
    id: 28,
    make: "infiniti",
    model: "Q50",
    year: 2020,
    class: "luxury",
    cylinders: 6,
    displacement: 3.0,
    drive: "awd",
    fuel_type: "gas",
    city_mpg: 19,
    highway_mpg: 27,
    combination_mpg: 22,
    transmission: "automatic",
    rentalPrice: 91.60,
  },
  {
    id: 29,
    make: "jeep",
    model: "Wrangler",
    year: 2021,
    class: "suv",
    cylinders: 6,
    displacement: 3.6,
    drive: "4wd",
    fuel_type: "gas",
    city_mpg: 17,
    highway_mpg: 25,
    combination_mpg: 20,
    transmission: "manual",
    rentalPrice: 85.00,
  },
  {
    id: 30,
    make: "kia",
    model: "Sorento",
    year: 2022,
    class: "midsize",
    cylinders: 4,
    displacement: 2.5,
    drive: "fwd",
    fuel_type: "gas",
    city_mpg: 24,
    highway_mpg: 29,
    combination_mpg: 26,
    transmission: "automatic",
    rentalPrice: 66.80,
  }
  ];
  
  