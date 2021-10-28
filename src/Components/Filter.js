import React from "react";

export default function Filter({ value, handleChange }) {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        name="filter"
        value={value}
        type="input"
        onChange={handleChange}
      ></input>
    </>
  );
}
