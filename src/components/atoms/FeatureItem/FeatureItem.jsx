import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const FeatureItem = ({ text, included }) => {
    return (
        <div className="flex items-center gap-2 py-2">
            {included ? (
                <FaCheck className="text-green-500 flex-shrink-0" />
            ) : (
                <FaTimes className="text-rose-500 flex-shrink-0" />
            )}
            <span className="text-gray-600">{text}</span>
        </div>
    );
};

export default FeatureItem;