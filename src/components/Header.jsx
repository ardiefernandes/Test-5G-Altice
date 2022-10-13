import React from "react";
import MEO_Logo from "./../assets/MEO Logo.svg";

const Header = () => {
  return (
    <header className="app-header">
      <img alt="meo logo" src={MEO_Logo} />
    </header>
  );
};

export default Header;
