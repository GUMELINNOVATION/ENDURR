import React, { useState } from "react";

const faqData = [
  {
    question: "What is Endurr?",
    answer:
      "Endurr is an online platform that connects people around the world to work out together through scheduled virtual gym sessions.",
    category: "General",
    icon: "fas fa-dumbbell",
  },
  {
    question: "How do I schedule a workout?",
    answer:
      "After signing up, go to your dashboard and select a date and time for your workout. You can choose to invite friends or join a public session.",
    category: "Getting Started",
    icon: "fas fa-calendar-plus",
  },
  {
    question: "Do I need any equipment?",
    answer:
      "No. Most sessions are bodyweight-friendly, but you can bring any equipment you have if your session requires it.",
    category: "Equipment",
    icon: "fas fa-dumbbell",
  },
  {
    question: "Is Endurr free?",
    answer:
      "Yes! The basic plan is free, but we also offer premium features like personalized workout plans and advanced tracking.",
    category: "Pricing",
    icon: "fas fa-tag",
  },
  {
    question: "Can I join a workout from my phone?",
    answer:
      "Absolutely! Endurr works on all devices with a browser and a camera, including smartphones, tablets, and laptops.",
    category: "Technical",
    icon: "fas fa-mobile-alt",
  },
  {
    question: "How do I find workout partners?",
    answer:
      "You can browse public sessions, join fitness communities, or invite friends directly. Our matching algorithm also suggests compatible partners based on your fitness goals.",
    category: "Community",
    icon: "fas fa-users",
  },
  {
    question: "What types of workouts are available?",
    answer:
      "We offer everything from yoga and pilates to HIIT and strength training. You can also create custom workout sessions tailored to your preferences.",
    category: "Workouts",
    icon: "fas fa-running",
  },
  {
    question: "Is there a cancellation policy?",
    answer:
      "Yes, you can cancel sessions up to 2 hours before they start without any penalty. This gives your partner enough time to adjust their schedule.",
    category: "Policies",
    icon: "fas fa-clock",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = ["All", ...new Set(faqData.map((item) => item.category))];

  const filteredFaqs =
    activeCategory === "All"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-500 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
            NEED HELP?
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Find quick answers to common questions about Endurr and how to make
            the most of your fitness journey.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg transform -translate-y-1"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-cyan-300 hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <i className={`${item.icon} text-white text-lg`}></i>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {item.question}
                    </h3>
                    <span className="text-sm text-cyan-600 font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div
                  className={`w-8 h-8 rounded-full border-2 border-cyan-500 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-cyan-500 text-white rotate-180"
                      : "text-cyan-500 hover:bg-cyan-50"
                  }`}
                >
                  <i className="fas fa-chevron-down text-sm transition-transform duration-300"></i>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full"></div>

            <h2 className="text-3xl font-bold mb-4 relative z-10">
              Still have questions?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Our support team is here to help you get the most out of Endurr.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center">
                <i className="fas fa-envelope mr-3"></i>
                Contact Support
              </button>

              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center">
                <i className="fas fa-comments mr-3"></i>
                Live Chat
              </button>
            </div>

            {/* Support Stats */}
            <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-white/20 relative z-10">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-white/80 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">2min</div>
                <div className="text-white/80 text-sm">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-white/80 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
