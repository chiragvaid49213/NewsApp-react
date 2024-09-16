// 6 - Creating NewsItem.js
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div
          className="card mb-3"
          style={{ width: "20rem", border: "5px solid white" }}
        >
          <img
            style={{ height: "12rem" }}
            src={imageUrl}
            // ? imageUrl
            //     : "https://s.yimg.com/ny/api/res/1.2/OWYCU4XsOtgmt.e05DfjuA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-03/5dc2e7d0-f131-11ee-afff-7e0274b3a9e1"
            className="card-img-top"
            alt=""
          />
          <div className="card-body" style={{ backgroundColor: "#434b61" }}>
            <h5 className="card-title">
              {title ? title.slice(0, 45) : "No Title available"}
              ...
            </h5>
            <p className="card-text">
              {description
                ? description.slice(0, 98)
                : "No Description available"}
              ...
            </p>
            <a
              rel="norefferer"
              href={newsUrl}
              // ? newsUrl
              //     : "https://www.cnn.com/2024/09/09/politics/video/liz-cheney-nikki-haley-trump-digvid"
              target="_blank"
              className="btn btn-sm btn-success"
            >
              <strong>Read More</strong>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;
