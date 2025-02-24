import React from "react";
import VideoPlayer from "@/components/molecules/VideoPlayer/VideoPlayer";
import PrimaryButton from "@/components/atoms/Buttons/PrimaryButton";
import GridTemplate from "@/components/UI/GridTemplate/GridTemplate";
import Heading from "@/components/atoms/Text/Heading";

const HeroSection = ({ slider }) => {
  return (
    <section className={`bg-${slider?.bg_color} text-white py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <GridTemplate columns={2} className="items-center">
          <div className="space-y-8 animate-float">
            <Heading
              type="main"
              className="md:text-[32px] text-24px md:leading-[45px] leading-[32px] text-global-primary"
            >
              {slider?.title} <span className="text-[#00ff00]">{slider?.title_end}</span>
            </Heading>
            <Heading
              type="sub"
              className="md:text-[26px] text-[20px] font-semibold mt-8 text-gray-300"
            >
              All Without Coding!
            </Heading>
          </div>

          <div>
            <VideoPlayer videoId={slider?.video_url} />
          </div>
          {/* </div> */}
        </GridTemplate>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {slider?.button_details}
          </p>
          <PrimaryButton className="md:text-[24px] text-lg font-semibold" link={slider?.button_url}>
            {slider?.button_text}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
