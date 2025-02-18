import ContactInfo from '@/components/molecules/ContactInfo/ContactInfo';
import FooterLinkGroup from '@/components/molecules/FooterLinkGroup/FooterLinkGroup';
import SocialLinks from '@/components/molecules/SocialLinks/SocialLinks';
import GridTemplate from '@/components/UI/GridTemplate/GridTemplate';
import React from 'react';

const Footer = () => {
    const featureLinks = [
        { text: 'Website Theme', href: '#' },
        { text: 'Website Builder', href: '#' },
        { text: 'Landing Page', href: '#' },
        { text: 'Roadmap', href: '#' },
    ];

    const aboutLinks = [
        { text: 'About Us', href: '/about-us' },
        { text: 'Terms & Conditions', href: '/terms-condition' },
        { text: 'Privacy Policy', href: '/privacy-policy' },
        { text: 'Contact', href: '/contact-us' },
        { text: 'FAQ', href: '/faq' },
    ];

    return (
        <footer className="bg-gray-50 md:py-16 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <GridTemplate columns={4}>
                    <ContactInfo />
                    <FooterLinkGroup title="FEATURE" links={featureLinks} />
                    <FooterLinkGroup title="ABOUT" links={aboutLinks} />
                    <SocialLinks />
                </GridTemplate>

                <div className="md:mt-6 mt-4 md:pt-6 pt-4 border-t border-gray-200 text-center text-gray-600">
                    <p>
                        Copyright 2025 {' '}
                        <a
                            href="#"
                            className="text-primary hover:text-primary_hover transition-colors duration-300"
                        >
                            Founder King
                        </a>
                        {' '} | All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;