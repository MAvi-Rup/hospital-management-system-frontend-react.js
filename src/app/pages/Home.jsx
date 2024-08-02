import MyCarousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import PopularHospitals from "../components/PopularHospitals";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MyCarousel />
      <PopularHospitals />
    </div>
  );
};

export default Home;
