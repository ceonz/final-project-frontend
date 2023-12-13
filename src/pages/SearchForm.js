import React, { useState } from "react";

export default function SearchForm({ onSearch, onTextInput }) {
  const [inputText, setInputText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch?.(inputText);
  }

  function handleInputTextChange(e) {
    setInputText(e.target.value);
    onTextInput?.(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={inputText}
        onChange={handleInputTextChange}
      />
      <button type="submit" style={{ display: "none" }}></button>
    </form>
  );
}
