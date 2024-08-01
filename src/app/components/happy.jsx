import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl p-4 mx-2 sm:mx-4 max-w-xs sm:max-w-sm transition-transform duration-300 hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <img
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto border-4 border-gray-300"
        src={testimonial.image}
        alt={testimonial.name}
      />
      <h3 className="mt-4 text-lg sm:text-xl font-semibold text-center text-gray-800">{testimonial.name}</h3>
      <p className="mt-2 text-sm sm:text-base text-gray-700 text-center">{testimonial.feedback}</p>
      <div className="flex justify-center mt-2">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
      </div>
    </motion.div>
  );
};

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: 'Sophia Davis',
      feedback: 'Absolutely amazing experience! The team exceeded all expectations with their creativity and professionalism.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/90.jpg',
    },
    {
      name: 'Liam Carter',
      feedback: 'Exceptional work from start to finish. Highly skilled and dedicated team. My project was handled with utmost care.',
      rating: 3,
      image: 'https://randomuser.me/api/portraits/men/88.jpg',
    },
    {
      name: 'Olivia Martinez',
      feedback: 'Great attention to detail and a fantastic final product. The communication was seamless, and the results were impressive.',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/women/85.jpg',
    },
    {
      name: 'Ethan Brown',
      feedback: 'The project was delivered on time and exceeded my expectations. The team’s expertise was evident in every aspect of the work.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/87.jpg',
    },
    {
      name: 'Isabella Johnson',
      feedback: 'Very satisfied with the outcome. The team brought my vision to life with incredible skill and professionalism.',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/women/81.jpg',
    },
    {
      name: 'Mason Lee',
      feedback: 'Top-notch service and a beautiful end result. I’m thrilled with the work and will definitely recommend them to others.',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/men/86.jpg',
    },
    {
      name: 'Ava Smith',
      feedback: 'Fantastic work! The attention to detail and the creativity put into the project were truly impressive. Highly recommended.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/82.jpg',
    },
    {
      name: 'Noah Wilson',
      feedback: 'Amazing team that delivers high-quality results. The project was handled with care and precision from start to finish.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/89.jpg',
    },
  ];

  const clonedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const [index, setIndex] = useState(testimonials.length);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? clonedTestimonials.length - testimonials.length : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex >= clonedTestimonials.length - testimonials.length
        ? 0
        : prevIndex + 1
    );
  };

  const variants = {
    enter: {
      opacity: 0,
      scale: 0.8,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 0.5 },
        scale: { type: 'spring', stiffness: 300, damping: 20 },
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        opacity: { duration: 0.5 },
        scale: { type: 'spring', stiffness: 300, damping: 20 },
      },
    },
  };

  return (
    <div className="relative flex flex-col items-center space-y-6 py-8 px-4 h-full">
      <div className="overflow-hidden w-full h-96">
        <AnimatePresence initial={false} custom={index}>
          <motion.div
            key={index}
            className="flex justify-center items-center h-full"
            custom={index}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: -clonedTestimonials.length * 300, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipeThreshold = 100;
              const swipeDirection = offset.x < 0 ? 1 : -1;

              if (Math.abs(offset.x) > swipeThreshold) {
                if (swipeDirection === 1) {
                  handleNext();
                } else {
                  handlePrev();
                }
              }
            }}
          >
            {isClient && clonedTestimonials.length > 0 ? (
              window.innerWidth <= 640
                ? clonedTestimonials.slice(index, index + 1).map((testimonial, i) => (
                    <TestimonialCard key={i} testimonial={testimonial} />
                  ))
                : clonedTestimonials.slice(index, index + 3).map((testimonial, i) => (
                    <TestimonialCard key={i} testimonial={testimonial} />
                  ))
            ) : (
              <p className="text-gray-500 text-center">No testimonials available.</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

const Happy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Clients Feedback</h1>
      <TestimonialSlider />
    </div>
  );
};

export default Happy;
