import React from "react";

import HomeBanner from "../components/blocks/home/HomeBanner";
import HomeAbout from "../components/blocks/home/HomeAbout";
import HomeServices from "../components/blocks/home/HomeServices";
import DoForYou from "../components/general/DoForYou";
import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <HomeBanner />
      <HomeAbout />
      <HomeServices />
      <DoForYou />
    </MainLayout>
  );
};

export default HomePage;
