import React from "react";
import { Link } from "react-router-dom";
import Style from "./Home.module.css";

const Home = () => {
  return (
    <div className={Style.home}>
      <h1>Take a Look at All Upcoming Artificats From Our Collection</h1>
      <Link to="/shop">Gallery</Link>
    </div>
  );
};

export default Home;
