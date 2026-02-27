import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AllToys from "../components/AllToys";
import Reviews from "../components/Reviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/toys.json").then((res) => res.json()),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "toys",
        element: <AllToys />,
        loader: () => fetch("/toys.json").then((res) => res.json()),
      },
      {
        path: "reviews",
        element: <Reviews />,
        loader: () => fetch("/reviews.json").then((res) => res.json()),
      },
    ],
  },
]);
