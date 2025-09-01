import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ setVideos }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search?q=${query}`);
      setVideos(response.data);
    } catch (error) {
      console.error('Error searching for videos:', error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search YouTube"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
