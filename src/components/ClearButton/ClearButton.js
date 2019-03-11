import React from "react";
import "./ClearButton.css";

// Button that handles clearing the Input display
export const ClearButton = props => (
    <div className="clear-btn" onClick={props.handleClear}>{props.children}</div>
);