import Badge from "@/components/atoms/Badge/Badge";
import FeatureItem from "@/components/atoms/FeatureItem/FeatureItem";
import PriceTag from "@/components/atoms/PriceTag/PriceTag";
import Card from "@/components/molecules/Card/Card";
import GridTemplate from "@/components/UI/GridTemplate/GridTemplate";
import React from "react";

const PricingSection = ({ pricingData }) => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        <GridTemplate columns={3}>
          {pricingData?.map((plan, index) => (
            <Card key={index}>
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {plan?.title}
                    </h3>
                    {plan?.badge && <Badge text={plan?.badge} />}
                  </div>
                  <PriceTag
                    price={plan?.price}
                    originalPrice={plan?.originalPrice}
                  />
                </div>
                {/* Features List */}
                <div className="space-y-2 pt-6 border-t">
                  {plan?.features?.map((feature, index) => (
                    <FeatureItem
                      key={index}
                      text={feature?.text}
                      included={feature?.included}
                    />
                  ))}
                </div>
                {/* Button */}
                <button
                  className="w-full py-3 px-6 bg-gradient-to-r from-primary to-primary_hover
        text-white rounded-lg font-semibold transition-all duration-300 
        hover:from-primary hover:to-pink-700 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
                >
                  {plan?.buttonText}
                </button>
              </div>
            </Card>
          ))}
        </GridTemplate>
      </div>
    </section>
  );
};

export default PricingSection;
