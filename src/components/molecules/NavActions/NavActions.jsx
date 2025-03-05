import React from 'react';
import ProfileButton from '../../atoms/ProfileButton/ProfileButton';
import WishlistButton from '../../atoms/WishlistButton/WishlistButton';
import CartButton from '../../atoms/CartButton/CartButton';

const NavActions = ({ profile = true, wishlist = true, cart = true }) => {
  return (
    <div className="flex items-center space-x-2">
      {
        profile && <ProfileButton />
      }
      {
        wishlist && <WishlistButton count={2} />
      }
      {
        cart && <CartButton count={3} />
      }
    </div>
  );
};

export default NavActions;