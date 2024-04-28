import {
  About,
  FAQs,
  Features,
  Hero,
  HowItWorks,
  Metrics,
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
      <Metrics />
      <Stats />
      <About />
      <FAQs />
      <Subscribe />
    </section>
  );
};

export default Home;
