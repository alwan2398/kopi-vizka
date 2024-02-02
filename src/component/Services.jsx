import React from "react";
import img1 from "../assets/product/produk1.png";
import img2 from "../assets/product/produk2.png";
import img3 from "../assets/product/produk3.png";

const ServicesData = [
  {
    id: 1,
    img: img1,
    name: "Cappucinno",
    description:
      "cappuccino modern menampilkan lapisan yang halus dan seimbang. Aroma kuat",
    aosDelay: "100",
  },
  {
    id: 2,
    img: img2,
    name: "Expresso",
    description:
      "Espresso bukan sekadar minuman, tetapi juga pengalaman yang mengangkat dan membangkitkan semangat",
    aosDelay: "100",
  },
  {
    id: 3,
    img: img3,
    name: "Latte",
    description:
      "Dengan kopi Latte ini, nikmatilah sensasi kopi yang menggetarkan, sambil merasakan sentuhan mutakhir dari dunia kopi yang terus berkembang.",
    aosDelay: "100",
  },
];
const Services = () => {
  return (
    <>
      <span id="Services"></span>
      <div className="py-10">
        <div className="container">
          {/* Text Atas */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Menu Populer untukmu
            </h1>
          </div>

          {/* Text Atas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((data, index) => {
              {
                /* Gambar Content */
              }
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative"
                >
                  <div className="h-[122px]">
                    <img
                      src={data.img}
                      alt="Product"
                      className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-gray-800 group-hover:text-white duration-200 text-sm line-clamp-2">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
