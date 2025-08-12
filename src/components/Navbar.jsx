import { useState } from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdLocationOn, MdSearch } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../redux/cartSlice/cart';
const Navbar = () => {

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="flex items-center justify-between md:px-22 py-3 px-10 border-b border-gray-200 sticky top-0 z-50 bg-white">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-extrabold text-green-700 underline underline-offset-8 decoration-green-600">sayzo</h2>
          <div className="flex items-center gap-1 pt-2 cursor-pointer group">
            <MdLocationOn className="text-black text-xl hidden md:block group-hover:text-green-500" />
            <span className="font-semibold hidden md:block group-hover:text-green-500">Home - Mumbai</span>
            <IoMdArrowDropdown className="text-xl hidden md:block group-hover:text-green-500 text-gray-800" />
          </div>
        </div>

        {/* Search bar */}
        <div className="hidden items-center border border-gray-300 rounded px-4 py-3 shadow-lg bg-white w-1/2 md:flex">
          <input
            type="text"
            placeholder="Search for aata, daal, curd and more...."
            className="outline-none w-full bg-transparent text-sm placeholder-gray-500"
          />
          <MdSearch className="text-gray-600 text-xl" />
        </div>

        {/* User section */}
        <div className="flex items-center justify-between gap-6 pt-1">
          <div
            onClick={() => setShowModal(true)}
            className="hidden md:block text-sm font-semibold hover:bg-orange-600 hover:text-white transition-all duration-500 px-3 py-2 rounded cursor-pointer"
          >
            Switch Mode
          </div>
          <div

            className="text-sm font-semibold hover:bg-orange-600 hover:text-white transition-all cursor-pointer duration-500 px-3 py-2 rounded"
          >
            {isLoggedIn ? (
              <FaUserCircle
                className="text-2xl cursor-pointer"
                onClick={() => navigate("/profile")}
              />
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </div>
          <div className="relative cursor-pointer">
            <FaShoppingCart onClick={() => navigate('/cart')} className="text-2xl text-gray-800 hover:bg-orange-700 transition-all duration-500 px-1 py-1" />
            <span className="absolute -top-3 -right-4 text-xs bg-green-600 text-white px-1 rounded-full">{cartItems.length}</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 relative">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            {/* Modal content */}
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-bold">How do you want to shop?</h1>
              <p className="text-gray-500 text-center">
                Choose your role to get personalized experience and pricing
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {/* Consumer card */}
              <div
                className="border rounded-xl p-6 hover:shadow-lg cursor-pointer flex flex-col items-center text-center"
                onClick={() => {
                  navigate('/');
                  setShowModal(false);
                }}
              >
                <div className="bg-blue-100 p-3 rounded-full mb-3">
                  <span className="text-blue-600 text-2xl">🛍</span>
                </div>
                <h2 className="text-lg font-bold">I'm a Consumer</h2>
                <p className="text-sm text-gray-600 mt-2">
                  Shop directly from factories. Get authentic products at wholesale prices with factory warranties.
                </p>
                <ul className="mt-3 text-sm text-left text-gray-600">
                  <li>• Factory-direct pricing</li>
                  <li>• Authentic products only</li>
                  <li>• Single unit purchases</li>
                </ul>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
                  Start Shopping →
                </button>
              </div>

              {/* Business Buyer card */}
              <div
                className="border rounded-xl p-6 hover:shadow-lg cursor-pointer flex flex-col items-center text-center border-orange-400"
                onClick={() => {
                  navigate('/b2b');
                  setShowModal(false);
                }}
              >
                <div className="bg-orange-100 p-3 rounded-full mb-3">
                  <span className="text-orange-600 text-2xl">🏭</span>
                </div>
                <h2 className="text-lg font-bold">I'm a Business Buyer</h2>
                <p className="text-sm text-gray-600 mt-2">
                  Source bulk orders, negotiate custom deals, and build long-term supplier relationships.
                </p>
                <ul className="mt-3 text-sm text-left text-gray-600">
                  <li>• Bulk pricing & MOQ</li>
                  <li>• Custom negotiations</li>
                  <li>• Verified suppliers</li>
                </ul>
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600">
                  Explore B2B →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
