import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import venomContext from "../../context/venomContext";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Login() {
  const context = useContext(venomContext);
  const { userLogin } = context;
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    const { email, password } = userInfo;
    if (email === "" || password === "") {
      toast.error("All fields are required", {
        position: "bottom-right",
      });
    }
    userLogin(email, password);
  };
  return (
    <>
      <Header />
      <div className="signup">
        <form className="main_form p-5">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              name="email"
              value={userInfo.email}
              type="email"
              className="form-control"
              id="email"
              onChange={onChange}
            />
          </div>
          <div className="">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              value={userInfo.password}
              type="password"
              className="form-control"
              id="password"
              onChange={onChange}
            />
          </div>
          <p className=" mt-1 mb-2 text-end">
            Forgot Password? <Link to={"/pass/reset"} style={{fontWeight: 600}}>RESET PASSWORD</Link>
          </p>
          <button
            type="button"
            onClick={(e) => onClickHandler(e)}
            className="btn btn-primary border-0 mb-2"
          >
            Log In
          </button>
          <p>
            Don't have an account?{" "}
            <Link to="/signup">
              <b>SIGN UP</b>
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}
