import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation} from "react-router";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const MainLayout = () => {
  const {state}  = useNavigation()
  return (
    <div className="bg-gray-100 ">
      {import.meta.env.VITE_name}
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="px-2 lg:px-0">
        {state == "loading" ? <Loading/> : <Outlet/> }
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
