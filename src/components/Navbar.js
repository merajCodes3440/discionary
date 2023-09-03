import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* <h3></h3> */}
        <Link to="/">Dictionary App</Link>
      </div>

      <div className="nav-r">
        <div className="home">
          {/* <h3>Home</h3> */}
          <Link to="/">Home</Link>
        </div>

        <div className="history">
          {/* <h3>History</h3> */}
          <Link to="/History">History</Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
