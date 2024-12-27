import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search YouTube"
      value={searchTerm}
      // When the user types, 'setSearchTerm' is called to update state
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
