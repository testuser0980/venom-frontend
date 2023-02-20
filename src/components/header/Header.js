import React, { useContext } from "react";
import { Link } from "react-router-dom";
import venomContext from "../../context/venomContext";
import cookies from 'react-cookies'

export default function Header() {
  const context = useContext(venomContext);
  const { Logout } = context;
  // const navigate = useNavigate();
  // const token = JSON.parse(localStorage.getItem('authToken'))
  return (
    <>
      <header>
        <div className="container py-4">
          <nav className="d-flex justify-content-between">
            <div className="logo">
              <Link to="/">
                <h4>
                  {" "}
                  Ve<span>nom</span>
                </h4>
              </Link>
            </div>
            <div className="account">
              {cookies.load('auth_Token') ? (
                <button
                  type="button"
                  onClick={() => {
                    Logout();
                  }}
                  className="btn btn-warning btn-md"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  type="button"
                  className="btn btn-warning btn-md"
                >
                  Login
                </Link>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
