"use client";
import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import InputWithIconField from '@/components/atoms/Form/InputWithIconField';
import PrimaryButton from '@/components/atoms/Buttons/PrimaryButton';
import { useForm } from 'react-hook-form';
import TextareaField from '@/components/atoms/Form/TextareaField';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();



    const registerSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
    };

    return (
        <form onSubmit={handleSubmit(registerSubmit)} className="space-y-5">

            <InputWithIconField type='text' label="Enter your full name" placeholder="Enter your full name" name="name" register={register} icon={FaUser} />
            <InputWithIconField type='tel' label="Phone Number" placeholder="Phone Number" name="phone" register={register} icon={FaPhone} />
            <InputWithIconField type='email' label="Your email address" placeholder="Your email address" name="email" register={register} icon={FaEnvelope} />
            <InputWithIconField type='text' label="Business Name" placeholder="Business Name" name="business_name" register={register} icon={FaBriefcase} />
            <TextareaField type='text' label="Your Message" placeholder="Tell us about your business..." name="message" register={register} />

            <div className='flex justify-center'>
                <PrimaryButton className="px-12 py-2">Create Account</PrimaryButton>
            </div>

            <div className="text-center text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-teal-600 hover:text-teal-700 
        transition-colors duration-300 font-medium">
                    Login here
                </Link>
            </div>
        </form>
    );
};

export default RegisterForm;