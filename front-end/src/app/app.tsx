// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Routes, Route, Outlet, Link } from "react-router-dom";
import styled from "styled-components";

import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import DesignDocument from "./pages/design-document/DesignDocument";
import Profile from "./pages/profile/Profile";

import bgHome from "../assets/bg-home.png";

const StyledMainContainer = styled.div`
  background: url(${bgHome}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export function App() {
  return (
    <StyledMainContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="design-document" element={<DesignDocument />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </StyledMainContainer>
  );
}

export default App;
