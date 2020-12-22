import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const Header = () => {
  const [header, setHeader] = useState("header");
  const [contentDisplay, setcontentDisplay] = useState("for_you");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header-scroll");
    }
  };

  const handleContentChange = (event, newContent) => {
    setcontentDisplay(newContent);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className={header}>
      <img className="header_icon" src="/img/logo-white.png" alt="logo" />

      <div className="header_center">
        <ToggleButtonGroup
          value={contentDisplay}
          exclusive
          onChange={handleContentChange}
          className="header-explore-group"
        >
          <ToggleButton value="for_you">For You</ToggleButton>
          <ToggleButton value="list">List</ToggleButton>
          <ToggleButton value="map">Map</ToggleButton>
        </ToggleButtonGroup>
        {/* <label for="for-you-page-selector" className="header-radio">
          <input
            id="for-you-page-selector"
            type="radio"
            className="radio-explore-tab"
          ></input>
          <span className="radio-explore-span">For You</span>
        </label> */}
        {/* <input type="text" />
        <SearchIcon /> */}
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
