import React from 'react'
import ResetPassword from '../components/Password-Reset/ResetPassword'
import { useLocation } from 'react-router-dom';

const ResetPasswordPage = () => {
    const location = useLocation();
    const userType = location.pathname.includes("/store/reset-password") ? "store" : "user";

  return (
    <div className='flex items-center content-center w-[100%] h-screen'>
      <ResetPassword userType={userType}/>
    </div>
  )
}

export default ResetPasswordPage;