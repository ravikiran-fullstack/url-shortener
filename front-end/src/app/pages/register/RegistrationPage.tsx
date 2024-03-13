import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledForm,
  StyledFormGroup,
  StyledLabel,
  StyledInput,
  StyledButton,
} from '../../global/CommonStyles';

const RegistrationPage = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate username for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      setError('Invalid email format');
      return;
    }

    // Validate password length and match with confirm password
    if (password.length < 5) {
      setError('Password must be at least 5 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Registration logic here
    // ...

    // Clear form fields and error message
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div>
      <h2>Create Your Profile</h2>
      {error && <p>{error}</p>}
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormGroup>
          <StyledLabel>Email:</StyledLabel>
          <StyledInput
            type="email"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel>Password:</StyledLabel>
          <StyledInput
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel>Confirm Password:</StyledLabel>
          <StyledInput
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </StyledFormGroup>
        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
      <div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
