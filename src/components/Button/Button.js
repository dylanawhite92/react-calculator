import React from 'react';
import "./Button.css";

// isOperator validates if a clicked button is an operator and not an integer
// This changes the class applied for different CSS styling
const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

export const Button = props => (
    <div 
        className={`button-wrapper ${
            isOperator(props.children) ? null: "operator"
        }`}
        onClick={() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
);