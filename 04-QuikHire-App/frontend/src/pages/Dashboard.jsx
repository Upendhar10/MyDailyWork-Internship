import React from "react";
import SideBar from "../components/Sidebar";

function Dashboard({ children }) {
  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      {children}
      <div className="col-span-4">
        <h1 className="text-2xl font-bold text-center">Dashboard</h1>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
}

export default Dashboard;
