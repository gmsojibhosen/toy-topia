import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-gray-100 ">
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="px-2 lg:px-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
