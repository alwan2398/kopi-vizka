import { data } from "autoprefixer";
import React from "react";
import Slider from "react-slick";

const TestimoniData = [
  {
    id: 1,
    nama: "Deren",
    text: "Reprehenderit minim ea sunt occaecat sit consequat laborum quis officia anim nulla fugiat. Qui ea officia cupidatat sunt voluptate ad consequat officia. Aute elit esse deserunt duis. Veniam sit consequat ex ullamco commodo nulla. Ut excepteur enim elit laboris ut non duis id minim adipisicing sunt est cillum sint. Tempor consequat officia sint eiusmod laboris veniam consectetur proident cillum ad qui sit.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    nama: "Brian",
    text: "Reprehenderit minim ea sunt occaecat sit consequat laborum quis officia anim nulla fugiat. Qui ea officia cupidatat sunt voluptate ad consequat officia. Aute elit esse deserunt duis. Veniam sit consequat ex ullamco commodo nulla. Ut excepteur enim elit laboris ut non duis id minim adipisicing sunt est cillum sint. Tempor consequat officia sint eiusmod laboris veniam consectetur proident cillum ad qui sit.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    nama: "Boris",
    text: "Reprehenderit minim ea sunt occaecat sit consequat laborum quis officia anim nulla fugiat. Qui ea officia cupidatat sunt voluptate ad consequat officia. Aute elit esse deserunt duis. Veniam sit consequat ex ullamco commodo nulla. Ut excepteur enim elit laboris ut non duis id minim adipisicing sunt est cillum sint. Tempor consequat officia sint eiusmod laboris veniam consectetur proident cillum ad qui sit.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    nama: "Boy",
    text: "Reprehenderit minim ea sunt occaecat sit consequat laborum quis officia anim nulla fugiat. Qui ea officia cupidatat sunt voluptate ad consequat officia. Aute elit esse deserunt duis. Veniam sit consequat ex ullamco commodo nulla. Ut excepteur enim elit laboris ut non duis id minim adipisicing sunt est cillum sint. Tempor consequat officia sint eiusmod laboris veniam consectetur proident cillum ad qui sit.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    nama: "Dellia",
    text: "Reprehenderit minim ea sunt occaecat sit consequat laborum quis officia anim nulla fugiat. Qui ea officia cupidatat sunt voluptate ad consequat officia. Aute elit esse deserunt duis. Veniam sit consequat ex ullamco commodo nulla. Ut excepteur enim elit laboris ut non duis id minim adipisicing sunt est cillum sint. Tempor consequat officia sint eiusmod laboris veniam consectetur proident cillum ad qui sit.",
    img: "https://picsum.photos/105/106",
  },
  {
    id: 6,
    nama: "Bella",
    text: "Reprehenderit minim ea sunt occaecat sit consequat laborum quis officia anim nulla fugiat. Qui ea officia cupidatat sunt voluptate ad consequat officia. Aute elit esse deserunt duis. Veniam sit consequat ex ullamco commodo nulla. Ut excepteur enim elit laboris ut non duis id minim adipisicing sunt est cillum sint. Tempor consequat officia sint eiusmod laboris veniam consectetur proident cillum ad qui sit.",
    img: "https://picsum.photos/106/106",
  },
];
const Testimoni = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* bagian atas */}
        <div className="text-center mb-10">
          <h1
            data-aos="fade-up"
            className="text-4xl font-bold font-cursive text-gray-800"
          >
            Testimonial
          </h1>
        </div>
        {/* Section Testimoninya */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimoniData.map((data, index) => {
              return (
                <div className="my-6" key={data.id}>
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                    {/* Profile */}
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt="profile"
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    {/* Pesan Text */}
                    <div>
                      <div>
                        <p className="text-xs text-gray-500">{data.text}</p>
                        <h1 className="text-xl font-bold text-black/80 font-cursive">
                          {data.nama}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
