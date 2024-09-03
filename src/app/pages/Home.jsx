import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PopularHospitals from "../components/PopularHospitals";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Hero />
      <PopularHospitals />
    </div>
  );
};

export default Home;
