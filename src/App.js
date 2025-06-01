import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Seamless from "./component/Seamless";
import Flexible from "./component/Flexible";
import HowItWorks from "./component/HowItWorks";
import FAQ from "./component/FAQ";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";
import Dashboard from "./dashboard";
import AuthPage from "./Auth-page/auth";
import SchedulePage from "./dashboard/SchedulePage"; // Import your new page

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
        <Route path="/Auth-page/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schedule/:date" element={<SchedulePage />} />{" "}
        {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;
