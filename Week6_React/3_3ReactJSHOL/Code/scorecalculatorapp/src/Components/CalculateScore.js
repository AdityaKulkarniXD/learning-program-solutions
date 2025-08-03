import React from 'react';
import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => {
  return decimal.toFixed(2) + '%';
};

const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
};

export const CalculateScore = ({ name, school, total, goal }) => (
  <div className="formatstyle">
    <h1 className="header">Student Details:</h1>

    <div className="Name">
      <b><span>Name:</span></b>
      <span> {name}</span>
    </div>

    <div className="School">
      <b><span>School:</span></b>
      <span> {school}</span>
    </div>

    <div className="Total">
      <b><span>Total:</span></b>
      <span> {total}</span> Marks
    </div>

    <div className="Score">
      <b>Score:</b>
      <span> {calcScore(total, goal)}</span>
    </div>
  </div>
);
