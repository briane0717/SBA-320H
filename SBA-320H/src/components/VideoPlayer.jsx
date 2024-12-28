// components/VideoPlayer.js
import React from "react";

// VideoPlayer Component to display the selected video
const VideoPlayer = ({ video }) => {
  return (
    <div className="video-player">
      <iframe
        width="100%"
        height="400px"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        allowFullScreen
        title={video.snippet.title}
      ></iframe>
      <h3>{video.snippet.title}</h3>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoPlayer;
