// components/VideoItem.js
import React from "react";

// VideoItem Component to render a single video
const VideoItem = ({ video, onSelect }) => {
  return (
    <div className="video-item" onClick={() => onSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="video-thumbnail"
      />
      <h3 className="video-title">{video.snippet.title}</h3>
    </div>
  );
};

export default VideoItem;
