import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchModal from "./SearchModal";
import MenuModal from "./MenuModal";
import "../../assets/css/home/responsive.css";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  const [showSearchModal, setSearchModal] = useState<boolean>(false);
  const [showMenuModal, setMenuModal] = useState<boolean>(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth < 1200
  );

  const openSearchModal = () => setSearchModal(true);
  const closeSearchModal = () => setSearchModal(false);

  const openMenuModal = () => setMenuModal(true);
  const closeMenuModal = () => setMenuModal(false);

  const headerItems = [
    t("header.web"),
    t("header.clothes"),
    t("header.inspiration"),
    t("header.subscribe"),
    t("header.primania"),
    t("header.gift-card"),
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      let lastScrollTop = 0;

      const handleScroll = () => {
        const currentScroll = document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para móviles o Firefox
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isSmallScreen]);

  return (
    <header className="w-screen flex flex-col py-5 px-5">
      <div className="hidden mb-5 lg:flex slide-up lg:flex-row justify-between">
        <div className="a-animation hidden flex-row gap-1 cursor-pointer lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <Link to="/location">{t("header.locator")}</Link>
        </div>
        <div className="hidden flex-row gap-5 lg:flex">
          {headerItems.slice(0).map((nav, index) => (
            <a href="#" key={index} className="a-animation cursor-pointer">
              {nav}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`global-animation main-header lg:transition-transform transition-transform duration-300 ${
          isSmallScreen
            ? isHeaderVisible
              ? "translate-y-0"
              : "-translate-y-full"
            : ""
        } fixed z-40 lg:relative top-0 left-0 right-0 px-5 py-2 shadow-md lg:shadow-none bg-white bg-opacity-70 lg:bg-transparent w-full flex flex-row items-center lg:justify-center justify-between mb-5`}
      >
        <div className="flex flex-row items-center">
          <div
            onClick={openMenuModal}
            className="lg:hidden mr-1 hover:bg-gray-100 hover:shadow p-1 rounded cursor-pointer transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-8 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <Link
            to="/"
            className="logo text-4xl lg:text-5xl tracking-wider text-[#03a4d8] drop-shadow-md text-center uppercase"
          >
            Primark
          </Link>
        </div>
        <div className="flex flex-row justify-end items-center lg:gap-3 gap-1 ml-3 lg:absolute right-0">
          <div
            onClick={openSearchModal}
            className="hover:bg-gray-100 hover:shadow block lg:hidden p-2 rounded cursor-pointer transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21L15.803 15.803M15.803 15.803A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <nav
            onClick={openSearchModal}
            className="hidden p-1 lg:flex flex-row gap-2 items-center w-28 justify-center cursor-pointer hover:bg-gray-100 hover:shadow rounded transition-all relative border-b-2 border-black rounded-b-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <h2 className="text-gray-400 text-lg">{t("header.search")}</h2>
          </nav>
          <div className="flex flex-row gap-1">
            <div className="hover:bg-gray-100 hover:shadow p-2 rounded cursor-pointer transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <Link
              to="/login"
              className="hidden lg:block hover:bg-gray-100 hover:shadow p-2 rounded cursor-pointer transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <MenuModal isOpen={showMenuModal} onClose={closeMenuModal} />
      <SearchModal showModal={showSearchModal} closeModal={closeSearchModal} />
    </header>
  );
};

export default Header;
