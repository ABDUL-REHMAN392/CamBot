import { NavLink } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa'; // Eye icons for password visibility toggle
import { useState } from 'react'; // To manage password visibility state

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [name, setName] = useState(""); // State to store name
  const [email, setEmail] = useState(""); // State to store email
  const [password, setPassword] = useState(""); // State to store password
  const [role, setRole] = useState("student"); // State to store role (student or faculty)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Information:", { name, email, password, role });
    // Handle sign-up logic here
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6 md:p-10 text-black">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-6">
        {/* Logo/Header */}
        <NavLink to="/" className="flex items-center gap-2 justify-center font-semibold text-black">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-black text-white text-xs font-bold">
            C
          </div>
          CamBot
        </NavLink>

        <div className="text-center">
          <h2 className="text-xl font-semibold">Create an account</h2>
          <p className="text-sm text-gray-600">Sign up to get started</p>
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
                type={showPassword ? "text" : "password"} // Toggle between text and password input type
                required
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full transition-all duration-500 rounded-md border border-gray-300 px-3 py-2 text-sm bg-white text-black shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility} // Handle toggle
                className="absolute cursor-pointer right-3 top-3 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Conditional rendering of eye icons */}
              </button>
            </div>
          </div>

          {/* Role Selection */}
          <div className="grid gap-2 ">
            <label htmlFor="role" className="text-sm font-medium text-black">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-md border cursor-pointer  border-gray-300 px-3 py-2 text-sm bg-white text-black shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
            </select>
          </div>

          {/* Google Sign-Up Button */}
          <button
            type="button"
            className="flex items-center cursor-pointer justify-center gap-2 w-full border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
          >
            <FaGoogle className="h-5 w-5" />
            Sign Up with Google
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-black px-4 py-2 text-white text-sm font-medium hover:bg-gray-900 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-black">
          Already have an account?{" "}
          <NavLink to="/login" className="underline cursor-pointer hover:text-gray-700">
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
