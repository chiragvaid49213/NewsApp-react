import React, { Component } from "react";
import loading from "./loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center p-5">
        <img style={{ width: "2rem" }} src={loading} alt="" />
        &nbsp; Loading news....
      </div>
    );
  }
}

export default Spinner;
