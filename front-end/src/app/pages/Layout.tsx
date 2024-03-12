import { Outlet } from 'react-router-dom';
import './Layout.module.css';
import Navbar from '../global/navbar/Navbar';
import styled from 'styled-components';

const StyledOutlet = styled.div`
  height: 100vh;
  width: 100%;
  border: 1px solid #c6c7d2;
  text-align: center;
  padding: 50px 100px 0 100px;
`;

const Layout = () => {
  return (
    <div>
      <Navbar />
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </div>
  );
};

export default Layout;
