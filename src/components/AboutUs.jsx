import React from "react";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div>
      <h1>ABOUT US</h1>
      <ul>
        <li>
          <Link to="/aboutus/company">COMPANY</Link>
        </li>
        <li>
          <Link to="/aboutus/country">COUNTRY</Link>
        </li>
      </ul>
    </div>
  );
};
