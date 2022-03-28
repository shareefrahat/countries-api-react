import React from "react";

const Details = ({ details }) => {
  return (
    <div>
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
          <h3 className="card-title text-imperial fw-bold">
            {details?.name?.common}
          </h3>
          <h6 className="card-text text-muted">Capital: {details?.capital}</h6>
          <h6 className="card-text text-muted">
            Continents: {details?.continents}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Details;
