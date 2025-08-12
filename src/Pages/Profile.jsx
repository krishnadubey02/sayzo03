import { useEffect, useState } from "react";
import { FaArrowLeft, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login"); // Redirect if not logged in
      return;
    }

    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="p-6">
      {/* Back Button */}
      <div
        onClick={() => navigate(-1)}
        className="flex gap-3 hover:bg-gray-200 w-fit cursor-pointer rounded-lg px-2 py-1"
      >
        <FaArrowLeft className="mt-1" />
        <span>Back</span>
      </div>

      {/* Profile Header */}
      <div className="flex flex-col items-center mt-6">
        <FaUserCircle className="text-gray-500 text-7xl" />
        <h2 className="text-2xl font-bold mt-2">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-600">{user.role}</p>
      </div>

      {/* User Info */}
      <div className="mt-6 bg-white shadow rounded-lg p-5 max-w-md mx-auto">
        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
        <p><strong>Email:</strong> {user.signupEmail}</p>
        {user.company && <p><strong>Company:</strong> {user.company}</p>}
        {user.gst && <p><strong>GST:</strong> {user.gst}</p>}
      </div>

      {/* Logout */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
