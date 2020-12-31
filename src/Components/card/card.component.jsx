import React from "react";
import "../card/card.component.css";

export const Card = (props) => (
  <div className="card-container">
      <img alt='Monster image' className="img-container" src={`https://robohash.org/${props.user.id}?set=set1`}/>
    <h3>{props.user.name}</h3>
    <h6>{props.user.email}</h6>
  </div>
);
