import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Bookmarks,
  CardDetails,
  Dashboard,
  EditCard,
  Home,
  Marketplace,
  Middleware,
  NotFound,
  Pricing,
  Team,
} from "./entry";
import { Toaster } from "react-hot-toast";

import "./main.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Middleware children={<Home />} />,
      errorElement: <NotFound />,
    },
    {
      path: "/dashboard",
      element: <Middleware children={<Dashboard />} />,
    },
    {
      path: "/about",
      element: <Middleware children={<About />} />,
    },
    {
      path: "/marketplace",
      element: <Middleware children={<Marketplace />} />,
    },
    {
      path: "/edit-card/:card",
      element: <Middleware children={<EditCard />} />,
    },
    {
      path: "/card/:card",
      element: <Middleware children={<CardDetails />} />,
    },
    {
      path: "/pricing",
      element: <Middleware children={<Pricing />} />,
    },
    {
      path: "/team",
      element: <Middleware children={<Team />} />,
    },
    {
      path: "/bookmarks",
      element: <Middleware children={<Bookmarks />} />,
    },
  ]);

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
