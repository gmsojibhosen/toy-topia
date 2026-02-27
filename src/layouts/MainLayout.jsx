import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-gray-100">
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
