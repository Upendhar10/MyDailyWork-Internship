import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { sidebarMenu } from "../constants";
import { Logo } from "./Header";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    toast.success("Logged out successfully!");
  };

  const { user } = useSelector((state) => state.auth);

  return (
    <div className="h-screen py-5 border-r-2">
      <Logo />
      <hr className="mt-5" />
      <p className="p-4 text-2xl font-semibold">Welcome : {user?.fullname}</p>
      <hr className="mt-3" />
      <div className="flex text-2xl font-bold flex-col items-center justify-center gap-4 my-5">
        {sidebarMenu.map((menu) => {
          const isActive = location.pathname === menu.path;
          return (
            <div
              key={menu.path}
              className={`menu-item ${isActive ? "active" : ""}`}
            >
              <i className={menu.icon}></i>
              <Link to={menu.path}>{menu.name}</Link>
            </div>
          );
        })}
        <div className="menu-item" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>
          <Link to="/login">Logout</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
