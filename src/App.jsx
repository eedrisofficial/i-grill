import { Route, Routes } from "react-router";
import HomePage from "./components/landingpage/HomePage";
import "./index.css";
import AboutUs from "./components/aboutus/AboutUs";
import ContactUs from "./components/contactus/ContactUs";
import Order from "./components/orderpage/Order";
import Booking from "./components/booking/Booking";
import Cart from "./components/orderpage/Cart";

function App() {
  return (
    <div className="text-[#333333] martel w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/order" element={<Order />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
