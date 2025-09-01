import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const handleVideoSelect = (video) => {
    setSelectedVideoId(video.id.videoId);
  };

  return (
    <div className="app">
      <h1>わかめtube</h1>
      <SearchBar setVideos={setVideos} />
      {selectedVideoId ? (
        <VideoPlayer videoId={selectedVideoId} />
      ) : (
        <p>Select a video to play</p>
      )}
      <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
    </div>
  );
};

export default App;
