import React, { useState } from "react";
import SearchBar from "./SearchBar";

const App = () => {
  // State variable to store the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle the search action
  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="app">
      <h1>YouTube Video Search</h1>

      {/* Pass state and functions to the SearchBar component */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export default HandleSearch;
