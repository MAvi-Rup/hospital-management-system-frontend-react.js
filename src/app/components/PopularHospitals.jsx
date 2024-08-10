import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const PopularHospitals = () => {
  const swiperRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="mb-8">
      <div className="container mt-16">
        <div className="flex flex-col items-center md:block">
          <h1 className="text-2xl md:text-5xl text-center text-black">
            Popular Hospitals in Bangladesh
          </h1>
          <p className="text-center text-lg text-zinc-600 mt-4 mb-5">
            Discover top-rated healthcare facilities across the country.
          </p>
          <div className="flex justify-center space-x-4 mt-4 lg:hidden">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white bg-opacity-40 p-2 rounded-full focus:outline-none hover:bg-primary hover:text-white border"
            >
              <ChevronLeftIcon className="h-6 w-6 text-black hover:text-white" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-white bg-opacity-50 p-2 rounded-full focus:outline-none hover:bg-primary hover:text-white border"
            >
              <ChevronRightIcon className="h-6 w-6 text-black hover:text-white" />
            </button>
          </div>
        </div>
      </div>
      <div
        className="relative px-4 md:px-20 mt-4 md:mt-16"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {hospitals.map((hospital) => (
            <SwiperSlide key={hospital.id} className="select-text">
              <div className="relative group">
                <div className="aspect-[330/250] overflow-hidden relative">
                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="w-full h-48 object-cover"
                  />
                  <Link
                    to={`/hospital/${hospital.id}`}
                    className="absolute w-[calc(100%-20px)] left-1/2 transform -translate-x-1/2 bottom-5 py-2 md:py-4 bg-zinc-50 text-black hover:bg-primary hover:text-white rounded-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:font-semibold"
                  >
                    Visit Website
                  </Link>
                </div>
                <div className="mt-4 select-text">
                  <h3 className="text-lg font-semibold">{hospital.name}</h3>
                  <p className="text-zinc-600">{hospital.location}</p>
                  <p className="text-sm text-zinc-500 mt-1">
                    {hospital.specialties}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`hidden md:block absolute top-1/2 left-0 md:left-20 transform -translate-y-1/2 bg-white bg-opacity-40 p-2 md:p-6 rounded-full focus:outline-none hover:bg-primary hover:bg-opacity-100 hover:text-white z-10 transition-opacity duration-300 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`hidden md:block absolute top-1/2 right-0 md:right-20 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 md:p-6 rounded-full focus:outline-none hover:bg-primary hover:bg-opacity-100 hover:text-white z-10 transition-opacity duration-300 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularHospitals;

const hospitals = [
  {
    id: 1,
    name: "Square Hospitals Ltd",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMkEIcFgm_8R4j3TTOe9I8HlX01vp3BrHy96HeF=s1360-w1360-h1020",
    location: "Dhaka",
    specialties: "Multi-specialty",
    website: "https://www.squarehospital.com/",
  },
  {
    id: 2,
    name: "Evercare Hospital Dhaka",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOsVpt3Pt58pLm-CkPlzhmQcEve3M34LQL1lcC7=s1360-w1360-h1020",
    location: "Dhaka",
    specialties: "Tertiary Care",
    website: "https://www.evercarebd.com/",
  },
  {
    id: 3,
    name: "United Hospital Limited",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMhL6o2887G2wXFiELnmsnEdQf7FMQmffhpetdG=s1360-w1360-h1020",
    location: "Dhaka",
    specialties: "Cardiology, Oncology",
    website: "https://www.uhlbd.com/",
  },
  {
    id: 4,
    name: "Apollo Hospitals Dhaka",
    image:
      "https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2017/04/Apollo_Hospitals.jpg",
    location: "Dhaka",
    specialties: "Multi-specialty",
    website: "https://www.apollodhaka.com/",
  },
  {
    id: 5,
    name: "Labaid Specialized Hospital",
    image:
      "https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1x694528/uploads/dten/2023/06/26/lab-aid-hospital.jpeg?watermark=media%2F2023%2F05%2F28%2F1280px-Dhaka_Tribune_Logo.svg-1-a9e61c86dded62d74300fef48fee558f.png",
    location: "Dhaka",
    specialties: "Cardiology, Neurology",
    website: "https://www.labaidgroup.com/",
  },
  {
    id: 6,
    name: "Bangabandhu Sheikh Mujib Medical University",
    image:
      "https://mbbsbd.com/wp-content/uploads/2021/09/bangabondhu-madical-college.jpg",
    location: "Dhaka",
    specialties: "Medical Education, Research",
    website: "https://bsmmu.edu.bd/",
  },
];
