import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <div className="header_items">
        <Link className="header_items" to="">
          Home
        </Link>
      </div>
      <div className="header_items">
        <Link className="header_items" to="/userform">
          Add user
        </Link>
      </div>
      <div className="header_items">
        <Link className="header_items" to="/userlist">
          User list
        </Link>
      </div>
    </div>
  );
}

export default Header;