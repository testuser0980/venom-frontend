import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import venomContext from "../../context/venomContext";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import BlogCardCatWise from "./CatWiseBlogCard";

export default function CategoryWiseBlogs() {
  const params = useParams();
  const context = useContext(venomContext);
  const { allBlogsCatWise, blogsCatWise } = context;
  useEffect(() => {
    allBlogsCatWise(params.cat_name);
  },[]);
  return (
    <>
      <Header />
      <Banner />
      <section className="blogs">
        <div className="container">
          <div className="blog-cards my-5">
            <div className="row">
              <BlogCardCatWise blogsCatWise={blogsCatWise} cat={params.cat_name} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
