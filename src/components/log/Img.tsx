import React from "react";

export const Img = () => {
  return (
    <div className="hidden lg:w-[60%] lg:block h-full border-r-2 border-black overflow-y-hidden">
      <img
        className="object-cover object-center w-full h-full"
        src="/img/log/background.jpg"
        alt="background"
      />
    </div>
  );
};

export default Img;
