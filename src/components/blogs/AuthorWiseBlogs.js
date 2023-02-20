import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import venomContext from "../../context/venomContext";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import BlogCardAuthorWise from "./AuthorWiseBlogCard";

export default function AuthorWiseBlogs() {
  const params = useParams();
  const context = useContext(venomContext);
  const { allBlogsAuthorWise, blogsAuthorWise } = context;
  useEffect(() => {
    allBlogsAuthorWise(params.author_name);
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <section className="blogs">
        <div className="container">
          <div className="blog-cards my-5">
            <div className="row">
              <BlogCardAuthorWise
                blogsAuthorWise={blogsAuthorWise}
                author={params.author_name}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
