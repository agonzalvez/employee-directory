import React from "react";
import SearchBar from "./SearchBar.js";
import "./Navbar.css";

function Navbar({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchBar handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default Navbar;