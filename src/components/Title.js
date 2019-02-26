import React from "react";

const Title = ({ text }) => {
  return (
    <div className="container">
      <div className="row">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Title;
