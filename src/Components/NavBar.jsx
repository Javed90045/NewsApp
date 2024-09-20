import React from "react";
import "../Styles/Navbar.css";
import { IoSearchSharp } from "react-icons/io5";

const NavBar = ({inputContent, getdata}) => {
  return (
    <div className="Container">
      <div className="nav">
        <h1>Trendy News</h1>
        <h3>All News Top Headlines</h3>
        <div className="searchBox">
          <input type="text" placeholder="Search News.." onChange={(e)=>inputContent(e.target.value)}/>
          <button onClick={getdata}><IoSearchSharp /></button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
