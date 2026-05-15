import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import LandingPage from "./pages/LandingPage/landingPage";
import Services from "./pages/Services/Services";
import Pricing from "./pages/Pricing/Pricing";
import ForgotPassword from "./pages/Forgot-Password/Forgot-Password";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
   
    </Routes>
  </Router>
);

export default AppRoutes;
