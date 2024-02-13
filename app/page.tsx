import TopHero from "../components/UI/Home/TopHero";
import CardHero from "../components/UI/Home/CardHero";
import How from "../components/UI/Home/Howitworks"
import What from "../components/UI/Home/Whatweoffer";
import Feature from "../components/UI/Home/Feature"
import FAQ from "../components/UI/Home/FAQ";
import About from "../components/UI/Home/About";
import Unlock from "../components/UI/Home/Unlock"


const Page = () => {
  return (
    <main>
      <TopHero />
      <CardHero />
      <How />
      <What />
      <Feature />
      <About />
      <FAQ />
      <Unlock />
    </main>
  );
};

export default Page;
