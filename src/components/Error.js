import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="errorSection">
        <div className="container error404">
          <h1 className="display-1">Oops!</h1>
          <h2>404 - Page Not Found</h2>
          <p>
            The page your are looking for might have been removed had it's name
            changed or is temporarily unavailable
          </p>
          <Link to="home">
            <button id="GoBackBtn">Go to Home Page</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Error;
