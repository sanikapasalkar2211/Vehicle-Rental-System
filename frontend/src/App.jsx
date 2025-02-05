import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomePage from "./components/Homepage";
//import Dashboard from './pages/Dashboard';
import ProductPage from "./pages/Product";
import ContactUs from "./pages/Contact";
import TestimonialsPage from "./pages/Testimonal";
import VehiclesPage from "./pages/vehicles";
import BookingPage from "./pages/Booking";
import UserProfile from "./pages/UserProfile";
import PaymentPage from './pages/payment';
import ForgotPassword from "./pages/resetPassword";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/Homepage" />} />
        
        {/* Register and Login Routes */}
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/vehicles" element={<VehiclesPage/>} />
        <Route path="/testimonal" element={<TestimonialsPage/>} />
        <Route path="/booking" element={<BookingPage/>} />
        <Route path="/userprofile" element={<UserProfile/>} />
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path="/resetpassword" element={<ForgotPassword/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;