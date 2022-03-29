import React from "react";

const Details = ({ details }) => {
  return (
    <div>
      {details.length === 0 ? (
        <h5>Click to see the details here</h5>
      ) : (
        <div
          style={{ width: "400px" }}
          className="card border-1 mx-auto border-primary mb-5 text-center shadow"
        >
          <img
            src={details?.flags?.png}
            className="card-img-top image-fluid mx-auto p-2"
            alt=""
          />
          <div className="card-body mb-3">
            <h3 className="card-title fw-bold">{details?.name?.common}</h3>
            <div className="card-text text-start">
              <p>Capital: {details?.name?.official}</p>
              <p>Capital: {details?.capital}</p>
              <p>Continents: {details?.continents}</p>
              <p>Area: {details?.area}</p>
              <p>Population: {details?.population}</p>
            </div>
            <a
              href={details?.maps?.googleMaps}
              className="btn btn-primary fs-5 fw-bold"
            >
              Google Map
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
