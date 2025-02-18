import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../atoms/Form/InputField';
import TextareaField from '../../atoms/Form/TextareaField';
import PrimaryButton from '../../atoms/Buttons/PrimaryButton';

const ContactForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    const handleContactSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit(handleContactSubmit)} className="bg-white p-8 rounded-2xl shadow-xl">
            <InputField type='text' label="Your Name" placeholder="Name" name="name" register={register} />
            <InputField type='email' label="Email Address" placeholder="Email" name="email" register={register} />
            <InputField type='text' label="Subject" placeholder="How can we help you?" name="subject" register={register} />

             <TextareaField type='text' label="Your Message" placeholder="Tell us more about your inquiry..." name="message" register={register} />

           <PrimaryButton type='submit'>Send Message</PrimaryButton>
        </form>
    );
};

export default ContactForm;