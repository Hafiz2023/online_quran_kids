"use client";
import Hader from "./components/header";
import HeroPage from "./components/heroPage";
import SimpleNumber from "./components/simpleNumber";
import FivePillars from "./components/fivePillar";
import MasterCleanse from "./components/masterCleanse";
import ServiceList from "./components/serviceList";
import Course from "./components/course";

import NavBar from "./navbar/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div>
      <Hader />
      <NavBar />
      <HeroPage />
      <SimpleNumber />
      <FivePillars />
      <MasterCleanse />
      <ServiceList />
      <Course />
      <Footer />
    </div>
  );
}
