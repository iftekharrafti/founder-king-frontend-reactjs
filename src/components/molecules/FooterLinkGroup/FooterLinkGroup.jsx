import FooterHeading from '@/components/atoms/FooterHeading/FooterHeading';
import FooterLink from '@/components/atoms/FooterLink/FooterLink';
import React from 'react';

const FooterLinkGroup = ({ title, links }) => {
  return (
    <div className="space-y-2">
      <FooterHeading>{title}</FooterHeading>
      <div className="flex flex-col space-y-2">
        {links?.map((link, index) => (
          <FooterLink key={index} href={link.href}>
            {link.text}
          </FooterLink>
        ))}
      </div>
    </div>
  );
};

export default FooterLinkGroup;