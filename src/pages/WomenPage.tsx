import React, { useEffect } from "react";
import Header from "../components/home/Header";
import Nav from "../components/home/Nav";
import Social from "../components/home/Social";
import Footer from "../components/home/Footer";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import WomenNav from "../components/women/Nav";
import WomenSection from "../components/women/Section";
import WomenImg from "../components/women/Img";
import WomenSportImg from "../components/women/SportImg";
import JeansCollection from "../components/women/JeansCollection";
import Arrow from "../components/women/Arrow";
import Miss from "../components/women/Miss";
import FashionChannel from "../components/women/FashionChannel";

export const WomenPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.title = t("women.title");
  }, [location, t]);

  return (
    <>
      <Header />
      <Nav />
      <WomenNav />
      <WomenSection />
      <WomenImg />
      <WomenSportImg />
      <JeansCollection />
      <Miss />
      <FashionChannel />
      <Social />
      <Arrow />
      <Footer />
    </>
  );
};

export default WomenPage;
