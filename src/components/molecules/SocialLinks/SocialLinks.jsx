import FooterHeading from '@/components/atoms/FooterHeading/FooterHeading';
import SocialIcon from '@/components/atoms/SocialIcon/SocialIcon';
import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="space-y-4">
      <FooterHeading>STAY CONNECTED</FooterHeading>
      <div className="flex space-x-3">
        <SocialIcon href="https://facebook.com">
          <FaFacebookF className="text-lg" />
        </SocialIcon>
        <SocialIcon href="https://instagram.com">
          <FaInstagram className="text-lg" />
        </SocialIcon>
        <SocialIcon href="https://whatsapp.com">
          <FaWhatsapp className="text-lg" />
        </SocialIcon>
        <SocialIcon href="https://youtube.com">
          <FaYoutube className="text-lg" />
        </SocialIcon>
      </div>
    </div>
  );
};

export default SocialLinks;