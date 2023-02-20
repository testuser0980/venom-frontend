import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { toast } from "react-toastify";
import venomContext from "../../context/venomContext";

export default function SignUp() {
  const context = useContext(venomContext);
  const { CreateAccount } = context;
  const [userEmail, setUserEmail] = useState({ email: "" });
  const [userProfile, setUserProfile] = useState({ file: "" });
  const onChange = (e) => {
    setUserEmail({ ...userEmail, [e.target.name]: e.target.value });
  };
  const onFileChange = (e) => {
    const file = e.target.files[0];
    setUserProfile({ ...userProfile, [e.target.name]: file });
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    const { email } = userEmail;
    const { file } = userProfile;
    if (email.length === 0 || file.length === 0) {
      return toast.warn("Please fill all fields", {
        position: "bottom-right",
      });
    }
    const form = new FormData();
    form.append("email", email);
    form.append("userProfile", file);
    CreateAccount(form);
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
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="file" className="form-label col-md-2"></label>
                <input
                  type="file"
                  onChange={onFileChange}
                  name="file"
                  className="form-control"
                  id="file"
                  placeholder=""
                />
              </div>
              <button
                type="submit"
                onClick={(e) => onClickHandler(e)}
                className="btn btn-close-white"
              >
                Sign Up
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
