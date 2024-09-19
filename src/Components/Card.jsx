import React from "react";
import "../Styles/Card.css";
const Card = () => {
  return (
    <div className="NewsCard">
      <div className="card">
        <div className="image">
          <img src="./images/memory.jpg" alt="" />
        </div>
        <h5>news title</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Card;
