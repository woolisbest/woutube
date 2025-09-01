import React from 'react';

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="video-player">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
