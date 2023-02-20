import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import venomContext from "./venomContext";
import cookies from "react-cookies";

export default function VenomState(props) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState("");
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [blogsCatWise, setBlogsCatWise] = useState([]);
  const [blogsAuthorWise, setBlogsAuthorWise] = useState([]);
  const [blogIDWise, setBlogIDWise] = useState([]);
  // Create Account
  const CreateAccount = async (form) => {
    const url = "https://venom-server.herokuapp.com/api/v1/user/create";
    const data = await fetch(url, {
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      body: form,
    });
    const res = await data.json();
    console.log(res);
    if (res.success === true) {
      navigate("/login");
      toast.success(res.message, {
        position: "bottom-right",
      });
    }
    toast.warn(res.message, {
      position: "bottom-right",
    });
  };
  //   User Login
  const userLogin = async (email, password) => {
    const url = "https://venom-server.herokuapp.com/api/v1/user/login";
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const res = await data.json();
    if (res.success === true) {
      setIsAuthenticated(res.authToken);
      cookies.save("auth_Token", res.authToken, {
        maxAge: 3600,
      });
      toast.success("Logged in successfully", {
        position: "bottom-right",
      });
      navigate("/");
    }
    toast.error(res.message, {
      position: "bottom-right",
    });
  };
  // Logout
  const Logout = async () => {
    const url = "https://venom-server.herokuapp.com/api/v1/user/logout";
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    console.log(res);
    if (res.success === true) {
      cookies.remove("auth_Token");
      toast.success("Logged out successfully", {
        position: "bottom-right",
      });
      return;
    }
    toast.error(res.message, {
      position: "bottom-right",
    });
    // setIsAuthenticated('')
  };
  const ResetPass = async(email,password) => {
    const url = "https://venom-server.herokuapp.com/api/v1/reset/pass"
    const data = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({email,password})
    })
    const res = await data.json()
    console.log(res);
    if(res.success === false){
      toast.error(res.message, {
        position: "bottom-right"
      })
      return
    }
    toast.success(res.message, {
      position: "bottom-right"
    })
    navigate('/login')
  }
  //   Get all Categories
  const allCategories = async () => {
    const url = "https://venom-server.herokuapp.com/api/v1/categories/all";
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    const a = [];
    a.push(res);
    const b = { ...a };
    setCategories(b[0]);
  };
  //   Get all Blogs
  const allBlogs = async () => {
    const url = "https://venom-server.herokuapp.com/api/v1/blogs/all";
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    const a = [];
    a.push(res);
    const b = { ...a };
    setBlogs(b[0]);
  };
  //   Get Specific Blog
  const GetSpecificBlog = async (id) => {
    const url = "https://venom-server.herokuapp.com/api/v1/blog/" + id;
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    const a = [];
    a.push(res.blogs);
    const b = { ...a };
    setBlogIDWise(b[0]);
  };
  //   Get all Blogs - Categories wise
  const allBlogsCatWise = async (cat_name) => {
    const url = "https://venom-server.herokuapp.com/api/v1/blogs/category/" + cat_name;
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    const a = [];
    a.push(res);
    const b = { ...a };
    setBlogsCatWise(b[0]);
  };
  //   Get all Blogs - Author wise
  const allBlogsAuthorWise = async (author_name) => {
    const url = "https://venom-server.herokuapp.com/api/v1/blogs/author/" + author_name;
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    const a = [];
    a.push(res);
    const b = { ...a };
    setBlogsAuthorWise(b[0]);
  };
  return (
    <venomContext.Provider
      value={{
        CreateAccount,
        userLogin,
        isAuthenticated,
        Logout,
        ResetPass,
        allCategories,
        categories,
        allBlogs,
        blogs,
        GetSpecificBlog,
        blogIDWise,
        allBlogsCatWise,
        blogsCatWise,
        allBlogsAuthorWise,
        blogsAuthorWise,
      }}
    >
      {props.children}
    </venomContext.Provider>
  );
}
