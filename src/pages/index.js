import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import GovApproval from "../components/GovApproval";
import Impact from "../components/Impact";
import Gallery from "../components/Gallery";
import Team from "../components/Team";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import DonateModal from "../components/DonateModal";

export default function Home() {
  const [donateOpen, setDonateOpen] = useState(false);
  const [activePage, setActivePageState] = useState("home");
  const setActivePage = (page) => {
    setActivePageState(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar
        onDonateClick={() => setDonateOpen(true)}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {activePage === "home" && (
        <>
          <Hero onDonateClick={() => setDonateOpen(true)} />
          <Impact />
        </>
      )}

      {activePage === "about" && (
        <>
          <Team />
          <GovApproval />
        </>
      )}

      {activePage === "mission" && (
        <Features />
      )}

      {activePage === "programs" && (
        <>
          <Gallery />
          <News />
        </>
      )}

      {activePage === "contact" && (
        <Contact />
      )}

      <Footer />
      <DonateModal isOpen={donateOpen} onClose={() => setDonateOpen(false)} />
    </>
  );
}
