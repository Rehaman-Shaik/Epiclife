import React from "react";
import FluorescentIcon from '@mui/icons-material/Fluorescent';

function Header() {
  return (
    <header>
      <h1> {< FluorescentIcon />} <a style={{textDecoration:"none", color:"white"}} href="/" >Keeper</a>  </h1>
    </header>
  );
}

export default Header;
