import React from "react";
import socialData from "../../../public/data/social.json";
import { Link } from "react-router-dom";

export const Social = () => {
  return (
    <div className="global-animation flex flex-row gap-10 sm:gap-20 w-screen justify-center mt-32 mb-16">
      {socialData.map((social, index) => (
        <Link
          key={index}
          className="hover:scale-110 drop-shadow hover:drop-shadow-md transition-all"
          to={social.url}
          target="_blank"
        >
          <img
            className="w-8 h-8"
            src={`/img/social/${social.img}`}
            alt={social.name}
          />
        </Link>
      ))}
    </div>
  );
};

export default Social;
