import React, { useContext, useEffect, useState } from "react";
import venomContext from "../../context/venomContext";
import Loader from "../loader/Loader";
import $ from "jquery";
import classes from "classnames";
import AllBlogsCard from "./AllBlogsCard";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../banner/Banner";

export default function AllBlogs() {
  const context = useContext(venomContext);
  const { allCategories, allBlogs, blogs } = context;
  const all_blogs = blogs.blogs;
  const [catList, setCatList] = useState(all_blogs);
  const unique_list = [
    ...new Set(
      all_blogs &&
        all_blogs.map((curElem) => {
          return curElem.category;
        })
    ),
    "All",
  ];
  const filterCat = (e, category) => {
    $(".filter_btn").removeClass("filter-active");
    e.target.classList.add("filter-active");
    if (category === "All") {
      return setCatList(all_blogs);
    }
    const updated_list = all_blogs.filter((curElem) => {
      return curElem.category === category;
    });
    setCatList(updated_list);
  };

  useEffect(() => {
    allCategories();
    allBlogs();
    // eslint-disable-next-line
  }, []);
  return (
    <>
    <Header />
    <Banner />
      <section className="blogs">
        <div className="container">
          {!blogs.blogs ? (
            <Loader />
          ) : (
            <>
              <div className="categories">
                {unique_list &&
                  unique_list.sort().map((curElem, index) => {
                    return (
                      <button
                        key={index}
                        className={classes(
                          "btn btn-sm filter_btn text-capitalize",
                          { "filter-active": curElem === "All" }
                        )}
                        name={curElem}
                        onClick={(e) => filterCat(e, curElem)}
                      >
                        {curElem}
                      </button>
                    );
                  })}
              </div>
              <div className="blog-cards my-5">
                <div className="row">
                  {!catList ? (
                    <AllBlogsCard blogs={blogs.blogs} />
                  ) : (
                    <AllBlogsCard blogs={catList} />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
