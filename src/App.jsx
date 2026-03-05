import HeroSection from "./components/Herosection/HeroSection";
import FeaturesSection from "./components/Features/FeaturesSection";
import HowItWorksSection from "./components/HowItWork/HowItWorksSection";
import StrengthsSection from "./components/StrengthsSection/StrengthsSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <StrengthsSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
