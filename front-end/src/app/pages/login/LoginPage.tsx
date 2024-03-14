import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  StyledForm,
  StyledFormGroup,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledErrorDiv,
} from '../../global/CommonStyles';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitFormToggle, setSubmitFormToggle] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const submitForm = async () => {
      setLoginError(false);
      try {
        const response = await axios.post('http://localhost:4500/login', {
          username,
          password,
        });
        console.log('response', response);
        setLoginError(false);
        setSubmitFormToggle(false);
        setUsername('');
        setPassword('');
        navigate('/');
      } catch (error) {
        console.log('Error', error);
        setLoginError(true);
        setSubmitFormToggle(false);
      }
    };

    if (submitFormToggle) {
      console.log('submitForm', submitForm);
      submitForm();
    }
  }, [submitFormToggle, username, password]);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailError('');
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordError('');
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      setEmailError('Invalid email format');
      return;
    }

    // Validate password length
    if (password.length < 5) {
      setPasswordError('Password must be at least 5 characters long');
      return;
    }

    setSubmitFormToggle(true);
    // Submit the form
    // TODO: Add your form submission logic here
  };

  return (
    <div>
      <h2>Login for customized experience</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormGroup>
          <StyledLabel>Email:</StyledLabel>
          <StyledInput
            type="email"
            value={username}
            onChange={handleUsernameChange}
          />
        </StyledFormGroup>
        {emailError && <StyledErrorDiv>{emailError}</StyledErrorDiv>}
        <StyledFormGroup>
          <StyledLabel>Password:</StyledLabel>
          <StyledInput
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </StyledFormGroup>
        {passwordError && <StyledErrorDiv>{passwordError}</StyledErrorDiv>}
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      {loginError && <p>Invalid email or password</p>}
      <div>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
