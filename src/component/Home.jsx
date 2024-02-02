import React from "react";
import HeroImage from "../assets/coffee2.png";

const Home = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-brand flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Content Text */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                Nikmati santai mu dengan{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-brandDark bg-gradient-to-b from-primary to-primary/90 font-cursive"
                >
                  Coffe Vizka{" "}
                </span>
                di setiap cangkirnya
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200">
                  Yuk Mari Kita Order
                </button>
              </div>
            </div>
            {/* Content Text */}
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
            >
              <img
                data-aos-once="true"
                src={HeroImage}
                alt="Hero"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin"
              />
              <div className="bg-gradient-to-r from-brand to-secondary absolute top-10 left-10 p-3 rounded-xl">
                <h1>Kuy Enjoy</h1>
              </div>
              <div className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl">
                <h1>Mari Ngopi</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
