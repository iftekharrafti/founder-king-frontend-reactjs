import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProfileButton = () => {
    return (
        <Link to="/profile">
            <button className="p-2 text-gray-700 hover:text-orange-500 transition-colors duration-300">
                <FaUser className="text-2xl" />
            </button>
        </Link>
    );
};

export default ProfileButton;