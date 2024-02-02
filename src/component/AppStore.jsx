import React from "react";
import AppStoreImg from "../assets/website/app_store.png";
import PlayStoreImg from "../assets/website/play_store.png";
import BgPng from "../assets/website/coffee-beans-bg.png";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  return (
    <>
      <div style={backgroundStyle} className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              {/* Text */}
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white">
                ini juga tersedia di Android dan IOS
              </h1>
              {/* Logo ip playstore */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center pl-3">
                <a href="#">
                  <img
                    src={AppStoreImg}
                    alt="Apple"
                    className="max-w-[150px] sm:max-w[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={PlayStoreImg}
                    alt="Apple"
                    className="max-w-[150px] sm:max-w[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
            {/* kosong */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
