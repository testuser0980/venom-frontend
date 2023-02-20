import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import venomContext from "../../context/venomContext";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Buffer } from "buffer";
import Loader from "../loader/Loader";
import Banner from "../banner/Banner";

export default function Single() {
  const params = useParams();
  const context = useContext(venomContext);
  const { GetSpecificBlog, blogIDWise } = context;
  useEffect(() => {
    GetSpecificBlog(params.id);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Header />
      <Banner
        title={blogIDWise && blogIDWise.title}
        subtitle={blogIDWise && blogIDWise.category} textTransform={"uppercase"}
      />
      <section className="single_blog">
        <div className="container">
          <div className="row">
            {blogIDWise.length === 0 ? (
              <Loader />
            ) : (
              [blogIDWise].map((curElem) => {
                console.log(curElem);
                const {
                  author,
                  author_profile,
                  blog_feature_img,
                  title,
                  description,
                  createdAt,
                  _id,
                } = curElem;
                let featureImgbufferToBase64 = blog_feature_img.data.data;
                let userProfilebufferToBase64 = author_profile.data.data;
                let buffFeatureImg = new Buffer(featureImgbufferToBase64);
                let buffUserProfile = new Buffer(userProfilebufferToBase64);
                let base64dataFeatureImg = buffFeatureImg.toString("base64");
                let base64dataUserProfile = buffUserProfile.toString("base64");
                return (
                  <div className="col-12" key={_id}>
                    <img
                      src={`data:image/png;base64,${base64dataFeatureImg}`}
                      alt=""
                      className="blog_img"
                    />
                    <div className="user d-flex align-items-center mt-5">
                      <div className="user-img">
                        <img
                          src={`data:image/png;base64,${base64dataUserProfile}`}
                          alt=""
                        />
                      </div>
                      <div className="user-name">
                        <Link to={"/author/" + author} className="m-0">{author}</Link>
                      </div>
                    </div>
                    <div className="date mt-2">
                      <p>{createdAt.replace("T", " at ").split(".")[0]}</p>
                    </div>
                    <h4 className="my-3">{title}</h4>
                    <p className="blog_paragraph">{description}</p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
