import React from "react";

const LeaderCard = ({ name, role, image }) => (
  <div className="text-center">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-4"
    />
    <h3 className="font-bold">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-green-500 text-4xl mb-4">{icon}</div>
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutUs = () => {
  const leaders = [
    {
      name: "Melika M Quader",
      role: "Managing Director",
      image: "path/to/melika.jpg",
    },
    {
      name: "Sheikh Jawad Rahim",
      role: "Director",
      image: "path/to/sheikh.jpg",
    },
    {
      name: "Kamruzzaman Ripon",
      role: "Head of Expansion",
      image: "path/to/kamruzzaman.jpg",
    },
  ];

  const values = [
    {
      icon: "🚀",
      title: "Love to innovate",
      description: "We embrace innovation in every aspect of our work.",
    },
    {
      icon: "🛡️",
      title: "Committed to safety",
      description: "Safety is our top priority in all operations.",
    },
    {
      icon: "💪",
      title: "Believe in empowerment",
      description: "We empower our team and customers to achieve more.",
    },
    {
      icon: "👥",
      title: "Value people",
      description: "Our success is built on valuing and respecting people.",
    },
    {
      icon: "✅",
      title: "Taking responsibility",
      description: "We take responsibility for our actions and decisions.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Who we are?</h1>
      <p className="text-gray-600 text-center mb-12">
        We started our journey back in 2016 with one goal in mind: to make
        inter-city travel hassle-free and enjoyable. Fast forward to today,
        we've become the largest online ticketing platform in the country. We
        are constantly innovating to make your experience with us even better!
      </p>

      <h2 className="text-2xl font-bold mb-6">Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {leaders.map((leader, index) => (
          <LeaderCard key={index} {...leader} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
