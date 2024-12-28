// Import React library and hooks
import React, { useState } from "react";
// Import the SearchBar component
import SearchBar from "./components/SearchBar";

// Main App component
const App = () => {
  // State variable to store the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle the search action
  const handleSearch = () => {
    // Log the search term to the console for now
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

export default App;
