import React from "react";

const Countries = ({ country, showDetails }) => {
  const { name, capital, continents, flags } = country;
  return (
    <div>
      <section className="container-fluid">
        <div className="col">
          <div class="card border-1 border-primary h-100 text-center shadow">
            <img
              src={flags.png}
              class="card-img-top image-fluid mx-auto p-2"
              alt=""
            />
            <div class="card-body mb-3">
              <h3 class="card-title text-imperial fw-bold">{name.common}</h3>
              <h6 class="card-text text-muted">Capital: {capital}</h6>
              <h6 class="card-text text-muted">Continents: {continents}</h6>
            </div>
            <div class="mb-4">
              <div>
                <button
                  onClick={() => showDetails(country)}
                  class="btn btn-primary fs-5 fw-bold"
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
