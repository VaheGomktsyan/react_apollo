import React from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "../../component/Menu";
export const LayoutComponent: React.FC = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};
