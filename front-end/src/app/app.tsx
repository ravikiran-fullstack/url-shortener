// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React, { useState } from 'react';
import axios from 'axios';

import { PostData, ResponseData } from '../models/data';

import styles from './app.module.css';

export function App() {
  const [url, setUrl] = useState('');
  const serverUrl = 'http://localhost:4500';

  const postData: PostData = {
    fullUrl: 'https://www.google.com',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<ResponseData>(serverUrl + '/shorten', postData);
      console.log(response.data);
    } catch(error){console.log('Error',error)}
  };
  return <div></div>;
}

export default App;
