import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Seamless from "./components/Seamless";
import Flexible from "./components/Flexible";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import AuthPage from "./Auth-page/auth";
import Dashboard from "./page/dashboard";
import ScheduleWorkout from "./page/schedule-workout";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Seamless />
      <Flexible />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schedule-workout" element={<ScheduleWorkout />} />
      </Routes>
    </Router>
  );
}

export default App;
