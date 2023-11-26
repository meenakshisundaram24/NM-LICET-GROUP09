import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Stock Inventory Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
          <Link className="btn btn-outline-light" to="/">
            Inventory
          </Link>&nbsp;&nbsp;
          <Link className="btn btn-outline-light" to="/adduser">
            Add Stock
          </Link>&nbsp;&nbsp;
          <Link className="btn btn-outline-light" to="/edituser/:id">
            Update Stock
          </Link>&nbsp;&nbsp;
          <Link className="btn btn-outline-light" to="/deleteuser/:id">
            Delete Stock
          </Link>&nbsp;&nbsp;
          </div>

        </div>
      </nav>
    </div>
  );
}
