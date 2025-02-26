import RegisterForm from "@/components/organisms/RegisterForm/RegisterForm";
import Image from "@/components/atoms/Images/Image";
import React from "react";
import { FaRocket } from "react-icons/fa";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";

const RegisterPage = () => {
  return (
    <MainTemplate>
      <div
        className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-50 
    flex items-center justify-center p-4 mt-[80px]"
      >
        <div
          className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 
      transform transition-all duration-500 hover:shadow-2xl"
        >
          <div className="text-center mb-8 space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  className="w-[350px] h-auto"
                />
              </div>
              <FaRocket className="text-teal-500 text-2xl animate-bounce" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">
              Start Your Journey
            </h1>
            <p className="text-gray-600">
              Join the fastest growing e-commerce community in Bangladesh
            </p>
          </div>

          <RegisterForm />
        </div>
      </div>
    </MainTemplate>
  );
};

export default RegisterPage;
