import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className="container">
      <BrowserRouter>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link px-2" : "nav-link px-2 link-dark"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/learning"
                className={({ isActive }) =>
                  isActive ? "nav-link px-2" : "nav-link px-2 link-dark"
                }
              >
                Learning
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? "nav-link px-2" : "nav-link px-2 link-dark"
                }
              >
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link px-2" : "nav-link px-2 link-dark"
                }
              >
                About
              </NavLink>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Sign-up
            </button>
          </div>
        </header>
      </BrowserRouter>
    </div>
  );
}
