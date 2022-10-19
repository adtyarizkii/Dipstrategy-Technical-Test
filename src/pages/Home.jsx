import React from "react";
import { NavbarHome } from "../components/NavbarHome";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NavbarHome />
      <Jumbotron />
      <Footer />
    </div>
  );
}
