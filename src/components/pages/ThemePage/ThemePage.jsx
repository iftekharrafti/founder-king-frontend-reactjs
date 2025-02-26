import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Section from '../../templates/Section/Section';
import LandingPageSection from '../../organisms/LandingPageSection/LandingPageSection';

const ThemePage = () => {

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


    return (
        <div>
            <MainTemplate>
                {/* Landing Page Section */}
                <div className="mt-[80px]">
                    <Section
                        heading={"20+ Done Landing Pages For You"}
                        className={"bg-white"}
                        subHeading={
                            "Our “Done For You Templates” will allow you to start creating your pages in just minutes. We have used our best sales, marketing & conversion hacks on these pages to make them convert more. Just drag & drop your own content, add your branding and you are done."
                        }
                    >
                        <LandingPageSection data={landingPageImage} />
                    </Section>
                </div>
            </MainTemplate>
        </div>
    );
};

export default ThemePage;