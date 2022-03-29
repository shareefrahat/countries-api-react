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
      <div className="row row-cols-1 row-cols-md-12">
        <div className="col col-md-8">
          {countries.length === 0 ? (
            <div>
              <div
                className="spinner-border text-primary"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              ></div>
              <h5 className="text-primary">Countries data is loading...</h5>
            </div>
          ) : (
            <div>
              <h2 className="mb-5">All Countries</h2>
              <div className="row row-cols-1 row-cols-md-3 justify-content-center g-5">
                {countries.map((country) => (
                  <Countries
                    country={country}
                    key={country.cca3}
                    showDetails={showDetails}
                  ></Countries>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="col col-md-4 sticky-md-top">
          <Details details={details}></Details>
        </div>
      </div>
    </main>
  );
};

export default Main;
