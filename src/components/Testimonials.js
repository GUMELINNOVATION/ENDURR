import React from "react";

const testimonials = [
  {
    name: "Aisha Khan",
    role: "Fitness Coach",
    image: "https://i.pravatar.cc/150?img=32",
    quote:
      "Endurr made fitness social again. I can work out with friends across continents. It’s truly revolutionary!",
  },
  {
    name: "Carlos Mendes",
    role: "Remote Developer",
    image: "https://i.pravatar.cc/150?img=47",
    quote:
      "Even during busy work weeks, I never miss a session thanks to my workout buddies on Endurr!",
  },
  {
    name: "Priya Sharma",
    role: "Yoga Instructor",
    image: "https://i.pravatar.cc/150?img=12",
    quote:
      "Hosting live yoga sessions has never been this easy. The Endurr community is amazing!",
  },
  {
    name: "David Lee",
    role: "University Student",
    image: "https://i.pravatar.cc/150?img=60",
    quote:
      "Endurr helped me stay consistent. I work out with my friends even if we’re in different cities!",
  },
  {
    name: "Sophie Laurent",
    role: "Health Blogger",
    image: "https://i.pravatar.cc/150?img=5",
    quote:
      "The simplicity of scheduling and the encouragement I get keeps me pushing forward every week!",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="section-title">What People Say About Endurr</h2>
      <div className="testimonials-scroll">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-avatar">
              <img src={t.image} alt={t.name} />
              <div className="avatar-ring"></div>
            </div>
            <div className="testimonial-text">
              <p className="quote">“{t.quote}”</p>
              <h3>{t.name}</h3>
              <span>{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
