import React from "react";
import { useTranslation } from "react-i18next";
import "../../assets/css/home/nav.css";
import { Link } from "react-router-dom";

export const WomenNav = () => {
  const { t } = useTranslation();
  const navData = t("women-nav", { returnObjects: true });

  return (
    <nav className="nav global-animation hidden lg:block px-10 py-3 mt-3 border-y-2 border-black w-screen bg-gray-200">
      <ul className="z-0 flex flex-row gap-7 justify-center text-lg">
        {Object.entries(navData).map(([key, { name, url }]) => (
          <li key={key}>
            <Link className="link" to={`/section/${url}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default WomenNav;
