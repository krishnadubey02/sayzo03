import { useState } from "react";
import { FaArrowLeft, FaBroadcastTower } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Sign In");

    // Sign In states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Sign Up states
    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        signupEmail: "",
        role: "",
        company: "",
        gst: "",
        signupPassword: ""
    });

    // Handle Sign In
    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }

        // Get user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            alert("No account found. Please sign up first.");
            return;
        }

        if (email === storedUser.signupEmail && password === storedUser.signupPassword) {
            localStorage.setItem("isLoggedIn", "true");
            alert("Login successful!");
            navigate("/");
        } else {
            alert("Invalid email or password");
        }
    };

    // Handle Sign Up
    const handleSignUp = (e) => {
        e.preventDefault();
        const { firstName, lastName, signupEmail, role, signupPassword } = signupData;

        if (!firstName || !lastName || !signupEmail || !role || !signupPassword) {
            alert("Please fill in all required fields");
            return;
        }

        // Save user data to localStorage
        localStorage.setItem("user", JSON.stringify(signupData));
        alert("Account created successfully!");
        setActiveTab("Sign In");

        // Clear sign up form
        setSignupData({
            firstName: "",
            lastName: "",
            signupEmail: "",
            role: "",
            company: "",
            gst: "",
            signupPassword: ""
        });
    };

    return (
        <div className="mt-7 px-7 py-3">
            <div onClick={() => navigate(-1)}  className="flex gap-4 hover:bg-amber-600 w-fit cursor-pointer rounded-lg px-2">
                <p className="pt-1"><FaArrowLeft /></p>
                <p>Back</p>
            </div>

            {/* login card */}
            <div className="flex flex-col gap-6 items-center mt-2 ">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-5">
                        <p className="text-4xl text-white bg-blue-700 p-2 rounded-xl"><FaBroadcastTower /></p>
                        <h1 className="text-3xl font-bold text-blue-700 py-1">Sayzo</h1>
                    </div>
                    <p className="text-gray-700 leading-6 font-semibold">Connect with manufacturers worldwide</p>
                </div>

                <div className="flex flex-col gap-4 mt-3 p-5 bg-green-50 rounded-lg">
                    <div className="flex flex-col items-center gap-1">
                        <h2 className="text-2xl font-bold leading-7">Welcome</h2>
                        <p className="text-gray-600">Sign in to your account or create a new one</p>
                    </div>

                    <div className="flex flex-col gap-4 py-3">
                        {/* Tabs */}
                        <div className="flex w-full justify-between bg-gray-300 rounded-lg">
                            {["Sign In", "Sign Up"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`bg-gray-300 text-gray-700 w-1/2 py-1 m-1 rounded-xl px-2 hover:bg-white transition-all duration-300 font-semibold ${activeTab === tab ? "hover:bg-white" : "text-gray-700"}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Sign In Form */}
                        {activeTab === "Sign In" && (
                            <form className="flex flex-col gap-2 mb-3" onSubmit={handleLogin}>
                                <label className="font-semibold">Email</label>
                                <input
                                    className="bg-white p-1 border border-gray-300 rounded-lg px-3"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <label className="mt-2 font-semibold">Password</label>
                                <input
                                    className="bg-white p-1 border border-gray-300 rounded-lg px-3"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <button
                                    type="submit"
                                    className="w-full bg-blue-700 text-white py-3 font-semibold rounded-lg mt-3 hover:scale-110 transition-all duration-500"
                                >
                                    Sign In
                                </button>
                            </form>
                        )}

                        {/* Sign Up Form */}
                        {activeTab === "Sign Up" && (
                            <form className="flex flex-col gap-2 mb-3" onSubmit={handleSignUp}>
                                <div className="flex gap-3 mb-2">
                                    <div className="w-1/2 flex flex-col gap-2">
                                        <label className="font-semibold">First Name</label>
                                        <input
                                            className="bg-white p-1 border border-gray-300 rounded-lg"
                                            type="text"
                                            placeholder="Enter your first name"
                                            value={signupData.firstName}
                                            onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                                        />
                                    </div>
                                    <div className="w-1/2 flex flex-col gap-2">
                                        <label className="font-semibold">Last Name</label>
                                        <input
                                            className="bg-white p-1 border border-gray-300 rounded-lg"
                                            type="text"
                                            placeholder="Enter your last name"
                                            value={signupData.lastName}
                                            onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <label className="font-semibold">Email</label>
                                <input
                                    className="bg-white p-1 border border-gray-300 rounded-lg mb-1"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={signupData.signupEmail}
                                    onChange={(e) => setSignupData({ ...signupData, signupEmail: e.target.value })}
                                />

                                <label className="font-semibold">I am a</label>
                                <select
                                    className="bg-white p-1 border border-gray-300 rounded-lg mb-1"
                                    value={signupData.role}
                                    onChange={(e) => setSignupData({ ...signupData, role: e.target.value })}
                                >
                                    <option value="">Select your role</option>
                                    <option value="manufacturer">Manufacturer</option>
                                    <option value="consumer">Consumer</option>
                                    <option value="retailer">Business Buyer</option>
                                </select>

                                <label className="font-semibold">Company (Optional)</label>
                                <input
                                    className="bg-white p-1 border border-gray-300 rounded-lg px-1 mb-1"
                                    type="text"
                                    placeholder="Enter your company"
                                    value={signupData.company}
                                    onChange={(e) => setSignupData({ ...signupData, company: e.target.value })}
                                />

                                <label className="font-semibold">GST Number (For Business)</label>
                                <input
                                    className="bg-white p-1 border border-gray-300 rounded-lg px-1 mb-1"
                                    type="text"
                                    placeholder="27XXXXXXXXXX"
                                    value={signupData.gst}
                                    onChange={(e) => setSignupData({ ...signupData, gst: e.target.value })}
                                />

                                <label className="font-semibold">Password</label>
                                <input
                                    className="bg-white p-1 border border-gray-300 rounded-lg px-1 mb-1"
                                    type="password"
                                    placeholder="Create a password"
                                    value={signupData.signupPassword}
                                    onChange={(e) => setSignupData({ ...signupData, signupPassword: e.target.value })}
                                />

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-3 font-semibold rounded-lg mt-3 hover:scale-110 transition-all duration-500"
                                >
                                    Sign Up
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
