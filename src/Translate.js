import React from "react";
import "./Translate.css";

export default function Translate() {
  return (
    <div className="Translate">
      <h1 className="header">
        Translate <i class="fa-solid fa-language"></i>
      </h1>
      <div className="row">
        <div className="col-5">
          <h3>English</h3>
          <input
            type="textarea"
            className="translate-text"
            placeholder="Enter text"
          />
        </div>
        <div className="col-1">
          <i class="fa-solid fa-repeat"></i>
        </div>
        <div className="col-5">
          <h3>Another language</h3>
          <input type="textarea" className="translate-text" />
        </div>
      </div>
    </div>
  );
}
