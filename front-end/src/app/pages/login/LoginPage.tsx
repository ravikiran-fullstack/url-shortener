import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledForm,
  StyledFormGroup,
  StyledLabel,
  StyledInput,
  StyledButton
} from '../../global/CommonStyles';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return;
    }

    // Validate password length
    if (password.length < 5) {
      setPasswordError('Password must be at least 5 characters long');
      return;
    }

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
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <span>{emailError}</span>}
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel>Password:</StyledLabel>
          <StyledInput
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <span>{passwordError}</span>}
        </StyledFormGroup>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      <div>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
