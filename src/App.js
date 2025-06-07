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

import AuthPage from "./Auth-page/auth";
// import SchedulePage from "./dashboard/SchedulePage"; // FIXED: Uncommented this

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

        {/* <Route path="/schedule/:date" element={<SchedulePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
