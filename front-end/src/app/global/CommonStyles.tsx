import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

 
  padding-top: 20px;

  & > * {
    margin: 10px;
  }
`;

export const StyledFormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 23vw;
  text-align: right;
`;

export const StyledLabel = styled.label``;

export const StyledInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

export const StyledButton = styled.button`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #868cc4;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    opacity: ${(props) => (props.disabled ? '0.5' : '0.8')};
    background-color: ${(props) => (props.disabled ? '#333' : '#868cc4')};
    color: #fff;
  }

  &:focus-visible {
    outline: none;
  }
`;

export const StyledErrorDiv = styled.div`
    color: red;
    `;