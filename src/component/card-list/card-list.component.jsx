import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";
export const CardList = (props) => (
  <div id="MonsterImage" className="card-list">
    {props.abc.map((a) => (
      <Card pqr={a} />
    ))}
  </div>
);
