import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { PostData, ResponseData } from '../../../types/data';

import './home.module.css';
import { set } from 'mongoose';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  h1 {
    margin-bottom: 20px;
  }
`;

const StyledForm = styled.form`
  display: grid;
  grid-gap: 10px;
  grid-template-columns:  3fr 1fr;
  margin-top: 20px;
  width: 50vw;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  width:87%;
  transition: border 0.3s ease;
  &:focus {
    border: 2px solid #333;
  }
`;

const StyledButton = styled.button`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c4c486;
    color: #333;
  }
`;

const StyledLink = styled.a`
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  &:hover {
    color: #c4c486;
  }
`;



const Home = () => {
  const [url, setUrl] = useState('');
  const [shortedUrl, setShortedUrl] = useState('');
  const [showShortUrl, setShowShortUrl] = useState(false);
  const [loading, setLoading] = useState(false);
  const serverUrl = 'http://localhost:4500';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const postData: PostData = {
      fullUrl: url,
    };
    try {
      const response = await axios.post<ResponseData>(
        serverUrl + '/shorten',
        postData
      );
      console.log(response.data);
      setLoading(false);
      setShowShortUrl(true);
      setShortedUrl(response.data.short);
    } catch (error) {
      setShowShortUrl(false);
      setLoading(false);
      console.log('Error', error);
    }
  };
  return (
    <StyledHome>
      <h1>URL Shortener</h1>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          URL:
          <StyledInput
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            autoComplete="on"
          />
        </label>
        <StyledButton type="submit">
          Shorten
        </StyledButton>
      </StyledForm>
      {
        loading && <div>Loading...</div>
      }
      {showShortUrl && (
        <div>
          Shortened URL:{' '}
          <StyledLink href={`${serverUrl}/${shortedUrl}`}>
            {serverUrl}/{shortedUrl}
          </StyledLink>
        </div>
      )}
    </StyledHome>
  );
};

export default Home;
