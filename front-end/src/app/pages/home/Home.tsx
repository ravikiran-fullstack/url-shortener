import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { PostData, ResponseData } from '../../../types/data';

import './home.module.css';
import Loading from '../../components/Loading';

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
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  margin-top: 20px;
  width: 50vw;
  border: none;
  border-radius: 5px;
  padding: 20px 15px 11px 15px;
  background-color: #6d6d6d;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  width: 87%;
  transition: border 0.3s ease;
  &:focus {
    border: none;
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
    opacity: ${(props) => (props.disabled ? '0.5' : '0.8')};
    background-color: ${(props) => (props.disabled ? '#333' : '#e1f8a3')};
    color: #333;
  }
`;

const StyledQrCodeBlock = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const StyledShortedUrl = styled.div`
  margin-top: 10px;
  font-size: 1.5rem;
  & a {
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: #698ebd;
    }
  }
`;

const Home = () => {
  const [url, setUrl] = useState('');
  const [shortedUrl, setShortedUrl] = useState('');
  const [showShortUrl, setShowShortUrl] = useState(false);
  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState('' as string | ArrayBuffer | null);
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
      setQrCode(response.data.qrImageUrl);
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
        <StyledInput
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          autoComplete="on"
          placeholder="Enter the Link here..."
        />

        <StyledButton type="submit" disabled={loading}>
          Shorten URL
        </StyledButton>
      </StyledForm>
      {loading && <Loading />}
      {showShortUrl && (
        <div>
          <StyledShortedUrl>
            Shortened URL:{' '}
            <StyledLink href={`${serverUrl}/${shortedUrl}`}>
              {serverUrl}/{shortedUrl}
            </StyledLink>
          </StyledShortedUrl>
          <div>
            <StyledLink href={`${serverUrl}/${shortedUrl}`}></StyledLink>
            <StyledQrCodeBlock>
              <img
                src={qrCode as string}
                alt="QR Code"
                width="100"
                height="100"
              />
            </StyledQrCodeBlock>
          </div>
        </div>
      )}
    </StyledHome>
  );
};

export default Home;
