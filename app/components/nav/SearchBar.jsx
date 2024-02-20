"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    console.log(value, "value");
    setValue("");
  };
  return (
    <div>
      <input
        placeholder="Search"
        onChange={(e) => setValue(e.target.value)}
        className="rounded"
        value={value}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
