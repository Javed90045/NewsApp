import React from "react";
import "../Styles/Card.css";
const Card = ({ data }) => {
  return (
    <div className="NewsCard">
      {data.map((news, index) => {
        if (!news.urlToImage) {
          return null;
        } else {
          return (
            <div className="card" key={index}>
              <div className="image">
                <img src={news.urlToImage} alt="" />
              </div>
              <h5>{news.title}</h5>
              <p>{news.description}</p>
              <button onClick={() => window.open(news.url)}>Read More</button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
