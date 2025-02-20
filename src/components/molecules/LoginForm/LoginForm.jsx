import React from "react";
import InputField from "@/components/atoms/Form/InputField";
import { useForm } from "react-hook-form";
import PrimaryButton from "@/components/atoms/Buttons/PrimaryButton";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const loginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit(loginSubmit)} className="space-y-6">
      <div>
        <InputField
          type="email"
          label="Email"
          placeholder="Email"
          name="email"
          register={register}
        />
      </div>

      <div>
        <InputField
          type="password"
          label="Password"
          placeholder="Password"
          name="password"
          register={register}
        />
      </div>

      <PrimaryButton type="submit">Login</PrimaryButton>

      <div className="flex justify-between text-sm">
        <a
          href="#"
          className="text-purple-600 hover:text-purple-700 
        transition-colors duration-300"
        >
          Forgot Password?
        </a>
        <div className="text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-purple-600 hover:text-purple-700 
          transition-colors duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
