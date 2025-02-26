import React from 'react';
import Section from '../../templates/Section/Section';
import FaqSection from '../../organisms/FaqSection/FaqSection';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';

const FaqPage = () => {
    return (
        <div>
            <MainTemplate>
                <div className="mt-[80px]">
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

export default FaqPage;