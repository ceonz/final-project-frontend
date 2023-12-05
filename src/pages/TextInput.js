import React, { useState } from "react";

function TextInput({ onInputChange }) {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
    onInputChange(newText);
  };

  return (
    <div>
      <label>Search:</label>
      <input type="text" value={inputText} onChange={handleChange} />
    </div>
  );
}

export default TextInput;