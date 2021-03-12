import React from "react";

import "../styles/Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/400px-YouTube_Logo_2017.svg.png"
          alt="Youtube Logo"
        />
      </div>

      <div className="header__input">
        <input placeHolder="Search" type="text" />
        <SearchIcon className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar
          alt="Avilash Ghosh"
          src="https://avatars.githubusercontent.com/u/58250550?s=460&u=7b53b464840fc666f12e09bbb9b04ba8d676c083&v=4"
        />
      </div>
    </div>
  );
}

export default Header;
