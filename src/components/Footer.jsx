import {
  FaBox,
  FaCartPlus,
  FaEnvelope,
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaUser
} from "react-icons/fa";
import { FaTowerBroadcast } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0e1623] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1  lg:grid-cols-4 gap-8 hidden lg:grid ">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-extrabold text-green-500 mb-4">sayzo</h2>
          <p className="text-sm text-gray-300 mb-4">
            Your one-stop destination for quality products directly from manufacturers. Get the best prices with fastest delivery.
          </p>
          <div className="flex gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full cursor-pointer hover:bg-white hover:text-black transition">
              <FaFacebookF />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full cursor-pointer hover:bg-white hover:text-black transition">
              <FaTwitter />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full cursor-pointer hover:bg-white hover:text-black transition">
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About Us</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping Info</li>
            <li>Track Order</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-400" /> support@sayzo.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-green-400" /> +91 9876543210
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-400" /> Mumbai, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-gray-400 text-sm py-4 px-4 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto hidden lg:flex">
        <p>© 2024 Sayzo. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

      <div className="flex justify-between items-center px-13 py-6 border-t border-gray-200 text-gray-700 bg-white text-sm max-w-7xl mx-auto lg:hidden ">
        <div onClick={() => window.scrollTo({
          top: 0,
          behavior: "smooth" // smooth scrolling
        })} className="flex flex-col items-center cursor-pointer">
          <p><FaHome /></p>
          <p>
            Home
          </p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <p><FaBox /></p>
          <p>
            Categories
          </p>
        </div>
        <div onClick={() => navigate("/cart")} className="flex flex-col items-center cursor-pointer">
          <p><FaCartPlus /></p>
          <p>
            Cart
          </p>
        </div>
        <div onClick={() => navigate("/profile")} className="flex flex-col items-center cursor-pointer">
          <p><FaUser /></p>
          <p>
            Profile
          </p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <p><FaTowerBroadcast /></p>
          <p>
            Switch
          </p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
