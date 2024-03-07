import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Bookmarks,
  CardDetails,
  CardsUnderTag,
  Dashboard,
  EditCard,
  Home,
  Marketplace,
  Middleware,
  Modal,
  NewCard,
  NotFound,
  Pricing,
  Report,
  Settings,
  Tags,
  Team,
  User,
  Cards,
} from "./entry";
import { Toaster } from "react-hot-toast";
import { Bought, Created, ForSale, OwnerOf, Sold } from "./entry/pages/Dashboard/views";
import {
  Bought as UBought,
  Created as UCreated,
  ForSale as UForSale,
  OwnerOf as UOwnerOf,
  Sold as USold,
} from "./entry/pages/User/views";

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
    {
      path: "/tags",
      element: <Middleware children={<Tags />} />,
    },
    {
      path: "/tag/:tag",
      element: <Middleware children={<CardsUnderTag />} />,
    },
    {
      path: "/user/:username",
      element: <Middleware children={<User />} />,
    },
    {
      path: "/user/owner/:username",
      element: <Middleware children={<UOwnerOf />} />,
    },
    {
      path: "/user/created/:username",
      element: <Middleware children={<UCreated />} />,
    },
    {
      path: "/user/bought/:username",
      element: <Middleware children={<UBought />} />,
    },
    {
      path: "/user/sold/:username",
      element: <Middleware children={<USold />} />,
    },
    {
      path: "/user/sale/:username",
      element: <Middleware children={<UForSale />} />,
    },
    {
      path: "/report",
      element: <Middleware children={<Report />} />,
    },
    {
      path: "/cards",
      element: <Middleware children={<Cards />} />,
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
