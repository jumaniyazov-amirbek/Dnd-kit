import React, { useState } from "react";

 const Input = ({ onSubmit }) => {
  const [input, SetInput] = useState("");
  const handleSubmit = () => {
    if (!input) return;
    onSubmit(input);
    SetInput("");
  };
  return (
    <div className="continer">
      <input
        type="text"
        className="input"
        value={input}
        onChange={(e) => SetInput(e.target.value)}
      />
      <button onClick={handleSubmit}></button>
    </div>
  );
};

export default Input