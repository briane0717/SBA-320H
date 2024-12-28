// components/VideoList.js
import React from "react";
import VideoItem from "./VideoItem";

// VideoList Component to display the list of videos
const VideoList = ({ videos, onSelect }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoItem key={video.id.videoId} video={video} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default VideoList;
