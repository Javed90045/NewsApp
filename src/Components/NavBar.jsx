import React from "react";
import "../Styles/Navbar.css";

const NavBar = () => {
  return (
    <div className="Container">
      <div className="nav">
        <h1>Trendy News</h1>
        <h3>All News Top Headlines</h3>
        <div className="searchBox">
          <input type="text" placeholder="Search News.." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
