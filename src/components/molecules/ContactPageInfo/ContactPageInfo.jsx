import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import Card from '../Card/Card';

const ContactPageInfo = () => {
    const contactDetails = [
        {
            icon: FaMapMarkerAlt,
            title: 'Our Location',
            content: 'House No # 2, Road No # 25, Lake Circus, Kalabagan, Dhaka - 1229, Bangladesh',
            className: 'border-l-4 border-teal-500'
        },
        {
            icon: FaPhone,
            title: 'Phone Number',
            content: '+880 963-232-7655',
            className: 'border-l-4 border-emerald-500'
        },
        {
            icon: FaEnvelope,
            title: 'Email Address',
            content: 'support@founderking.com',
            className: 'border-l-4 border-cyan-500'
        },
        {
            icon: FaClock,
            title: 'Working Hours',
            content: 'Monday - Friday: 9:00 AM - 6:00 PM',
            className: 'border-l-4 border-blue-500'
        }
    ];

    return (
        <div className="grid sm:grid-cols-2 gap-6">
            {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                    <Card className="border-l-4 border-primary border-0">
                        <div className="text-3xl mb-4">
                            <Icon />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{detail?.title}</h3>
                        <p className="text-gray-600">{detail?.content}</p>
                    </Card>
                )
            })}
        </div>
    );
};

export default ContactPageInfo;