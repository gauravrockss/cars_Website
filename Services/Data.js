export const manufacturersData = [
    'Acura',
    'Alfa Romeo',
    'Aston Martin',
    'Audi',
    'Bentley',
    'BMW',
    'Buick',
    'Cadillac',
    'Chevrolet',
    'Chrysler',
    'Citroen',
    'Dodge',
    'Ferrari',
    'Fiat',
    'Ford',
    'GMC',
    'Honda',
    'Hyundai',
    'Infiniti',
    'Jaguar',
    'Jeep',
    'Kia',
    'Lamborghini',
    'Land Rover',
    'Lexus',
    'Lincoln',
    'Maserati',
    'Mazda',
    'McLaren',
    'Mercedes-Benz',
    'MINI',
    'Mitsubishi',
    'Nissan',
    'Porsche',
    'Ram',
    'Rolls-Royce',
    'Subaru',
    'Tesla',
    'Toyota',
    'Volkswagen',
    'Volvo',
];
export const calculateCarRent = (city_mpg, year) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};
