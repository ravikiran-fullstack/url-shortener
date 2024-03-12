import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: #000;
`;

const StyledH4 = styled.h4`
  color: #ff3ebf;
`;

const StyledP = styled.p`
  color: #000;
`;

const StyledAbout = styled.div`
  ${StyledH1},
  ${StyledH4},
  ${StyledP} {
    margin-top: 10px;
    font-family: 'Madimi One', sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <StyledH1>About URL Shortener</StyledH1>
      <StyledH4>WELCOME TO OUR URL SHORTENER WEBSITE!</StyledH4>
      <StyledP>
        A URL shortener is a web-based service that takes a long URL (Uniform
        Resource Locator) and converts it into a shorter, more manageable
        version. The primary purpose of a URL shortener is to make links easier
        to share, especially on platforms with character limits like Twitter, or
        in situations where space is limited, such as QR codes or printed
        materials.
      </StyledP>
      <StyledP>
        We offer a fast, reliable, and user-friendly service to shorten long
        URLs. Customize your short links, track their performance with
        analytics, and rest assured that our platform is safe and secure. No
        registration is required, and developers can use our API for easy
        integration. Thank you for choosing us for all your link shortening
        needs!
      </StyledP>
    </StyledAbout>
  );
};

export default About;
