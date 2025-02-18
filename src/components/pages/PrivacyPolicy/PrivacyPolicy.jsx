import React from 'react';
import { FaLock, FaShieldAlt, FaUserSecret } from 'react-icons/fa';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import PolicySection from '../../atoms/PolicySection/PolicySection';

const PrivacyPolicy = () => {
    const informationCollected = [
        'Personal identification information (Name, email address, phone number, etc.)',
        'Demographic information (Address, location)',
        'Payment information (Credit card details, bank account information)',
        'Usage data (Browser type, IP address, time spent on site)',
    ];

    const informationUsage = [
        'To process and manage your orders',
        'To improve our website and services',
        'To send periodic emails and updates',
        'To respond to your inquiries and support requests',
    ];

    const dataProtection = [
        'Regular security assessments and updates',
        'Encryption of sensitive data',
        'Limited access to personal information',
        'Regular staff training on data protection',
    ];
    return (
        <MainTemplate>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                {/* Hero Section */}
                <section className="relative py-20 px-4 bg-gradient-to-r from-primary to-primary_hover">
                    <div className="max-w-7xl mx-auto text-center text-white">
                        <h1 className="text-5xl font-bold mb-6 animate-float">Privacy Policy</h1>
                        <p className="text-xl max-w-3xl mx-auto text-blue-100">
                            Your privacy is important to us. This policy outlines how we collect, use,
                            and protect your personal information.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-8">
                        {/* Introduction */}
                        <PolicySection title="Introduction">
                            <p>
                                At Founder King, we take your privacy seriously. This Privacy Policy explains
                                how we collect, use, disclose, and safeguard your information when you visit
                                our website or use our services. Please read this privacy policy carefully.
                            </p>
                            <p>
                                We reserve the right to make changes to this Privacy Policy at any time and
                                for any reason. We will alert you about any changes by updating the "Last
                                updated" date of this Privacy Policy.
                            </p>
                        </PolicySection>

                        {/* Information We Collect */}
                        <PolicySection title="Information We Collect">
                            <p>
                                We collect information that you voluntarily provide to us when you register
                                on our website, express interest in obtaining information about us or our
                                products and services, or otherwise contact us.
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                {informationCollected.map((item, index) => (
                                    <li key={index} className="text-gray-600">{item}</li>
                                ))}
                            </ul>
                        </PolicySection>

                        {/* How We Use Your Information */}
                        <PolicySection title="How We Use Your Information">
                            <p>
                                We use the information we collect in various ways, including to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                {informationUsage.map((item, index) => (
                                    <li key={index} className="text-gray-600">{item}</li>
                                ))}
                            </ul>
                        </PolicySection>

                        {/* Data Protection */}
                        <PolicySection title="Data Protection">
                            <p>
                                We have implemented appropriate technical and organizational security
                                measures designed to protect the security of any personal information
                                we process. However, despite our safeguards and efforts to secure your
                                information, no electronic transmission over the Internet or information
                                storage technology can be guaranteed to be 100% secure.
                            </p>
                            <p className="mt-4">Our security measures include:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                {dataProtection.map((item, index) => (
                                    <li key={index} className="text-gray-600">{item}</li>
                                ))}
                            </ul>
                        </PolicySection>

                        {/* Cookies */}
                        <PolicySection title="Cookies and Web Beacons">
                            <p>
                                We may use cookies, web beacons, tracking pixels, and other tracking
                                technologies on our website to help customize and improve your experience.
                                When you access our website, your personal information is not collected
                                through the use of tracking technology.
                            </p>
                            <p className="mt-4">
                                Most browsers are set to accept cookies by default. You can remove or
                                reject cookies, but be aware that such action could affect the availability
                                and functionality of our website.
                            </p>
                        </PolicySection>

                        {/* Contact Us */}
                        <PolicySection title="Contact Us">
                            <p>
                                If you have questions or comments about this Privacy Policy, please contact us at:
                            </p>
                            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                <p className="font-semibold text-blue-800">Founder King</p>
                                <p>House No # 17, Road No # 8/A,</p>
                                <p>Nikunja #1, Dhaka - 1229,</p>
                                <p>Bangladesh</p>
                                <p className="mt-2">Email: support@founderking.com</p>
                                <p>Phone: +880 962-381-7531</p>
                            </div>
                        </PolicySection>

                        {/* Last Updated */}
                        <div className="text-sm text-gray-500 pt-8 border-t">
                            Last updated: February 15, 2024
                        </div>
                    </div>
                </div>
            </div>
        </MainTemplate>
    );
};

export default PrivacyPolicy;