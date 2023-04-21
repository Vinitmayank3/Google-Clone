/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";

import AppIcon from "@material-ui/icons/Apps";
import { Avatar } from "@mui/material";
import SearchPage from "./SearchPage";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <NavLink to="about">About</NavLink>
          <Link to="store">Store</Link>
          {/* Link */}
        </div>
        <div className="home__headerRight">
          <Link to="gmail">Gmail</Link>
          <Link to="images">Images</Link>
          <AppIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://trueinteractive.com/wp-content/uploads/2018/11/fixed-google-logo-font.png"
          alt=""
        />
        <div className="home__inputContainer">
          {/* Search */}
          <SearchPage />
        </div>
      </div>
    </div>
  );
};

export default Home;
