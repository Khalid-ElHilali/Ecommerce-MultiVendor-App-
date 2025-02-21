import React from "react";
import ForgetPassword from "../components/Password-Reset/ForgetPassword";
import { useLocation } from "react-router-dom";

const ForgetPasswordPage = () => {
  const location = useLocation();
  const userType = location.pathname.includes("/store/forget-password") ? "store" : "user";

  return (
    <div className="h-screen w- flex items-center content-center bg-slate-50">
      <ForgetPassword userType={userType} />
    </div>
  );
};

export default ForgetPasswordPage;
