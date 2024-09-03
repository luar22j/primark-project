import React from "react";
import { Header } from "../components/home/Header";
import { Nav } from "../components/home/Nav";
import { Section } from "../components/home/Section";
import { Img } from "../components/home/Img";
import { Social } from "../components/home/Social";
import { Footer } from "../components/home/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.title = t("home.title");
  }, [location, t]);

  return (
    <>
      <Header />
      <Nav />
      <main>
        <Section />
        <Img />
        <Social />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
