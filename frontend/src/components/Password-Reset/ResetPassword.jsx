import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = ({ userType }) => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, SetPassword] = useState("");
  const [confirm_password, SetConfirm_password] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm_password) {
      alert("Passwords Unmatch");
    }


    try {
      const apiEndPoint =
      userType === "store"
        ? "http://localhost:8000/api/v2/shop/reset-password" 
        : "http://localhost:8000/api/v2/user/reset-password";


      const res = await axios.post(
        apiEndPoint,
        { token, password }
      );
      
      if (res.data.success) {
        toast.success("Password changed successfully!");
        userType === "store" ? navigate("/shop-login") : navigate("/login");
         // Redirection vers la page de connexion
      }
      
    } catch (error) {
      toast.error(error)
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Reset Your Password
        </h1>
        <p className="mt-2 text-sm text-center text-gray-600">
          Enter a new password to secure your account.
        </p>

        <form className="mt-6 space-y-4">
          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
              required
              className="w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm-password"
              value={confirm_password}
              onChange={(e) => {
                SetConfirm_password(e.target.value);
              }}
              required
              className="w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Change Password Button */}
          <button
            type="submit"
            onClick={HandleSubmit}
            className="w-full py-2 mt-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
