import MyCarousel from "../components/Carousel";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PopularHospitals from "../components/PopularHospitals";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MyCarousel />
      <Hero />
      <PopularHospitals />
    </div>
  );
};

export default Home;
