import React, { useEffect, useState } from "react";
import Header from "../components/home/Header";
import Nav from "../components/home/Nav";
import Social from "../components/home/Social";
import Footer from "../components/home/Footer";
import Map from "../components/location/Map";
import SearchBox from "../components/location/SearchBox";
import { Place } from "../components/location/types";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const LocationPage = () => {
  const [selectPosition, setSelectPosition] = useState<Place | null>(null);

  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.title = t("location.title");
  }, [location, t]);

  return (
    <>
      <Header />
      <Nav />
      <section className="mt-10 mx-5 sm:mx-10 flex lg:flex-row flex-col justify-center gap-5">
        <SearchBox
          selectPosition={selectPosition}
          setSelectPosition={setSelectPosition}
        />
        <Map selectPosition={selectPosition} />
      </section>
      <Social />
      <Footer />
    </>
  );
};

export default LocationPage;
