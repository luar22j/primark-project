import React from "react";

import { useTranslation } from "react-i18next";
import "../../assets/css/home/nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  const { t } = useTranslation();
  const navData = t("nav", { returnObjects: true });

  return (
    <nav className="nav global-animation hidden lg:block px-10">
      <ul className="z-0 flex flex-row gap-7 justify-center text-xl uppercase">
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

export default Nav;
