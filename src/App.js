import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // use Routes instead of Switch

export default class App extends Component {
  myApiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div style={{ backgroundColor: "#434b61" }} className="pb-5">
        {/* <NavBar />
        <News noOfNewsCards={7} category="general" country="us" /> */}
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  noOfNewsCards={7}
                  category="general"
                  country="us"
                  myApiKey={this.myApiKey}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  key="business"
                  noOfNewsCards={7}
                  category="business"
                  country="us"
                  myApiKey={this.myApiKey}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  noOfNewsCards={7}
                  category="entertainment"
                  country="us"
                  myApiKey={this.myApiKey}
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  key="general"
                  noOfNewsCards={7}
                  category="general"
                  country="us"
                  myApiKey={this.myApiKey}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  noOfNewsCards={7}
                  category="health"
                  country="us"
                  myApiKey={this.myApiKey}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  noOfNewsCards={7}
                  category="science"
                  country="us"
                  myApiKey={this.myApiKey}
                />
              }
            />
            key=""
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  noOfNewsCards={7}
                  category="sports"
                  country="us"
                  myApiKey={this.myApiKey}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  noOfNewsCards={7}
                  category="technology"
                  country="us"
                  myApiKey={this.myApiKey}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

// export default App; Not used in class based component
