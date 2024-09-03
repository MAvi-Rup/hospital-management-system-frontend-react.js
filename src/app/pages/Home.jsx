import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import PopularHospitals from "../components/PopularHospitals";
import ReviewSection from "../components/ReviewCard";

const Home = () => {
  return (
    <div>
      {/* <MyCarousel /> */}
      <Hero />
      <PopularHospitals />
      <ReviewSection />
      <ContactUs />
    </div>
  );
};

export default Home;
