import React from 'react';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <div key={video.id.videoId} className="video-item" onClick={() => onVideoSelect(video)}>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          <p>{video.snippet.title}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
