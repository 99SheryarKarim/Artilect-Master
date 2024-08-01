import React, { useState } from "react";
import styles from "./styles.css";
const Form = () => {
  const serviceCategories = [
    "product strategy",
    "UX design",
    "UI Design",
    "Web Development",
    "Mobile Development",
    "BackendDevelopment",
    "GenAI & ML",
    "E-Commerce",
    "Other",
  ];
  const priceRanges = [
    "$25k - $50k",
    "$50k - $100k",
    "$100k - $200k",
    "$200k - $300k",
    "$300k",
    "other",
  ];
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    source: "",
    projectBrief: "",
    nda: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };
  const selectPrice = (price) => {
    setSelectedPrice(price);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.company &&
      formData.source &&
      formData.projectBrief &&
      selectedServices.length > 0 &&
      selectedPrice
    ) {
      setIsSubmitting(true);
      setErrorMessage(""); // Clear any existing error message
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        sendEmail(formData.email);
        setTimeout(() => {
          window.location.href = "/"; // Redirect to home after showing thank you message
        }, 3000); // Show thank you message for 2 seconds
      }, 3000); // Simulate a delay for verification
    } else {
      setErrorMessage("Please fill all the fields before submitting.");
    }
  };
  const sendEmail = (email) => {
    // Implement email sending logic here using an email sending service
    console.log(`Email sent to: ${email}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form sm:mx-10 lg:mx-20 mb-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:text-xl md:text-xl lg:text-[1.4vw] text-[#515151] mt-28 gap-x-10">
          <div className="flex flex-col w-[100%]">
            <label htmlFor="name">Your name</label>
            <input
              className="label lg:p-[25px] p-4 rounded-[8px] sm:h-14 lg:h-10 sm:text-lg lg:text-[1.2vw] my-4 pl-3"
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-[100%]">
            <label htmlFor="email">Your e-mail</label>
            <input
              className="label lg:p-[25px]  p-1 pl-3 rounded-[8px] sm:h-14 lg:h-10 sm:text-lg lg:text-[1.2vw] my-4"
              type="email"
              name="email"
              id="email"
              placeholder="Company e-mail"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:text-xl lg:text-[1.4vw] text-[#515151] gap-x-10">
          <div className="flex flex-col">
            <label htmlFor="company">Your company</label>
            <input
              className="label lg:p-[25px] p-4 rounded-[8px] sm:h-14 lg:h-10 sm:text-lg lg:text-[1.2vw] my-4 pl-3"
              type="text"
              name="company"
              id="company"
              placeholder="Company name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="source">How did you hear of us?</label>
            <input
              className="label lg:p-[25px] p-4 rounded-[5px] sm:h-14 lg:h-10 pl-3 sm:text-lg lg:text-[1.2vw] my-4"
              type="text"
              name="source"
              id="source"
              placeholder="Your answer"
              value={formData.source}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex sm:text-xl md:text-xl lg:text-[1.4vw] text-[#515151] gap-10 mb-8">
          <div className="flex flex-col w-[100%]">
            <label htmlFor="projectBrief">Your project brief</label>
            <textarea
              className="label pt-4 pl-3 rounded-[7px] h-28 sm:text-lg lg:text-[1.2vw] my-4"
              name="projectBrief"
              id="projectBrief"
              placeholder="Describe your project vision, goals, and the impact it will have on your business."
              value={formData.projectBrief}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:text-xl lg:text-[1.4vw] text-[#515151] gap-9 mt-8">
          <div>
            <div className="mb-5">
              <label>What type of services are you looking for?</label>
            </div>
            <div className="buttons1 boxes grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-2 lg:gap-x-4 gap-y-4">
              {serviceCategories.map((service) => (
                <span
                  key={service}
                  className={`box ${
                    selectedServices.includes(service)
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } p-2 rounded-lg cursor-pointer`}
                  onClick={() => toggleService(service)}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-5">
              <label>What is your budget range?</label>
            </div>
            <div className="boxes grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-4">
              {priceRanges.map((price) => (
                <span
                  key={price}
                  className={`box ${
                    selectedPrice === price
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } p-2 rounded-lg cursor-pointer`}
                  onClick={() => selectPrice(price)}
                >
                  {price}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-6">
              <input
                type="checkbox"
                name="nda"
                id="nda"
                checked={formData.nda}
                onChange={handleChange}
              />
              <label htmlFor="nda">I will need an NDA.</label>
            </div>
          </div>
        </div>
        {errorMessage && (
          <div className="text-red-500 text-center mt-4">{errorMessage}</div>
        )}
        <div className="my-24 flex justify-center gap-3">
          <button
            type="submit"
            className="button py-4 px-12 bg-black text-white rounded-full lg:text-[1.6vw]  hover:text-black transition-all duration-300"
          >
            {isSubmitting ? <span>Verifying...</span> : <span>Submit</span>}
            <span className=" ml-8">&rarr;</span>
          </button>
        </div>
      </form>
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
            <p className="mb-4">
              Thanks for contacting us. We will respond to you soon.
            </p>
            <button
              className="button py-2 px-4 bg-[#212121] text-white rounded-full"
              onClick={() => setIsSubmitted(false)}
            >
              <span>Close</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Form;
