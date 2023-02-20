import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { toast } from "react-toastify";
import venomContext from "../../context/venomContext";

export default function ResetPass() {
  const context = useContext(venomContext);
  const { ResetPass } = context;
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    const { email, password } = userInfo;
    if (email === "" || password === "") {
      return toast.warn("Please fill all the fields", {
        position: "bottom-right",
      });
    }
    ResetPass(email, password);
  };
  return (
    <>
      <Header />
      <div className="signup">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 main_form p-5 ">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  onChange={onChange}
                  name="email"
                  className="form-control"
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={onChange}
                  name="password"
                  className="form-control"
                  id="password"
                />
              </div>
              <button
                type="submit"
                onClick={(e) => onClickHandler(e)}
                className="btn btn-close-white"
              >
                Reset Password
              </button>
            </form>
            <p className="mt-3">
              Have an account?{" "}
              <Link to="/login">
                <b>LOGIN</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
