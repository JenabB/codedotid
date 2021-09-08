const cities = [
  "merak",
  "tangerang",
  "jakarta",
  "bogor",
  "cianjur",
  "cimahi",
  "bandung",
];

function citiesSlice(array, city) {
  const filterCities = array.filter((el) => el !== city);
  return filterCities;
}

console.log(citiesSlice(cities, "bogor")); //['merak', 'tangerang', 'jakarta', 'cianjur', 'cimahi', 'bandung']
console.log(citiesSlice(cities, "jakarta")); //['merak', 'tangerang', 'bogor', 'cianjur', 'cimahi', 'bandung’]
