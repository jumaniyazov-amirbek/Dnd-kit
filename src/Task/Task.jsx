import React from "react";

export const Task = (id, title) => {
  return (
    <div className="task">
      <input type="checkbox" />
      {title}
    </div>
  );
};
