const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const YT_API_KEY = process.env.YT_API_KEY;
const YT_API_URL = 'https://www.googleapis.com/youtube/v3/search';

app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(YT_API_URL, {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: query,
        key: YT_API_KEY,
      },
    });
    res.json(response.data.items);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from YouTube API');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
