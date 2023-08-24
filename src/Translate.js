import React from "react";
import "./Translate.css";

export default function Translate() {
  return (
    <div className="Translate">
      <h1 className="header">Translate</h1>
      <div className="row">
        <div className="col">
          <h3>English</h3>
          <input type="textarea" className="translate-text" />
        </div>
        <div className="col">
          <h3>Another language</h3>
          <input type="textarea" className="translate-text" />
        </div>
      </div>
    </div>
  );
}
