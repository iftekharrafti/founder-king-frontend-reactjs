import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import ThemeOneMainTemplate from '../../templates/ThemeOneMainTemplate/ThemeOneMainTemplate';
import ThemeOneHeroSection from '../../organisms/ThemeOneHeroSection/ThemeOneHeroSection';
import ThemeOneProductCategory from '../../organisms/ThemeOneProductCategory/ThemeOneProductCategory';

const ThemeOne = () => {
    return (
        <div>
            <ThemeOneMainTemplate>
                <ThemeOneHeroSection />
                <ThemeOneProductCategory />
            </ThemeOneMainTemplate>
        </div>
    );
};

export default ThemeOne;