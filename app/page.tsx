import React from "react";
import TopHero from "../components/UI/Home/TopHero";
import CardHero from "../components/UI/Home/CardHero";
import How from "../components/UI/Home/Howitworks"
import What from "../components/UI/Home/Whatweoffer";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Page = () => {
  return (
    <main>
      <TopHero />
      <CardHero />
      <How />
      <What />
    </main>
  );
};

export default Page;
