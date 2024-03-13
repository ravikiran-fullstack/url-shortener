import styled from "styled-components";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Madimi One', sans-serif;
  font-weight: 400;
  font-style: normal;
  * {
    margin-bottom: 20px;
  }
`;

const Profile = () => {
  return (
    <StyledProfile>
      <div>
        <h2>User Profile Info</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        <p>Location: New York</p>
      </div>
    </StyledProfile>
  );
}

export default Profile