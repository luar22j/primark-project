import React from "react";
import "../../assets/css/style.css";
import "../../assets/css/home/responsive.css";
import { useTranslation } from "react-i18next";

export const Section = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="global-animation main-text drop-shadow flex flex-col lg:hidden gap-5 my-10 mx-10">
        <span className="text-5xl font-bold drop-shadow-2xl main-tile">
          {t("section.title")}
        </span>
        {t("section.text")}
      </div>
      <div className="global-animation banner text-lg border-y-2 text-white border-black hidden lg:block">
        <div className="global-animation drop-shadow-md flex flex-col gap-5 ml-20">
          <span className="text-6xl drop-shadow-2xl font-bold mt-40">
            {t("section.title")}
          </span>
          {t("section.text")}
        </div>
      </div>
    </>
  );
};

export default Section;
