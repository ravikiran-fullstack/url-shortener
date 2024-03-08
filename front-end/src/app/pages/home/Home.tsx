import React, { useState } from 'react';
import axios from 'axios';

import { PostData, ResponseData } from '../../../types/data';

const Home = () => {
  const [url, setUrl] = useState('');
  const [shortedUrl, setShortedUrl] = useState('');
  const [showShortUrl, setShowShortUrl] = useState(false);
  const serverUrl = 'http://localhost:4500';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const postData: PostData = {
      fullUrl: url,
    };
    try {
      const response = await axios.post<ResponseData>(
        serverUrl + '/shorten',
        postData
      );
      console.log(response.data);
      setShowShortUrl(true);
      setShortedUrl(response.data.short);
    } catch (error) {
      setShowShortUrl(false);
      console.log('Error', error);
    }
  };
  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <label>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button type="submit">Shorten</button>
      </form>

      {showShortUrl && (
        <div>
          Shortened URL:{' '}
          <a href={`${serverUrl}/${shortedUrl}`}>
            {serverUrl}/{shortedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
