import LoginForm from '@/components/molecules/LoginForm/LoginForm';
import Image from "@/components/atoms/Images/Image";
import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';

const LoginPage = () => {
    return (
        <MainTemplate>
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 
    flex items-center justify-center p-4">
                <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 
      transform transition-all duration-500 hover:shadow-2xl">
                    <div className="text-center mb-8 space-y-3">
                        <div className="flex justify-center">
                            <Image src="/images/logo.png" alt="Logo" width={400} height={400} className='w-[350px] h-auto' />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">Welcome To</h1>
                        <p className="text-gray-600 text-sm">
                            The First Automated E-Commerce<br />
                            Sales Funnel In Bangladesh
                        </p>
                    </div>

                    <LoginForm />
                </div>
            </div>
        </MainTemplate>
    );
};

export default LoginPage;