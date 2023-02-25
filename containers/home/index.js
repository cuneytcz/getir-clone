import React from "react";
import Campaigns from "./components/campaigns";
import Categories from "./components/categories";
import HeroSection from "./components/heroSection";

export default function HomeContainer() {
     return (
          <>
               <HeroSection />
               <Categories />
               <Campaigns />
          </>
     );
}
