import React from "react";
import { Link } from "react-router-dom";
import { Buffer } from "buffer";
import Loader from "../loader/Loader";

export default function BlogCardAuthorWise({ blogsAuthorWise, author }) {
  const blogs = blogsAuthorWise.blogs;
  return (
    <>
      {!blogs ? (
        <Loader />
      ) : (
        <>
          <div className="info text-start mb-3">
            <span>
              <b>Author:</b> {author.toUpperCase()}
            </span>
            <span className="ms-2">
              <b>Total Blogs:</b> {blogsAuthorWise.total}
            </span>
          </div>
          {blogs.map((curElem) => {
            const {
              _id,
              blog_feature_img,
              category,
              createdAt,
              description,
              title,
              author,
              author_profile,
            } = curElem;
            let featureImgbufferToBase64 = blog_feature_img.data.data;
            let userProfilebufferToBase64 = author_profile.data.data;
            let buffFeatureImg = new Buffer(featureImgbufferToBase64);
            let buffUserProfile = new Buffer(userProfilebufferToBase64);
            let base64dataFeatureImg = buffFeatureImg.toString("base64");
            let base64dataUserProfile = buffUserProfile.toString("base64");
            return (
              <>
                {author !== author ? (
                  <Loader />
                ) : (
                  <div className="col-lg-4 mb-4" key={_id}>
                    <div className="card text-start">
                      <div className="card-img">
                        <Link to={"/single/" + _id}>
                          <img
                            src={`data:image/png;base64,${base64dataFeatureImg}`}
                            className="w-100"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="card-body">
                        <Link to={"/category/" + category}
                          className="m-0 Category"
                        >
                          {category}
                        </Link>
                        <Link to={"/single/" + _id}>
                          <h3 className="m-0">{title}</h3>
                        </Link>
                        <small className="m-0">
                          {createdAt
                            .replace("T", " at ")
                            .slice(0, createdAt.length - 5)}
                        </small>
                        <p className="m-0 desc">
                          {description.length > 150
                            ? description.slice(0, 150) + "..."
                            : description}
                        </p>
                        <div className="user d-flex align-items-center">
                          <div className="user-img">
                            <img
                              src={`data:image/png;base64,${base64dataUserProfile}`}
                              alt=""
                            />
                          </div>
                          <div className="user-name">
                            <p className="m-0">{author}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </>
      )}
    </>
  );
}
