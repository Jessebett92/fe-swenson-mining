import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <h1>Sorry, there is no content here...</h1>
      <p>
        click <Link to="/">here</Link> to return to the homepage...
      </p>
    </div>
  );
};

export default NoMatch;
