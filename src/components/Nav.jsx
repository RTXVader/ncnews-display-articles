import React from "react";

function Navbar() {
    return (
        <div className="navbar">
  <a href="http://localhost:5173/articles">Home</a>
  {/* <a href="http://localhost:5173/articles/topics/news">News</a> */}
  <div className="dropdown">
    <button className="dropbtn">Topics
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="https://reliable-conkies-efec20.netlify.app/articles/topics/coding">coding</a>
      <a href="https://reliable-conkies-efec20.netlify.app/articles/topics/football">football</a>
      <a href="https://reliable-conkies-efec20.netlify.app/articles/topics/cooking">cooking</a>
    </div>
  </div>
</div>
    )
}
export default Navbar