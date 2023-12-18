import React, { useState } from "react";
import styles from "./Search.module.css";

export default function Search({ onSearch, onTextInput }) {
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
    <form onSubmit={handleSubmit} className={styles.search}>
      <label htmlFor="search" className={styles.searchLabel}>Search: </label>
      <input
        id="search"
        type="text"
        value={inputText}
        onChange={handleInputTextChange}
        className={styles.searchInput}
      />
    </form>
  );
}
