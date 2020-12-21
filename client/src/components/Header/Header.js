import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMore from "@material-ui/icons/ExpandMore";

const Header = () => {
  return (
    <div className="header">
      <img className="header_icon" src="/logo192.png" alt="logo" />

      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
