import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserNurse } from "react-icons/fa";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({}); // <-- error state

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation function
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required.";

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email.";

    if (!formData.password.trim()) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form valid:", formData);
      // Call backend API here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-linear-to-br from-[#00E0E8] to-[#03519F] px-4">

      <div className="bg-white/90 backdrop-blur-xl w-full max-w-md 
      p-10 rounded-3xl shadow-2xl border border-white/50">

        <div className="flex justify-center mb-5">
          <FaUserNurse size={60} className="text-[#03519F]" />
        </div>

        <h2 className="text-4xl font-bold text-center mb-6 text-[#03519F]">
          Create Your Account
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Join us to access medical garments, hospital uniforms & supplies.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* NAME */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full mt-1 p-3 border rounded-lg outline-none 
                ${errors.name ? "border-red-500" : "focus:ring-2 focus:ring-[#03519F]"}
              `}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full mt-1 p-3 border rounded-lg outline-none 
                ${errors.email ? "border-red-500" : "focus:ring-2 focus:ring-[#03519F]"}
              `}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Create a password"
              className={`w-full mt-1 p-3 border rounded-lg outline-none 
                ${errors.password ? "border-red-500" : "focus:ring-2 focus:ring-[#03519F]"}
              `}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            className="w-full py-3 bg-[#03519F] text-white rounded-lg 
            font-semibold hover:bg-[#023d78] transition duration-300 shadow-md"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-6 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-[#03519F] font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}
