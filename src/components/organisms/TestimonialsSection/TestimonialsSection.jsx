"use client";
import React from "react";
import SwiperSlider from "@/components/UI/SwiperSlider/SwiperSlider";
import { SwiperSlide } from "swiper/react";
import Card from "@/components/molecules/Card/Card";
import Heading from "@/components/atoms/Text/Heading";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "founderking.com.bd সম্পর্কে সবচেয়ে ভালো লিংক হব তাদের ব্যবসা-যুক্ত ওয়েবসাইট রূপান্তরকরণ। যে কোনো সময় কোনো সমস্যা হলে, তারা তা দ্রুত সমাধান করে, যা আমার ব্যবসাকে সুগঠভাবে চলতে দেয়।",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Saimur Rahman",
      company: "",
      rating: "5.0",
    },
    {
      text: "আপনাদের সার্ভিস ভালো, ভবিষ্যতে আরো সুন্দর সার্ভিস এবং নতুন কিছু আপডেট নিয়ে আমাদের ভালো কিছু উপহার দিবেন, এই প্রত্যাশা আপনাদের থেকে। দোয়া এবং ভালোবাসা রইলো আপনাদের প্রতি।",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "London Bazar BD",
      company: "",
      rating: "5.0",
    },
    {
      text: "founderking সাথে গত এক বছর কাজ করে আসছি, তাদের কাস্টমার সার্ভিস এবং সফটওয়্যার এক্সপেরিয়েন্স আমাকে স্যাটিসফাই করেছে, ইনশাআল্লাহ তারা এ ধারাবাহিকতা আগামী দিনেও ধরে রাখবে, এই প্রত্যাশা করি",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Ismail Hossain",
      company: "Urmi Shop - Founder",
      rating: "5.0",
    },
    {
      text: "founderking সাথে গত এক বছর কাজ করে আসছি, তাদের কাস্টমার সার্ভিস এবং সফটওয়্যার এক্সপেরিয়েন্স আমাকে স্যাটিসফাই করেছে, ইনশাআল্লাহ তারা এ ধারাবাহিকতা আগামী দিনেও ধরে রাখবে, এই প্রত্যাশা করি",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Ismail Hossain",
      company: "Urmi Shop - Founder",
      rating: "5.0",
    },
    {
      text: "founderking সাথে গত এক বছর কাজ করে আসছি, তাদের কাস্টমার সার্ভিস এবং সফটওয়্যার এক্সপেরিয়েন্স আমাকে স্যাটিসফাই করেছে, ইনশাআল্লাহ তারা এ ধারাবাহিকতা আগামী দিনেও ধরে রাখবে, এই প্রত্যাশা করি",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Ismail Hossain",
      company: "Urmi Shop - Founder",
      rating: "5.0",
    },
  ];

  return (
    <section className="md:py-4 py-0 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <SwiperSlider lg={3} md={2} sm={1}>
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card>
                  <div className="space-y-4">
                    <p className="text-gray-600 italic">{testimonial.text}</p>

                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <Heading type="sub">{testimonial.name}</Heading>
                        <p className="text-sm text-gray-500">
                          {testimonial.company}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <div className="flex items-center">
                          <span className="text-global-primary font-semibold">
                            {testimonial.rating}
                          </span>
                          <span className="text-global-primary ml-1">★</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </SwiperSlider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
