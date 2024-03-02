import React from "react";
import Tophero from "../../../components/UI/Marketplace/Tophero";
import Topseller from "../../../components/UI/Marketplace/Topsellers";
import FeaturedPro from "../../../components/UI/Marketplace/FeaturedPro";
import Collection from "../../../components/UI/Marketplace/Collection";
import AllCards from "../../../components/UI/Marketplace/AllCards";





const Page = () => {
  return (
    <>
      <main>
        <Tophero />
        <Topseller />
        <FeaturedPro />
        <Collection />
        <AllCards/>
      </main>
    </>
  );
};

export default Page;
