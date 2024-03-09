import { Outlet } from 'react-router-dom';
import './Layout.module.css';
import Navbar from '../global/navbar/Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Layout;
