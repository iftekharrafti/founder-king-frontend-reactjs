import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import ThemeOneMainTemplate from '../../templates/ThemeOneMainTemplate/ThemeOneMainTemplate';
import ThemeOneHeroSection from '../../organisms/ThemeOneHeroSection/ThemeOneHeroSection';

const ThemeOne = () => {
    return (
        <div>
            <ThemeOneMainTemplate>
                <ThemeOneHeroSection />
            </ThemeOneMainTemplate>
        </div>
    );
};

export default ThemeOne;