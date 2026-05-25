import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import LandingPage from "./pages/landingPage/landingPage";
import Services from "./pages/Services/Services";
import Pricing from "./pages/Pricing/Pricing";
import ForgotPassword from "./pages/Forgot-Password/Forgot-Password";
import ErrorPage from "./components/Error-page/Error-Page";
import BookingForm from "./components/BookingForm/BookingForm";
import Header1 from "./components/Header1/Header1"

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/BookingForm" element={<BookingForm />} />
      <Route path="/Header1" element={<Header1 />} />
    </Routes>
  </Router>
);

export default AppRoutes;
