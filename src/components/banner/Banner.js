import React from "react";

export default function Banner(props) {
  return (
    <>
      <section className="banner">
        <div className="container">
          <h2>{props.title}</h2>
          <p style={{textTransform: props.textTransform}}>{props.subtitle}</p>
        </div>
      </section>
    </>
  );
}

Banner.defaultProps = {
  title: "The Venom Blog",
  subtitle: "Your source of great content",
  textTransform: "initial"
}