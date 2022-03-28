import React, { useEffect, useState } from "react";
import Countries from "../Countries/Countries";
import Details from "../Details/Details";

const Main = () => {
  const [countries, getCountries] = useState([]);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => getCountries(data));
  }, []);

  useEffect(() => {
    setDetails(details);
  }, [countries, details]);

  const showDetails = (country) => {
    setDetails(country);
  };

  return (
    <main className="my-5">
      <div>
        <Details details={details}></Details>
      </div>
      <h2 className="mb-5">All Countries</h2>
      <div className="row row-cols-1 row-cols-md-3 row-cols-md-4 justify-content-center g-5">
        {countries.map((country) => (
          <Countries
            country={country}
            key={country.cca3}
            showDetails={showDetails}
          ></Countries>
        ))}
      </div>
    </main>
  );
};

export default Main;
