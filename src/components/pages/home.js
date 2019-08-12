import React from "react";
import NavBar from "../navigation/nav-bar";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <NavBar />
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
