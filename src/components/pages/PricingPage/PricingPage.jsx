import React from 'react';
import Section from '../../templates/Section/Section';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import PricingSection from '../../organisms/PricingSection/PricingSection';

const PricingPage = () => {
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
        },
    ];
    return (
        <div>
            <MainTemplate>
                {/* Pricing Section */}
                <Section
                    heading={"Affordable Pricing Based On Your Needs"}
                    className={"bg-gray-100"}
                >
                    <PricingSection pricingData={pricingData} />
                </Section>
            </MainTemplate>
        </div>
    );
};

export default PricingPage;