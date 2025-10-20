import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Aisha Khan",
    role: "Fitness Coach",
    image: "https://i.pravatar.cc/150?img=32",
    quote:
      "Endurr made fitness social again. I can work out with friends across continents. It's truly revolutionary!",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Remote Developer",
    image: "https://i.pravatar.cc/150?img=47",
    quote:
      "Even during busy work weeks, I never miss a session thanks to my workout buddies on Endurr!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Yoga Instructor",
    image: "https://i.pravatar.cc/150?img=12",
    quote:
      "Hosting live yoga sessions has never been this easy. The Endurr community is amazing!",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "University Student",
    image: "https://i.pravatar.cc/150?img=60",
    quote:
      "Endurr helped me stay consistent. I work out with my friends even if we're in different cities!",
    rating: 4,
  },
  {
    name: "Sophie Laurent",
    role: "Health Blogger",
    image: "https://i.pravatar.cc/150?img=5",
    quote:
      "The simplicity of scheduling and the encouragement I get keeps me pushing forward every week!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`fas fa-star ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            } text-sm`}
          ></i>
        ))}
      </div>
    );
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-500 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
            SUCCESS STORIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What People Say About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Endurr
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of fitness enthusiasts who transformed their workout
            routine with Endurr
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div
          className="relative max-w-4xl mx-auto mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform hover:scale-105 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar Section */}
              <div className="relative flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-2xl object-cover shadow-lg"
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-20 blur-sm"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-6">
                  <i className="fas fa-quote-left text-cyan-500 text-2xl opacity-50 mb-4"></i>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {testimonials[currentIndex].role}
                    </p>
                    <StarRating rating={testimonials[currentIndex].rating} />
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      onClick={prevTestimonial}
                      className="w-12 h-12 bg-gray-100 hover:bg-cyan-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-12 h-12 bg-gray-100 hover:bg-cyan-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-cyan-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-gray-700 my-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
