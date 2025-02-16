"use client";

import { AiFillFacebook } from "react-icons/ai";
import IconButton from "@/components/atoms/Buttons/IconButton";
import PrimaryButton from "@/components/atoms/Buttons/PrimaryButton";
import SecondaryButton from "@/components/atoms/Buttons/SecondaryButton";
import InputField from "@/components/atoms/Form/InputField";
import { useForm } from "react-hook-form";
import SearchInput from "@/components/atoms/Form/SearchInput";
import QuantitySelector from "@/components/atoms/Form/QuantitySelector";
import Checkbox from "@/components/atoms/Form/Checkbox";
import RadioButton from "@/components/atoms/Form/RadioButton";
import Badge from "@/components/atoms/Badge/Badge";
import Image from "@/components/atoms/Images/Image";
import Avatar from "@/components/atoms/Images/Avatar";
import CardContainer from "@/components/atoms/CardContainer/CardContainer";
import Heading from "@/components/atoms/Text/Heading";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const quantity = watch("quantity");
  const rememberMe = watch("rememberMe");
  const paymentMethod = watch("paymentMethod");
  console.log("quantity: ", quantity);
  console.log("rememberMe: ", rememberMe);
  console.log("paymentMethod: ", paymentMethod);

  return (
    <div>
      This is Home page
      <PrimaryButton>Click me</PrimaryButton>
      <SecondaryButton>Order Now</SecondaryButton>
      <IconButton icon={AiFillFacebook}>Sign in</IconButton>
      <InputField
        name="email"
        label="Email"
        placeholder="Enter your email"
        type="email"
        register={register}
      />
      <SearchInput name="searchQuery" register={register} />
      <QuantitySelector
        name="quantity"
        setValue={setValue}
        getValues={getValues}
      />
      <Checkbox name="rememberMe" label="Remember me" register={register} />
      <RadioButton
        name="paymentMethod"
        value="creditCard"
        label="Credit Card"
        register={register}
      />
      <Badge text="Out of Stock" type="outOfStock" />
      <Image src="/path-to-image.jpg" alt="Hoodie" className="w-32 h-32" />
      <Avatar src="/user-avatar.jpg" size={60} className="shadow-lg" />
      <CardContainer>
        <Image src="/hoodie.jpg" />
        <Badge text="Sale" type="sale" />
      </CardContainer>
      <Heading type="main">Welcome to Our Store</Heading>
      <Heading type="sub">Welcome to Our Store</Heading>
    </div>
  );
}
