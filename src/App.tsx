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
  Modal,
  NewCard,
  NotFound,
  Pricing,
  Settings,
  Team,
} from "./entry";
import { Toaster } from "react-hot-toast";
import { Bought, Created, ForSale, OwnerOf, Sold } from "./entry/pages/Dashboard/views";

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
      path: "/dashboard/owner",
      element: <Middleware children={<OwnerOf />} />,
    },
    {
      path: "/dashboard/created",
      element: <Middleware children={<Created />} />,
    },
    {
      path: "/dashboard/bought",
      element: <Middleware children={<Bought />} />,
    },
    {
      path: "/dashboard/sold",
      element: <Middleware children={<Sold />} />,
    },
    {
      path: "/dashboard/sale",
      element: <Middleware children={<ForSale />} />,
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
    {
      path: "/settings",
      element: <Middleware children={<Settings />} />,
    },
    {
      path: "/new-card",
      element: <Middleware children={<NewCard />} />,
    },
  ]);

  return (
    <>
      <Modal />
      <Toaster position="bottom-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
