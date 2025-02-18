import React from 'react';
import ContactForm from '../../molecules/ContactForm/ContactForm';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import ContactPageInfo from '../../molecules/ContactPageInfo/ContactPageInfo';
import Section from '../../templates/Section/Section';

const ContactUs = () => {
    return (
        <MainTemplate>
            <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
                {/* Hero Section */}
                <section className="relative py-20 px-4 bg-gradient-to-r from-primary to-primary_hover">
                    <div className="max-w-7xl mx-auto text-center text-white">
                        <h1 className="text-5xl font-bold mb-6 animate-float">Get in Touch</h1>
                        <p className="text-xl max-w-3xl mx-auto text-teal-100">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary
            to-primary_hover bg-clip-text text-transparent">
                                Send Us a Message
                            </h2>
                            <ContactForm />

                        </div>

                        {/* Contact Information */}
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary 
            to-primary_hover bg-clip-text text-transparent">
                                Contact Information
                            </h2>
                            <ContactPageInfo />

                            {/* Map */}
                            <div className="mt-8 rounded-xl overflow-hidden shadow-lg h-[300px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5983460988937!2d90.4195536!3d23.8276011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65e78f2c82f%3A0x93c6f676c8ad2d84!2sNikunja%201%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1675159088"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainTemplate>
    );
};

export default ContactUs;