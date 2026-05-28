import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import LandingPage from "./pages/landingPage/landingPage";
import Services from "./pages/Services/Services";
import Pricing from "./pages/Pricing/Pricing";
import ForgotPassword from "./pages/Forgot-Password/Forgot-Password";
import ErrorPage from "./components/Error-page/Error-Page";
import BookingForm from "./pages/BookingForm/BookingForm";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Order from "./pages/Dashboard/Order"
// import Customer from "./pages/Dashboard/Customer"

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services" element={<Services />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/booking-form" element={<BookingForm />} />

      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="order" element={<Order />} />
        {/* <Route path="customer" element={<Customer />} /> */}
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
