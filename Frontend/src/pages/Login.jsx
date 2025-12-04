import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStethoscope } from "react-icons/fa";

export default function Login() {
  const [formData, setFormData] = useState({
    identifier: "", // email OR phone
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Helper functions
  const isEmail = (value) => /\S+@\S+\.\S+/.test(value);
  const isPhone = (value) => /^[0-9]{10}$/.test(value);

  // Validation logic
  const validateForm = () => {
    let newErrors = {};

    // IDENTIFIER
    if (!formData.identifier.trim()) {
      newErrors.identifier = "Email or phone number is required.";
    } else if (!isEmail(formData.identifier) && !isPhone(formData.identifier)) {
      newErrors.identifier =
        "Enter a valid email address or 10-digit phone number.";
    }

    // PASSWORD
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    }

    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("LOGIN VALID:", formData);

      // When backend is ready:
      // axios.post("/api/login", formData)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-linear-to-br from-[#00E0E8] to-[#03519F] px-4">

      <div className="bg-white/90 backdrop-blur-xl w-full max-w-md 
      p-10 rounded-3xl shadow-2xl border border-white/50">

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <FaStethoscope size={60} className="text-[#03519F]" />
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-6 text-[#03519F]">
          Welcome Back
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Login to access high-quality medical garments and hospital supplies.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* EMAIL OR PHONE */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Email or Phone
            </label>
            <input
              type="text"
              name="identifier"
              placeholder="Enter email or 10-digit phone number"
              onChange={handleChange}
              className={`w-full mt-1 p-3 border rounded-lg outline-none 
                ${errors.identifier ? "border-red-500" : "focus:ring-2 focus:ring-[#03519F]"}
              `}
            />
            {errors.identifier && (
              <p className="text-red-500 text-sm mt-1">
                {errors.identifier}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className={`w-full mt-1 p-3 border rounded-lg outline-none 
                ${errors.password ? "border-red-500" : "focus:ring-2 focus:ring-[#03519F]"}
              `}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            className="w-full py-3 bg-[#03519F] text-white rounded-lg 
            font-semibold hover:bg-[#023d78] transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-6 text-gray-700">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#03519F] font-semibold">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}
