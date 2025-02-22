import React from 'react';
import ProfileButton from '../../atoms/ProfileButton/ProfileButton';
import WishlistButton from '../../atoms/WishlistButton/WishlistButton';
import CartButton from '../../atoms/CartButton/CartButton';

const NavActions = () => {
  return (
    <div className="flex items-center space-x-2">
      <ProfileButton />
      <WishlistButton count={2} />
      <CartButton count={3} />
    </div>
  );
};

export default NavActions;