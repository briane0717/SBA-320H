// Import React library and hooks
import React, { useState } from "react";
// Import the SearchBar component
import SearchBar from "./components/SearchBar";

// Main App component
const App = () => {
  // State variable to store the search term
  const [searchTerm, setSearchTerm] = useState("");
  // State variable to store the fetched video data
  const [videos, setVideos] = useState([]);

  const API_KEY = "AIzaSyDDJytrNbjgFb5nkKKYBCCQSh4CcZtAlU4";

  // Function to handle the search action
  const handleSearch = async () => {
    // If searchTerm is empty, do nothing
    if (!searchTerm) return;

    try {
      // Fetch data from YouTube API
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&key=${API_KEY}`
      );

      // Convert the response to JSON
      const data = await response.json();

      // Update the 'videos' state with the fetched data
      setVideos(data.items);

      console.log(data.items); // Log the fetched data to the console
    } catch (error) {
      console.error("Error fetching data from YouTube API:", error);
    }
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

      {/* Display video data */}
      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
