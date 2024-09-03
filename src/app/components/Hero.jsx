import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section
      className="bg-primary container text-color-white py-20 md:py-32"
      style={{
        backgroundImage: "url(/bghero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find the Best Care Nearby
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Sign up as a hospital to update your facilities, or explore and
              book available rooms, ICU beds, and more in nearby hospitals.
            </p>
            <div className="flex space-x-4">
              <button className="bg-secondary hover:bg-green-600 text-color-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                <Link
                  to="/register"
                  className="hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Signup
                </Link>
              </button>
              <button className="bg-transparent border border-color-white hover:bg-color-white hover:text-primary font-bold py-3 px-6 rounded-md transition-colors duration-300">
                Search Hospitals
              </button>
            </div>
          </div>
          <div className="hidden md:block opacity-85">
            <img
              src="/hero.jpg"
              alt="Hospital Management"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
