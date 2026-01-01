import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { TrustBar } from "../components/sections/TrustBar";
import { CourseGrid } from "../components/sections/CourseGrid";
import { Community } from "../components/sections/Community";
import { AboutJenn } from "../components/sections/AboutJenn";
import { Newsletter } from "../components/sections/Newsletter";

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <CourseGrid />
        <Community />
        <AboutJenn />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
