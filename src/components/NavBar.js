import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      activeLink: "",
      active: false,
    };
  }

  categoryClick = (idOfClickedCategory) => {
    document.querySelector(idOfClickedCategory).style.color = "#434b61";
    // 434b61
    // 5c6375
    setTimeout(() => {
      document.querySelector(idOfClickedCategory).style.color = "white";
    }, 350);
  };

  render() {
    return (
      <div className="mb-5">
        <nav className="navbar navbar-expand-lg bg-dark fixed-top p-2">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{ color: "white" }}>
              <strong>
                <strong>Daily-News</strong>
              </strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/"
                    id="home"
                    style={{ color: "white" }}
                    // onClick={this.categoryClick("/")}
                    onClick={() => {
                      this.categoryClick("#home");
                    }}
                  >
                    <strong>Home</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/business"
                    id="business"
                    style={{ color: "white" }}
                    // onClick={this.categoryClick("business")}
                    onClick={() => {
                      this.categoryClick("#business");
                    }}
                  >
                    <strong>Business</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/entertainment"
                    id="entertainment"
                    style={{ color: "white" }}
                    onClick={() => {
                      this.categoryClick("#entertainment");
                    }}
                  >
                    <strong>Entertainment</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/general"
                    id="general"
                    style={{ color: "white" }}
                    onClick={() => {
                      this.categoryClick("#general");
                    }}
                  >
                    <strong>General</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/health"
                    id="health"
                    style={{ color: "white" }}
                    onClick={() => {
                      this.categoryClick("#health");
                    }}
                  >
                    <strong>Health</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/science"
                    id="science"
                    style={{ color: "white" }}
                    onClick={() => {
                      this.categoryClick("#science");
                    }}
                  >
                    <strong>Science</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/sports"
                    id="sports"
                    style={{ color: "white" }}
                    onClick={() => {
                      this.categoryClick("#sports");
                    }}
                  >
                    <strong>Sports</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/technology"
                    id="technology"
                    style={{ color: "white" }}
                    onClick={() => {
                      this.categoryClick("#technology");
                    }}
                  >
                    <strong>Technology</strong>
                  </Link>
                </li>
                {/* VideoGallery
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/videos"
                    id="videos"
                    style={{ color: "white" }}
                    onClick={() => {
                      this.categoryClick("#videos");
                    }}
                  >
                    VIDEOS
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
