import React from 'react';

const CheckoutSummaryItem = ({ label, value }) => {
    return (
        <div className="flex justify-between items-center py-3 text-white">
            <span>{label}</span>
            <span className="font-semibold">{value}</span>
        </div>
    );
};

export default CheckoutSummaryItem;