import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  CardDetails,
  User,
  Home,
  Market,
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
      path: "/user/:address",
      element: <Middleware children={<User />} />,
    },
    {
      path: "/market",
      element: <Middleware children={<Market />} />,
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
