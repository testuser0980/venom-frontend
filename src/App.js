import Main from "./components/Main";
import VenomState from "./context/venomState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoryWiseBlogs from "./components/blogs/CatWiseBlogs";
import AuthorWiseBlogs from "./components/blogs/AuthorWiseBlogs";
import Single from "./components/blogs/Single";
import AllBlogs from "./components/blogs/AllBlogs";
import ResetPass from "./components/reset-password/ResetPass";

function App() {
  return (
    <>
      <Router>
        <VenomState>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pass/reset" element={<ResetPass />} />
            <Route path="/" element={<Main />} />
            <Route path="/blogs" element={<AllBlogs />} />
            <Route path="/single/:id" element={<Single />} />
            <Route path="/category/:cat_name" element={<CategoryWiseBlogs />} />
            <Route path="/author/:author_name" element={<AuthorWiseBlogs />} />
          </Routes>
        </VenomState>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
