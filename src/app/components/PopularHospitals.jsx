import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const hospitals = [
  {
    id: 1,
    name: "Square Hospitals Ltd",
    image:
      "https://square-hospitals.com/wp-content/uploads/2022/08/Square-Hospital-Building.jpg",
    location: "Dhaka",
    specialties: "Multi-specialty",
    website: "https://www.squarehospital.com/",
  },
  {
    id: 2,
    name: "Evercare Hospital Dhaka",
    image:
      "https://www.evercarebd.com/wp-content/uploads/2020/09/Evercare-Hospital-Dhaka-1.jpg",
    location: "Dhaka",
    specialties: "Tertiary Care",
    website: "https://www.evercarebd.com/",
  },
  {
    id: 3,
    name: "United Hospital Limited",
    image:
      "https://unitedhospital.com/files/shares/uhltopbanner/UHL-Top-Banner-01.jpg",
    location: "Dhaka",
    specialties: "Cardiology, Oncology",
    website: "https://www.uhlbd.com/",
  },
  {
    id: 4,
    name: "Labaid Specialized Hospital",
    image:
      "https://labaidgroup.com/specialized/storage/gallery/zM3xXRiDwlnE4KbYJwPdx0uumYtTw7Bj5QFRD3Hl.jpg",
    location: "Dhaka",
    specialties: "Cardiac, Neurology",
    website: "https://labaidgroup.com/specialized",
  },
  {
    id: 5,
    name: "Bangabandhu Sheikh Mujib Medical University",
    image: "https://bsmmu.edu.bd/public/files/1593947402_bsmmu.jpg",
    location: "Dhaka",
    specialties: "Teaching Hospital",
    website: "https://bsmmu.edu.bd/",
  },
  {
    id: 6,
    name: "Apollo Hospitals Dhaka",
    image:
      "https://www.apollodhaka.com/wp-content/uploads/2020/04/apollo-building.jpg",
    location: "Dhaka",
    specialties: "Multi-specialty",
    website: "https://www.apollodhaka.com/",
  },
  {
    id: 7,
    name: "Ibn Sina Hospital",
    image:
      "https://ibnsinatrust.com/wp-content/uploads/2022/05/Ibn-Sina-Medical-College-Hospital-Kallyanpur-Dhaka-1.jpg",
    location: "Dhaka",
    specialties: "General Hospital",
    website: "https://www.ibnsinatrust.com/",
  },
  {
    id: 8,
    name: "Chittagong Medical College Hospital",
    image:
      "https://www.observerbd.com/2020/11/21/observerbd.com_1605980416.jpg",
    location: "Chittagong",
    specialties: "Teaching Hospital",
    website: "https://cmch.gov.bd/",
  },
];

const PopularHospitals = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Popular Hospitals in Bangladesh
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {hospitals.map((hospital) => (
            <SwiperSlide key={hospital.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {hospital.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{hospital.location}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    {hospital.specialties}
                  </p>
                  <a
                    href={hospital.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-secondary transition duration-300"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularHospitals;
