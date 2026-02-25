import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TelegramBanner from "@/components/TelegramBanner";
import HowItWorks from "@/components/HowItWorks";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TelegramBanner />
        <HowItWorks />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
