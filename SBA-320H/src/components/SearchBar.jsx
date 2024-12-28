// Import React library
import React from "react";

// SearchBar component receives 'searchTerm', 'setSearchTerm', and 'handleSearch' as props
// 'searchTerm': Current value of the input field
// 'setSearchTerm': Function to update the input field value
// 'handleSearch': Function to execute when the search button is clicked
const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div>
      {/* Input field for entering the search term */}
      <input
        type="text"
        placeholder="Search YouTube" // Placeholder text
        value={searchTerm} // Controlled input value
        onChange={(e) => setSearchTerm(e.target.value)} // Update state on typing
      />

      {/* Button to trigger the search */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

// Export the SearchBar component to be used in App.js
export default SearchBar;
