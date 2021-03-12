import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      <h1>Header</h1>
      <MenuIcon />
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/400px-YouTube_Logo_2017.svg.png"
        alt="Youtube Logo"
      />
      <input type="text" />
      <SearchIcon />
      <VideoCallIcon />
      <AppsIcon />
      <NotificationsIcon />
      <Avatar
        alt="Avilash Ghosh"
        src="https://avatars.githubusercontent.com/u/58250550?s=460&u=7b53b464840fc666f12e09bbb9b04ba8d676c083&v=4"
      />
    </div>
  );
}

export default Header;
