import React from "react";
import "./card.styles.css";
export function Card(props) {
  return (
    <div key={props.pqr.id} className="card-container">
      {console.log(props)}
      <img
        alt="monster"
        src={`https://robohash.org/${props.pqr.id}?set=set2&size=180x180`}
      ></img>
      <h3>{props.pqr.name}</h3>
      <p>{props.pqr.email}</p>
    </div>
  );
}
