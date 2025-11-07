import Hero from "../components/Hero";
import SubHero from "../components/SubHero";
import ProductSection from "../components/ProductSection";
import DailyBestSells from "../components/DailyBestSells";
import FeaturePanel from "../components/FeaturePanel";
import DealsOftheDay from "../components/DealsOftheDay";
import SubscribePanel from "../components/SubscribePanel";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center">
      <Hero />
     <div className="container flex flex-col gap-5 justify-center items-center">
       <SubHero />
      <ProductSection />
      <DailyBestSells />
      <DealsOftheDay/>
      <SubscribePanel/>
      <FeaturePanel />
     </div>
    </div>
  );
};

export default HomePage;
