import React from "react";
import "./CheckButton.css";

const CheckButton = (props) => (
  <div className="CheckButton" onClick={props.toggleCheck}>
    {props.checked ? (
      <i className="Checked fas fa-check-square"></i>
    ) : (
      <i className="far fa-check-square"></i>
    )}
    {props.title?<p>{props.title}</p>:null}
  </div>
);

export default CheckButton;