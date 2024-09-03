import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SearchModal } from "./SearchModal";
import { Link } from "react-router-dom";

interface MenuModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const MenuModal = ({ isOpen, onClose }: MenuModalProps) => {
  const { t } = useTranslation();

  const menuData = [
    t("nav.women.name"),
    t("nav.kids.name"),
    t("nav.baby.name"),
    t("nav.school.name"),
    t("nav.men.name"),
    t("nav.collaborations.name"),
    t("nav.beauty.name"),
  ];
  const menuImg = [
    "women.jpg",
    "kids.jpg",
    "baby.jpg",
    "school.jpg",
    "men.jpg",
    "mobile.jpg",
    "beauty.jpg",
  ];

  const [showSearchModal, setSearchModal] = useState<boolean>(false);

  const openSearchModal = () => setSearchModal(true);
  const closeSearchModal = () => setSearchModal(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const MenuSection = (name: string, d: string) => (
    <div className="flex flex-row px-5 py-3 gap-5 hover:bg-gray-50 cursor-pointer">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={d} />
        </svg>
      </div>
      <div>{t("menu." + name)}</div>
    </div>
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="fixed z-50 inset-0 w-screen h-screen flex bg-black bg-opacity-20 transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white sm:border-r-2 sm:border-black lg:w-[40%] sm:w-[90%] w-full max-h-screen flex flex-col shadow-2xl overflow-y-auto ${
          isOpen ? "menu-animation translate-none" : ""
        }`}
      >
        <div className="w-full flex p-5 pb-0">
          <button
            onClick={onClose}
            className="hover:bg-gray-100 hover:shadow rounded p-1 mr-1 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="open-main-nav h-20 lg:w-full flex flex-row items-center lg:justify-left justify-between lg:relative">
          <a
            className="logo ml-5 text-4xl tracking-wider text-[#03a4d8] text-center uppercase"
            href="#"
          >
            Primark
          </a>
          <div className="flex flex-row justify-end items-center gap-5 lg:absolute right-0 p-5">
            <div className="flex flex-row gap-1">
              <div
                onClick={openSearchModal}
                className="hover:bg-gray-100 hover:shadow p-2 rounded cursor-pointer transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21L15.803 15.803M15.803 15.803A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <div className="hover:bg-gray-100 hover:shadow p-2 rounded cursor-pointer transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {menuData.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between px-5 py-3 hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex flex-row items-center gap-5 ">
              <img
                src={`/img/nav/${menuImg[index]}`}
                className="rounded-full w-[50px] h-[50px] object-cover"
                alt={item}
              />
              <h1>{item}</h1>
            </div>
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
                d="M8.25 4.5L15.75 12l-7.5 7.5"
              />
            </svg>
          </div>
        ))}
        <div className="border-t-2 border-b-2 border-black my-5 py-3">
          {MenuSection(
            "account",
            "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          )}
          <Link
            to="/location"
            className="flex flex-row px-5 py-3 gap-5 hover:bg-gray-50 cursor-pointer"
          >
            <div>
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
            </div>
            <div>{t("menu.locator")}</div>
          </Link>
          <div className="flex flex-row px-5 py-3 gap-5 hover:bg-gray-50 cursor-pointer">
            <div>
              <img src="/img/nav/heart.jpg" />
            </div>
            <div>{t("menu.web")}</div>
          </div>
          {MenuSection(
            "inspiration",
            "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          )}
          {MenuSection(
            "subscribe",
            "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
          )}
          {MenuSection(
            "primania",
            "M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
          )}
          {MenuSection(
            "gift-card",
            "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
          )}
        </div>
      </div>
      <SearchModal showModal={showSearchModal} closeModal={closeSearchModal} />
    </div>
  );
};

export default MenuModal;
