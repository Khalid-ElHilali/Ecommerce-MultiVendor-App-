import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ForgetPassword = ({ userType }) => {
  const [email, setEmail] = useState("");
  console.log(userType)

  const handlemessage = async (e) => {
    e.preventDefault();
    try {
      const apiEndPoint =
        userType === "store"
          ? "http://localhost:8000/api/v2/shop/forget-password"
          : "http://localhost:8000/api/v2/user/forget-password";

          console.log(apiEndPoint);

      const res = await axios.post(apiEndPoint, { email });
      if (res.data.success === true) {
        toast.success("Check your inbox for password reset password");
      }
    } catch (error) {
      toast.error("Error sending reset email");
    }
  };

  return (
    <div className="flex items-center content-center flex-col  w-[100%]">
      <div className="flex content-center flex-col p-5 w-full md:w-[700px] border rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold pb-8">Forgot your Password</h2>
        <p className="text-md font-light  pb-6">
          Please enter your email address you would like your password reset
          information sent to
        </p>
        <form onSubmit={handlemessage} className="flex content-center flex-col">
          <label htmlFor="email" className="text-md font-normal pb-3">
            Enter your email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            required
            className="h-[38px] p-2 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="mt-[20px] ml-auto mr-auto w-[250px] h-[40px] rounded-xl bg-slate-700 text-white  "
          >
            Request Reset Link
          </button>
        </form>
        <button className="mt-5 ml-auto mr-auto w-[250px] h-[40px] rounded-xl bg-white text-blue-500  ">
          <a href={userType === "store" ? "/shop-login" : "/login"}>Back to login</a>
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
