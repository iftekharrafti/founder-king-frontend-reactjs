import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../atoms/Images/Image';
import Typography from '../../atoms/Typography/Typography';


const ThemeSixProductCategoryCard = ({ category }) => {
    return (
        <div>
            <div className="flex flex-col items-center p-4 hover:animate-float cursor-pointer">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden transform transition-transform hover:scale-105">
                    <Link to={`/category`}>
                        <Image src={category?.image} alt={category?.title} className="w-full h-full object-cover" />
                    </Link>
                </div>
                <Typography variant='h2'>
                    <Link to={`/category`}>
                        {category?.title}
                    </Link>
                </Typography>
            </div>

        </div>
    );
};

export default ThemeSixProductCategoryCard;