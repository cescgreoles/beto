import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="container-home">
      <NavLink to="/principal" activeclassname={"active"}>
        <div className="imagen">
          <img
            src="https://cdn-icons-png.flaticon.com/512/818/818473.png"
            alt="sobre-icon"
            width="300px"
          ></img>
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
