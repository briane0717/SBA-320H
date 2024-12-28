// App.js
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const API_KEY = "AIzaSyDDJytrNbjgFb5nkKKYBCCQSh4CcZtAlU4";

  const handleSearch = async () => {
    if (!searchTerm) return;

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&key=${API_KEY}`
      );
      const data = await response.json();
      setVideos(data.items);
      console.log(data.items);
    } catch (error) {
      console.error("Error fetching data from YouTube API:", error);
    }
  };

  return (
    <div className="app">
      <h1>YouTube Video Search</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <VideoList videos={videos} onSelect={setSelectedVideo} />
      {selectedVideo && <VideoPlayer video={selectedVideo} />}
    </div>
  );
};

export default App;
