import React from "react";
import globe from "../../images/globe.png";

const Header = () => {
  return (
    <header className="container-fliud bg-primary d-md-flex justify-content-center align-items-center text-white py-4">
      <img className="mx-4 my-2" src={globe} alt="" width="80px" />
      <h1 className="mx-4 my-2">Country Info</h1>
    </header>
  );
};

export default Header;
