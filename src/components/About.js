import AboutImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <Title title="about" subTitle="us" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative group">
              <img
                src={AboutImg}
                className="w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-700"
                alt="Fitness training session"
              />
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>

              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform group-hover:translate-y-2 transition-all duration-500">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-100 p-3 rounded-xl">
                    <i className="fas fa-dumbbell text-cyan-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">5K+</div>
                    <div className="text-sm text-gray-600">
                      Workouts Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <article className="lg:w-1/2">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Fitness Journey
              </span>
            </h3>

            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Endurr, we believe fitness is better together. Our platform
                connects you with like-minded workout partners who share your
                goals and motivation levels, making every session more enjoyable
                and effective.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're training for a marathon, building strength, or
                just starting your fitness journey, our community provides the
                support and accountability you need to succeed.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <i className="fas fa-users text-green-600"></i>
                </div>
                <span className="text-gray-700">
                  Find Perfect Workout Buddies
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <i className="fas fa-calendar-check text-blue-600"></i>
                </div>
                <span className="text-gray-700">Schedule Sessions Easily</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <i className="fas fa-trophy text-purple-600"></i>
                </div>
                <span className="text-gray-700">Track Progress Together</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <i className="fas fa-fire text-orange-600"></i>
                </div>
                <span className="text-gray-700">
                  Stay Motivated & Accountable
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Learn More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300 inline-flex items-center"
              >
                Get Started
              </a>
            </div>
          </article>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Expert Trainers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
