import { NavLink } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

function AdminSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin User Information:", { name, email, password });
    // Handle Admin sign-up logic here (e.g., API call)
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6 md:p-10 text-black">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-6">
        
        {/* Logo/Header */}
        <div className="flex items-center gap-2 justify-center font-semibold text-black">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-black text-white text-xs font-bold">
            C
          </div>
          CamBot
        </div>

        <div className="text-center">
          <h2 className="text-xl font-semibold">Create an Admin account</h2>
          <p className="text-sm text-gray-600">Sign up to get started as an Admin</p>
        </div>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-black">Name</label>
            <input
              id="name"
              type="text"
              required
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full transition-all duration-500 rounded-md border border-gray-300 px-3 py-2 text-sm bg-white text-black shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Email Field */}
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-black">Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full transition-all duration-500 rounded-md border border-gray-300 px-3 py-2 text-sm bg-white text-black shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Password Field with Eye Toggle */}
          <div className="grid gap-2">
            <label htmlFor="password" className="text-sm font-medium text-black">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full transition-all duration-500 rounded-md border border-gray-300 px-3 py-2 text-sm bg-white text-black shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute cursor-pointer right-3 top-3 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-black px-4 py-2 text-white text-sm font-medium hover:bg-gray-900 transition-colors"
          >
            Sign Up as Admin
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <hr className="flex-grow border-gray-300" />
          <span className="text-xs text-gray-500">or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Sign-Up Button */}
        <button
          type="button"
          className="flex cursor-pointer items-center justify-center gap-2 w-full border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
        >
          <FaGoogle className="h-5 w-5" />
          Sign Up with Google
        </button>

        <p className="text-center text-sm text-black">
          Already have an account?{" "}
          <NavLink to="/admin-login" className="cursor-pointer underline hover:text-gray-700">
            Login
          </NavLink>
        </p>

        <p className="text-center text-xs text-gray-500">
          By signing up, you agree to our{" "}
          <NavLink to="/terms" className="underline hover:text-black">Terms</NavLink> and{" "}
          <NavLink to="/privacy" className="underline hover:text-black">Privacy Policy</NavLink>.
        </p>
      </div>
    </div>
  );
}

export default AdminSignup;
