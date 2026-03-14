import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Home from "../pages/Home";
import AllToys from "../components/AllToys";
import Reviews from "../components/Reviews";
import ToyDetails from "../components/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile";
import Loading from "../components/Loading";

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
        hydrateFallbackElement: <Loading />,
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
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "reviews",
        element: <Reviews />,
        loader: () => fetch("/reviews.json").then((res) => res.json()),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/toys.json").then((res) => res.json()),
        hydrateFallbackElement: <Loading />,
      },

      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>,
          </PrivateRoute>
        ),
      },
    ],
  },
]);
