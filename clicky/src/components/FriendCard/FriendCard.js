import React from "react";
import "./FriendCard.css";

//pass the image into each card so all 12 are rendered
const FriendCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img className="crocImage" alt={props.image.replace(".jpg", "")} src={require("../../../public/images/" + props.image)} />
    </div>
  </div>
);

export default FriendCard;