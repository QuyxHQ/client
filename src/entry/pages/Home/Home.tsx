import {
  About,
  FAQs,
  Features,
  Hero,
  HowItWorks,
  Sponsors,
  Stats,
  Subscribe,
  WhatWeOffer,
} from "./components";

const Home = () => {
  return (
    <section>
      <Hero />
      <Sponsors />
      <HowItWorks />
      <WhatWeOffer />
      <Features />
      <Stats />
      <About />
      <FAQs />
      <Subscribe />
    </section>
  );
};

export default Home;
