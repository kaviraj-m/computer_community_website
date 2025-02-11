import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import WhyChoose from "../components/WhyChoose";
import SensibleBuilds from "../components/SensibleBuilds";
import SupportCause from "../components/SupportCause";
import MarqueeSlider from "../components/MarqueeSlider";

import InstagramFeed from "../components/InstagramFeed";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyChoose />
      <SensibleBuilds />
      <MarqueeSlider />
      <InstagramFeed/>
      <SupportCause />
      <Footer />
    </>
  );
};

export default Home;