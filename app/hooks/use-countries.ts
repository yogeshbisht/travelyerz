import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

const useCountries = () => {
  const availableCountries = () => formattedCountries;

  const countryByValue = (value: string) => {
    return formattedCountries.find((country) => country.value === value);
  };

  return {
    availableCountries,
    countryByValue,
  };
};

export default useCountries;
