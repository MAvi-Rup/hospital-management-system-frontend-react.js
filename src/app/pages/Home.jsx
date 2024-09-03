import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PopularHospitals from "../components/PopularHospitals";
import ReviewSection from "../components/ReviewCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <MyCarousel /> */}
      <Hero />
      <PopularHospitals />
      <ReviewSection />
      <ContactUs />

      <Footer />
    </div>
  );
};

export default Home;
