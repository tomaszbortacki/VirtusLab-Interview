import React from "react";

const Loading = ({ zoom = 1 }) => {
  return (
    <div className="loading__wrapper" style={{ zoom }}>
      <div className="loading">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
