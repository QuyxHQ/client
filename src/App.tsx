import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  CardDetails,
  Dashboard,
  EditCard,
  Home,
  Marketplace,
  Middleware,
  Modal,
  NewCard,
  NotFound,
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
      path: "/team",
      element: <Middleware children={<Team />} />,
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
