import FooterHeading from '@/components/atoms/FooterHeading/FooterHeading';
import React from 'react';

const ContactInfo = () => {
    return (
        <div className="space-y-2">
            <FooterHeading>CONTACT US</FooterHeading>
            <div className="space-y-2 text-gray-600">
                <p>0963-888-8881</p>
                <p>support@founderking.com</p>
                <div className="mt-4">
                    <p className="font-semibold">Corporate Office</p>
                    <p>House No # 25</p>
                    <p>Lake-circus, Kalabagan, Dhaka - 1229,</p>
                    <p>Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;