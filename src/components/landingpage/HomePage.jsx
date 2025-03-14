import React from "react";
import HomeHeroSection from "./homehero/HomeHeroSection";
import HomeAbout from "./homeabout/HomeAbout";
import HomeCategory from "./homecategory/HomeCategory";
import SpecialDishes from "./specialdishes/SpecialDishes";
import HomeBook from "./homebooking/HomeBook";
import Testimonial from "./testimonial/Testimonial";
import ContactInfo from "./contact/ContactInfo";

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeHeroSection />
      <HomeAbout />
      <HomeCategory />
      <SpecialDishes />
      <HomeBook />
      <Testimonial />
      <ContactInfo />
    </React.Fragment>
  );
};

export default HomePage;
