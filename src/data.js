import React from "react";
import { FaDumbbell, FaHeartbeat, FaUsers } from "react-icons/fa";

// Example data structure
export const pageLink = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#contact", text: "Contact" },
];

export const socialLink = [
  { id: 1, href: "https://facebook.com", icon: "fab fa-facebook-f" },
  { id: 2, href: "https://twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://instagram.com", icon: "fab fa-instagram" },
  { id: 4, href: "https://youtube.com", icon: "fab fa-youtube" },
];

export const seamless = [
  {
    id: 1,
    icon: <FaDumbbell />,
    title: "Personal Training",
    text: "One-on-one coaching tailored to your goals, schedule, and lifestyle. Stay consistent and strong.",
  },
  {
    id: 2,
    icon: <FaHeartbeat />,
    title: "Health Tracking",
    text: "Track your workouts, progress, and health stats all in one seamless dashboard.",
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: "Community Support",
    text: "Join our community of goal-getters and stay inspired every single day.",
  },
];

export const tours = [
  {
    id: 1,
    image: "./images/tour-1.jpeg",
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: "6 days",
    price: 2100,
  },
  {
    id: 2,
    image: "./images/tour-2.jpeg",
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: "11 days",
    price: 1400,
  },
  {
    id: 3,
    image: "./images/tour-3.jpeg",
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: "8 days",
    price: 5000,
  },
  {
    id: 4,
    image: "./images/tour-4.jpeg",
    date: "december 5th, 2020",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    duration: "20 days",
    price: 3300,
  },
  {
    id: 5,
    image: "./images/tour-5.jpeg",
    date: "january 1th, 2021",
    title: "indonesia adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: "11 days",
    price: 1400,
  },
  {
    id: 6,
    image: "./images/tour-6.jpeg",
    date: "february 20th, 2021",
    title: "explore the world",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "worldwide",
    duration: "30 days",
    price: 5000,
  },
];
