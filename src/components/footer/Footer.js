import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <p>
            &copy;copyright <Link to="/">Venom</Link> | All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
