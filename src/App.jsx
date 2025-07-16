import React from "react";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import About from "./Component/About";
import RoomCards from "./Component/RoomCards";
import Testimonials from "./Component/Testimonials";
import Process from "./Component/Process";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <RoomCards />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
