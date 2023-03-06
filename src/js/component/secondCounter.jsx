import React from "react";

const SecondsCounter = (props) => {
    return (
      <>
        <div className="container d-flex justify-content-center align-items-center mt-3 p-2 bg-dark">
          <div className="row">
          <div className="col-2 text-center me-2">
              <h1>
                <span className="badge fw-bold border border-dark-subtle bg-secondary-subtle">{<i className="fas fa-clock"></i>}</span>
              </h1>
            </div>
          <div className="col-1 text-center me-3">
              <h1>
                <span className="badge fw-bold border border-light-subtle bg-secondary-subtle">{props.centenaDeMilSeconds}</span>
              </h1>
            </div>
          <div className="col-1 text-center me-3">
              <h1>
                <span className="badge fw-bold border border-light-subtle bg-secondary-subtle">{props.decenaDeMilSeconds}</span>
              </h1>
            </div>
            <div className="col-1 text-center me-3">
              <h1>
                <span className="badge fw-bold border border-light-subtle bg-secondary-subtle">{props.unidadDeMilSeconds}</span>
              </h1>
            </div>
            <div className="col-1 text-center me-3">
              <h1>
                <span className="badge fw-bold border border-light-subtle bg-secondary-subtle">{props.centenaSeconds}</span>
              </h1>
            </div>
            <div className="col-1 text-center me-3">
              <h1>
                <span className="badge fw-bold border border-light-subtle bg-secondary-subtle">{props.decenaSeconds}</span>
              </h1>
            </div>
            <div className="col-1 text-center me-3">
              <h1>
                <span className="badge fw-bold border border-light-subtle bg-secondary-subtle">{props.seconds}</span>
              </h1>
            </div>
          </div>
        </div>
      </>
    );
  };

export default SecondsCounter