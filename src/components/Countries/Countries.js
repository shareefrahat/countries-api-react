import React from "react";

const Countries = ({ country, showDetails }) => {
  const { name, capital, continents, flags } = country;
  return (
    <div>
      <section className="container-fluid">
        <div className="col">
          <div className="card border-1 border-primary h-100 text-center shadow">
            <img
              src={flags.png}
              className="card-img-top image-fluid mx-auto p-2"
              alt=""
            />
            <div className="card-body mb-3">
              <h3 className="card-title text-imperial fw-bold">
                {name.common}
              </h3>
              <h6 className="card-text text-muted">Capital: {capital}</h6>
              <h6 className="card-text text-muted">Continents: {continents}</h6>
            </div>
            <div className="mb-4">
              <div>
                <button
                  onClick={() => showDetails(country)}
                  className="btn btn-primary fs-5 fw-bold"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Countries;
