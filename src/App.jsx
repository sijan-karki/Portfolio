import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DrawerAppBar from "../Components/Navbar";
import BasicCard from "../Components/About";
import ExperienceCard from "../Components/Experience";
import ContactSection from "../Components/ContacPage";
import Footer from "../Components/Footer";
import FeaturedProject from "../Components/Project";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DrawerAppBar />
      <BasicCard />
      <ExperienceCard />
      <FeaturedProject />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
