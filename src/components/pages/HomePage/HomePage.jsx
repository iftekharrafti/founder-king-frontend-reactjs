import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import PricingSection from "@/components/organisms/PricingSection/PricingSection";
import React from "react";
import ServicesSection from "@/components/organisms/ServiceSection/ServicesSection";
import Section from "@/components/templates/Section/Section";
import LandingPageSection from "@/components/organisms/LandingPageSection/LandingPageSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection/TestimonialsSection";
import StatsSection from "@/components/organisms/StatsSection/StatsSection";
import HappyCustomer from "@/components/organisms/HappyCustomer/HappyCustomer";
import FaqItem from "@/components/molecules/FaqItem/FaqItem";
import FaqSection from "@/components/organisms/FaqSection/FaqSection";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";
import { fetcher } from "../../atoms/SWRFetcher/SWRFetcher";
import useSWR from "swr";
import envConfig from "../../../../envconfig";

// Service Data
const services = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format",
    title: "Incomplete Order tracking",
    description:
      "Creating modern, responsive websites using the latest technologies and best practices for optimal user experience.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500&auto=format",
    title: "customizable Landing pages",
    description:
      "Developing native and cross-platform mobile applications that deliver seamless experiences across all devices.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format",
    title: "One click courier upload system",
    description:
      "Crafting intuitive and beautiful user interfaces that enhance user engagement and satisfaction.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format",
    title: "Return order management",
    description:
      "Implementing scalable cloud infrastructure and services to power your digital transformation journey.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format",
    title: "Stock management",
    description:
      "Transforming raw data into actionable insights through advanced analytics and visualization.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&auto=format",
    title: "Sms marketing",
    description:
      "Protecting your digital assets with comprehensive security solutions and best practices.",
  },
];
// Pricing Data
const pricingData = [
  {
    title: "Regular License",
    price: "5000",
    originalPrice: "7000",
    features: [
      { text: "Incomplete Order tracking", included: true },
      { text: "customizable Landing pages", included: true },
      { text: "Fake/ duplicate orders detection (used otp number verified)", included: true },
      { text: "One click courier upload system", included: true },
      { text: "Return order management", included: true },
      { text: "Stock management", included: true },
      { text: "Sms marketing", included: true },
      { text: "Bulk invoice/ sticker printing", included: false },
      { text: "Product stock management", included: false },
      { text: "Use it. Free for a month/ Monthly 500 orders free", included: false },
      { text: "After a month you have to pay per parcel 1 taka only", included: false },
      { text: "Chat option (messenger. whatsapp live chat)", included: false },
    ],
    buttonText: "Purchase Now",
    link: "/checkout",
  },
  {
    title: "Extended License",
    price: "8000",
    features: [
      { text: "Incomplete Order tracking", included: true },
      { text: "customizable Landing pages", included: true },
      { text: "Fake/ duplicate orders detection (used otp number verified)", included: true },
      { text: "One click courier upload system", included: true },
      { text: "Return order management", included: true },
      { text: "Stock management", included: true },
      { text: "Sms marketing", included: true },
      { text: "Bulk invoice/ sticker printing", included: true },
      { text: "Product stock management", included: true },
      { text: "Use it. Free for a month/ Monthly 500 orders free", included: false },
      { text: "After a month you have to pay per parcel 1 taka only", included: false },
      { text: "Chat option (messenger. whatsapp live chat)", included: false },
    ],
    buttonText: "Purchase Now",
    link: "/checkout"
  },
  {
    title: "Bundle Pack",
    price: "20000",
    originalPrice: "18000",
    badge: "Most Popular",
    features: [
      { text: "Incomplete Order tracking", included: true },
      { text: "customizable Landing pages", included: true },
      { text: "Fake/ duplicate orders detection (used otp number verified)", included: true },
      { text: "One click courier upload system", included: true },
      { text: "Return order management", included: true },
      { text: "Stock management", included: true },
      { text: "Sms marketing", included: true },
      { text: "Bulk invoice/ sticker printing", included: true },
      { text: "Product stock management", included: true },
      { text: "Use it. Free for a month/ Monthly 500 orders free", included: true },
      { text: "After a month you have to pay per parcel 1 taka only", included: true },
      { text: "Chat option (messenger. whatsapp live chat)", included: true },
    ],
    buttonText: "Purchase Now",
    link: "/checkout"
  },
];

const landingPageImage = [
  {
    id: 1,
    url: "/images/landingPage/1.png",
    title: "Urban Fitness",
  },
  {
    id: 2,
    url: "/images/landingPage/2.png",
    title: "Yoga Practice",
  },
  {
    id: 3,
    url: "/images/landingPage/3.png",
    title: "CrossFit Training",
  },
  {
    id: 4,
    url: "/images/landingPage/4.png",
    title: "Boxing",
  },
  {
    id: 5,
    url: "/images/landingPage/5.png",
    title: "Weight Training",
  },
  {
    id: 6,
    url: "/images/landingPage/6.png",
    title: "Cardio Workout",
  },
  {
    id: 7,
    url: "/images/landingPage/7.png",
    title: "Martial Arts",
  },
  {
    id: 8,
    url: "/images/landingPage/8.png",
    title: "Pilates",
  },
  {
    id: 9,
    url: "/images/landingPage/9.png",
    title: "Strength Training",
  },
  {
    id: 10,
    url: "/images/landingPage/10.png",
    title: "Functional Fitness",
  },
];
const HomePage = () => {

  const {
    data: homeSectionData,
    error: errorHomeSectionData,
    isLoading: loadingHomeSectionData
  } = useSWR(
    `${envConfig.apiUrl}home`,
    fetcher
  );
  console.log("object", homeSectionData);


  return (
    <div>
      <MainTemplate>
        <div className=" bg-gradient-to-r from-black to-[rgb(26,26,81)]">
          <HeroSection slider={homeSectionData?.data?.slider} />
          {/* <HeroSectionTwo /> */}

          {/* Service Section */}
          <Section
            heading={"Our Services"}
            subHeading={
              "Discover our comprehensive range of solutions designed to help your business thrive in the digital age"
            }
            className={"bg-gray-100"}
          >
            <ServicesSection data={services} />
          </Section>
          {/* Service Section */}
          <Section
            heading={"Our Happy Clients"}
            className={"bg-white pb-12"}
          >
            <HappyCustomer />
          </Section>

          {/* Pricing Section */}
          <Section
            heading={"Affordable Pricing Based On Your Needs"}
            className={"bg-gray-100"}
          >
            <PricingSection pricingData={pricingData} />
          </Section>

          {/* Landing Page Section */}
          <Section
            heading={"20+ Done Landing Pages For You"}
            className={"bg-white"}
            subHeading={
              "Our “Done For You Templates” will allow you to start creating your pages in just minutes. We have used our best sales, marketing & conversion hacks on these pages to make them convert more. Just drag & drop your own content, add your branding and you are done."
            }
          >
            <LandingPageSection data={landingPageImage} />
          </Section>

          {/* Stats Section */}
          <Section
            heading={"Our Impact in Figures"}
            className={"bg-gray-100"}
          >
            <StatsSection />
          </Section>
          {/* Service Section */}
          <Section
            heading={"TESTIMONIALS"}
            className={"bg-white"}
          >
            <TestimonialsSection />
          </Section>
          {/* Faq Section */}
          <Section
            heading={"Frequently Asked Questions"}
            className={"bg-gray-100"}
          >
            <FaqSection />
          </Section>
        </div>
      </MainTemplate>
    </div>
  );
};

export default HomePage;
