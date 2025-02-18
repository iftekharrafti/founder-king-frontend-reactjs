import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import OurStory from '../../molecules/OurStory/OurStory';
import OurValues from '../../molecules/OurValues/OurValues';
import OurTeam from '../../molecules/OurTeam/OurTeam';
import Section from '../../templates/Section/Section';

const AboutUs = () => {
    return (
        <div>
            <MainTemplate>
                <div className="min-h-screen bg-white">
                    {/* Hero Section */}
                    <section className="relative py-20 px-4 bg-gradient-to-r from-indigo-500 to-purple-600">
                        <div className="max-w-7xl mx-auto text-center text-white">
                            <h1 className="text-5xl font-bold mb-6 animate-float">About Founder King</h1>
                            <p className="text-xl max-w-3xl mx-auto text-indigo-100">
                                We're on a mission to revolutionize e-commerce in Bangladesh by providing
                                innovative solutions that empower businesses to thrive in the digital age.
                            </p>
                        </div>
                    </section>

                    {/* Main Content */}
                    <div className="max-w-7xl mx-auto px-4">
                        <Section
                            heading={"Our Journey"}
                            className={""}
                        >
                            <OurStory />
                        </Section>
                        <Section
                            heading={"Our Core Values"}
                            className={""}
                        >
                            <OurValues />
                        </Section>
                        
                        <OurTeam />
                    </div>
                </div>
            </MainTemplate>
        </div>
    );
};

export default AboutUs;