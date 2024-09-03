import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center text-gray-600 mb-8">
        Thank you for reaching us! We are always happy to hear from you
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="purpose" className="block mb-2 font-medium">
            Purpose
          </label>
          <select
            id="purpose"
            className="w-full p-2 border rounded"
            {...register("purpose", { required: true })}
          >
            <option value="ICU">ICU</option>
            <option value="CCU">CCU</option>
            <option value="Bed">Bed</option>
            <option value="Hospital">Hospital</option>
            {/* Add other options */}
          </select>
          {errors.purpose && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label htmlFor="city" className="block mb-2 font-medium">
              Your City *
            </label>
            <select
              id="city"
              className="w-full p-2 border rounded"
              {...register("city", { required: true })}
            >
              <option value="Dhaka">Dhaka</option>
              {/* Add other cities */}
            </select>
            {errors.city && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="phone" className="block mb-2 font-medium">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-2 border rounded"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email *
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-medium">
            Message *
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full p-2 border rounded"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
