const ReviewCard = ({ name, rating, comment }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <div className="text-xl font-bold">{name}</div>
      <div className="ml-auto text-yellow-500">{"★".repeat(rating)}</div>
    </div>
    <p className="text-gray-600">{comment}</p>
  </div>
);

const ReviewSection = () => {
  const reviews = [
    { name: "John Doe", rating: 5, comment: "Excellent service!" },
    { name: "Jane Smith", rating: 4, comment: "Very good experience." },
    { name: "Bob Johnson", rating: 5, comment: "Highly recommended!" },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-20 mb-16 p-6 ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
