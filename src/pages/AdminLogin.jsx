import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa'; // Import FaGoogle icon
import useStore from ".."; // Import Zustand store

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate from useNavigate
  const setAdminLoggedIn = useStore((state) => state.setAdminLoggedIn); // Access the store's set function

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Admin credentials:", { username, password });

    // Perform login logic (e.g., validating credentials)
    if (username === "admin@gmail.com" && password === "admin123") {
      setAdminLoggedIn(true); // Update Zustand state to logged in
      navigate("/admin"); // Redirect to admin panel
    } else {
      setError("Invalid username or password");
    }

    // Clear form fields after login (optional)
    setUsername('');
    setPassword('');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white p-6 md:p-10 text-black">
      <div className="flex w-full max-w-sm flex-col gap-6 bg-white p-6 rounded-lg shadow-md border border-gray-200">

        {/* Logo/Header */}
        <div className="flex items-center gap-2 self-center font-semibold text-black">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-black text-white text-xs font-bold">
            C
          </div>
          CamBot
        </div>

        {/* Admin Login Form */}
        <div className="flex flex-col gap-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Admin Login</h2>
            <p className="text-sm text-gray-600">Login with your admin credentials</p>
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            className="flex items-center cursor-pointer justify-center gap-2 w-full border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
          >
            <FaGoogle className="h-5 w-5 text-black" />
            Login with Google
          </button>

          {/* Divider */}
          <div className="relative text-center text-sm text-gray-500">
            <span className="bg-white px-2 relative z-10">or continue with</span>
            <div className="absolute inset-0 top-1/2 border-t border-gray-200 z-0" />
          </div>

          {/* Email/Password Form */}
          <form className="grid gap-4" onSubmit={handleLogin}>
            <div className="grid gap-2">
              <label htmlFor="username" className="text-sm font-medium text-black">Username</label>
              <input
                id="username"
                type="email"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="johndoe@example.com"
                className="w-full transition-all duration-500 rounded-md border border-gray-300 px-3 py-2 text-sm bg-white text-black shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="password" className="text-sm font-medium text-black">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*********"
                  className="w-full transition-all duration-500 rounded-md border border-gray-300 px-3 py-2 text-sm bg-white text-black shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute cursor-pointer right-3 top-3 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button
              type="submit"
              className="w-full cursor-pointer rounded-md bg-black px-4 py-2 text-white text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-black">
            Don't have an account?{" "}
            <NavLink to="/admin-signup" className="underline hover:text-gray-700">
              Sign up
            </NavLink>
          </p>
        </div>

        <p className="text-center text-xs text-gray-500">
          By continuing, you agree to our{" "}
          <NavLink to="/terms" className="underline hover:text-black">Terms of Service</NavLink>{" "}
          and{" "}
          <NavLink to="/privacy" className="underline hover:text-black">Privacy Policy</NavLink>.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
