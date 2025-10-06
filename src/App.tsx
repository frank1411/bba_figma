import { Header } from "./components/Header";
import { HeroCarousel } from "./components/HeroCarousel";
import { PlayersSection } from "./components/PlayersSection";
import { ServicesSection } from "./components/ServicesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCarousel />
        <PlayersSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}