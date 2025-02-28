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
import { fetcher } from "../../../utils/SWRFetcher/SWRFetcher";
import useSWR from "swr";
import envConfig from "../../../../envconfig";
import { HelmetProvider } from "react-helmet-async";
import MetaTags from "../../../utils/MetaTags/MetaTags";
import { useGeneralSettings } from "../../../context/generalSettingsContext";
import FounderTestimonial from "../../organisms/FounderTestimonial/FounderTestimonial";
import Newsletter from "../../organisms/Newsletter/Newsletter";
import PricingSectionTwo from "../../organisms/PricingSection/PricingSectionTwo";

// Service Data
const services = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format",
    title: "Customizable Landing pages",
    description:
      "Creating modern, responsive websites using the latest technologies and best practices for optimal user experience.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500&auto=format",
    title: "Ecommerce Website",
    description:
      "Developing native and cross-platform mobile applications that deliver seamless experiences across all devices.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format",
    title: "ABD Hosting",
    description:
      "Crafting intuitive and beautiful user interfaces that enhance user engagement and satisfaction.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format",
    title: "SMS Marketing",
    description:
      "Implementing scalable cloud infrastructure and services to power your digital transformation journey.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format",
    title: "Video Content",
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
    name: "Starter",
    price: "$10/Month",
    color: "bg-violet-500",
    features: [
      "Incomplete Order tracking",
      "Customizable Landing pages",
      "One click course upload system",
    ],
  },
  {
    name: "Growth",
    price: "$100/Month",
    color: "bg-blue-600",
    features: [
      "Incomplete Order tracking",
      "Customizable Landing pages",
      "One click course upload system",
      "One click course upload system",
    ],
  },
  {
    name: "Premium",
    price: "$200/Month",
    color: "bg-orange-400",
    isPopular: true,
    features: [
      "Incomplete Order tracking",
      "Customizable Landing pages",
      "One click course upload system",
      "One click course upload system",
      "One click course upload system",
    ],
  },
  {
    name: "Enterprise",
    price: "Contact us",
    color: "bg-orange-500",
    features: [
      "Incomplete Order tracking",
      "Customizable Landing pages",
      "One click course upload system",
      "One click course upload system",
      "One click course upload system",
      "One click course upload system",
    ],
  },
];

const solutions = [
  {
    id: 1,
    title: "Analytics Data Warehouse Solution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "https://placehold.co/300x200",
  },
  {
    id: 2,
    title: "Application Data Processing Solution",
    description:
      "Duis at tellus at libero consequat sagittis et sit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://placehold.co/300x200",
  },
  {
    id: 3,
    title: "Leads Performance Vectorization",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Maecenas eutellus sapien eu arcu convallis, vitae vestibulum ipsum maximus.",
    image: "https://placehold.co/300x200",
  },
];
const HomePage = () => {
  const { generalSettings, errorGeneralSettings, isLoadingGeneralSettings } =
    useGeneralSettings();

  const {
    data: homeSectionData,
    error: errorHomeSectionData,
    isLoading: loadingHomeSectionData,
  } = useSWR(`${envConfig.apiUrl}home`, fetcher);

  console.log("object", generalSettings);

  return (
    <div>
      <MainTemplate>
        <HelmetProvider>
          <MetaTags
            title={generalSettings?.data?.name}
            description={generalSettings?.data?.meta_description}
            keywords={generalSettings?.data?.meta_keywords}
            favicon={generalSettings?.data?.favicon}
            image={generalSettings?.data?.logo}
          />
          <div>
            <div className="bg-global-primary">
              <HeroSection slider={homeSectionData?.data?.slider} />
            </div>
            {/* <HeroSectionTwo /> */}
            {/* Pricing Section */}

            <PricingSectionTwo data={homeSectionData?.data?.packages} />

            {/* Service Section */}
            <ServicesSection data={homeSectionData?.data?.services} />

            {/* Landing Page Section */}

            <LandingPageSection data={homeSectionData?.data?.landingpages} />

            {/* Service Section */}
            <Section
              heading={"Our Happy Clients"}
              className={"bg-global-primary pb-12"}
            >
              <HappyCustomer clients={homeSectionData?.data?.clients} />
            </Section>

            {/* Testimonial Section */}
            <FounderTestimonial founders={homeSectionData?.data?.testimonials} />
            <Newsletter />

            {/* Stats Section */}
            {/* <Section
              heading={"Our Impact in Figures"}
              className={"bg-gray-100"}
            >
              <StatsSection />
            </Section> */}
            {/* Service Section */}
            {/* <Section heading={"TESTIMONIALS"} className={"bg-white"}>
              <TestimonialsSection />
            </Section> */}
            {/* Faq Section */}
            {/* <Section
              heading={"Frequently Asked Questions"}
              className={"bg-gray-100"}
            >
              <FaqSection />
            </Section> */}
          </div>
        </HelmetProvider>
      </MainTemplate>
    </div>
  );
};

export default HomePage;
