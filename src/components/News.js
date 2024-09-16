import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types"; // Import PropTypes at the top

export class News extends Component {
  static defaultProps = {
    noOfNewsCards: 7,
    country: "us",
    category: "general",
  };

  static propTypes = {
    noOfNewsCards: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("Constructor called!");
    this.state = {
      // this.state acts as the starting position of different variables
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false,
    };
  }

  // Using fetch api
  async componentDidMount() {
    window.scrollTo(0, 0);
    console.log("componentDidMount called!");
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.myApiKey}&page=1&pageSize=${this.props.noOfNewsCards}`;
    this.setState({ loading: true });
    let fetchedData = await fetch(url); // using fetch api to fetch data
    let jsonData = await fetchedData.json();
    console.log(jsonData);
    this.setState({
      articles: jsonData.articles,
      totalResults: jsonData.totalResults,
      loading: false,
    });
  }

  handlePreviousClick = async () => {
    window.scrollTo(0, 0);
    let url = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&country=${this.props.country}&apiKey=${this.props.myApiKey}&page=${
      this.state.page - 1
    }&pageSize=${this.props.noOfNewsCards}`;
    this.setState({ loading: true });
    let fetchedData = await fetch(url);
    let jsonData = await fetchedData.json();
    this.setState({
      articles: jsonData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 7)) {
    } else {
      window.scrollTo(0, 0);
      let url = `https://newsapi.org/v2/top-headlines?category=${
        this.props.category
      }&country=${this.props.country}&apiKey=${this.props.myApiKey}&page=${
        this.state.page + 1
      }&pageSize=${this.props.noOfNewsCards}`;
      this.setState({ loading: true });
      let fetchedData = await fetch(url);
      let jsonData = await fetchedData.json();
      this.setState({
        articles: jsonData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };

  render() {
    console.log("Render called!");
    return (
      <div
        className="container my-3 pt-4"
        style={{ backgroundColor: "#434b61" }}
      >
        <h3 className="mb-3">Daily-News - Top Headlines</h3>
        <div className="row">
          {this.state.loading ? (
            <p className="container">
              <Spinner />
            </p>
          ) : (
            this.state.articles.map(
              // Arrow Funtion
              (element) => {
                return (
                  // this is return statement for the arrow function
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              }
            )
          )}
        </div>
        {this.state.articles &&
        this.state.articles.length > 0 &&
        !this.state.loading ? (
          <div className="row">
            <div className="container d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.handlePreviousClick}
                disabled={this.state.page <= 1}
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.handleNextClick}
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.noOfNewsCards)
                }
              >
                Next &rarr;
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        <div>
          {!this.state.loading && this.state.articles.length == 0 ? (
            <strong>No data found</strong>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default News;

// <div className="container my-3 pt-4">
//   <h3 className="mb-3">Daily-News - Top Headlines</h3>
//   <div className="row">
//     {this.state.articles && this.state.articles.length > 0 ? (
//       this.state.articles.map(
//         // Arrow Funtion
//         (element) => {
//           return (
//             <div className="col-md-4" key={element.url}>
//               <NewsItem
//                 title={element.title}
//                 description={element.description}
//                 imageUrl={element.urlToImage}
//                 newsUrl={element.url}
//               />
//             </div>
//           );
//         }
//       )
//     ) : (
//       <p className="container">
//         <Spinner />
//       </p>
//     )}
//   </div>
//   <div className="row">
//     <div className="container d-flex justify-content-between">
//       <button
//         type="button"
//         className="btn btn-dark"
//         onClick={this.handlePreviousClick}
//         disabled={this.state.page <= 1}
//       >
//         &larr; Previous
//       </button>
//       <button
//         type="button"
//         className="btn btn-dark"
//         onClick={this.handleNextClick}
//         disabled={
//           this.state.page + 1 >
//           Math.ceil(this.state.totalResults / this.props.noOfNewsCards)
//         }
//       >
//         Next &rarr;
//       </button>
//     </div>
//   </div>
// </div>

// ---------------------------------------------------------------------------------------
