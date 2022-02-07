import React, { ReactElement } from "react";
import "./Layout.css";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = (): ReactElement => {
  return (
    <div className="App">
      <nav>
        <NavLink
          to="/test"
          className={({ isActive }): string => (isActive ? "red" : "blue")}
          aria-label="Link To Arbitrary Page"
        >
          Arbitrary Page
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }): string => (isActive ? "red" : "blue")}
          aria-label="Link To Home Page"
        >
          Home
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
