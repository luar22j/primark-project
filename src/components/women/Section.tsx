import React from "react";
import "../../assets/css/style.css";
import "../../assets/css/home/responsive.css";
import "../../assets/css/women/style.css";
import { useTranslation } from "react-i18next";

export const Section = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="global-animation hidden lg:block women-background text-lg border-b-2 border-black">
        <div className="drop-shadow global-animation flex flex-col gap-1 ml-[15%] text-white">
          <span className="uppercase mt-40 text-xl">
            {t("women-section.title")}
          </span>
          <span className="text-6xl font-bold">The Edit</span>
          {t("women-section.text")}
          <a className="drop-shadow-none uppercase mt-8 blue-link cursor-pointer w-[180px] font-bold">
            <span className="drop-shadow">
              {t("women-section.discover")} The Edit
            </span>
          </a>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="drop-shadow global-animation flex flex-col gap-1 ml-10">
          <span className="uppercase mt-10 text-xl">
            {t("women-section.title")}
          </span>
          <span className="text-5xl font-bold">The Edit</span>
          {t("women-section.text")}
          <p>
            <a className="drop-shadow-none uppercase mt-8 blue-link cursor-pointer pr-1 font-bold">
              <span className="drop-shadow">
                {t("women-section.discover")} The Edit
              </span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Section;
