import { useState } from "react";
import Spinner from "../../UI/Spinner/Spinner";

function PricingSectionTwo({ data, pricingData, loadingPackagesData }) {
  console.log("pricing:::", data);
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPackages = data?.filter((item) => item.type === "monthly");
  const yearlyPackages = data?.filter((item) => item.type === "yearly");

  if (loadingPackagesData) {
    return (
      <div className="flex justify-center items-center h-96">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {pricingData?.title}
          </h2>
          <p className="mt-3 text-2xl text-gray-500 font-bold">
            {pricingData?.content}
          </p>
          <p className="text-black text-xl font-light mt-2">
            {pricingData?.plain_text}{" "}
            <span className="bg-global-primary text-white px-2 py-1 rounded">
              {pricingData?.highlight_text}
            </span>
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="relative flex bg-transparent border-2 border-gray-400 rounded-lg">
            <button
              className={`px-4 py-1 rounded-md ${!isYearly ? "bg-blue-600 shadow-sm text-white" : ""
                }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-1 rounded-md ${isYearly ? "bg-blue-600 shadow-sm text-white" : ""
                }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {isYearly ? yearlyPackages?.map((plan, index) => (
            <div
              key={plan.id}
              className="relative flex flex-col rounded-2xl bg-white shadow-lg overflow-hidden h-full"
            >
              {!!plan?.is_popular && (
                <div className="absolute -left-[5.5rem] top-[1rem] w-[243px] transform -rotate-45 z-10">
                  <div className="py-1 text-center text-white font-semibold bg-black shadow-lg relative">
                    <span className="text-sm">Popular Plan</span>
                    <div className="absolute top-0 -right-4 h-full w-4 bg-black skew-x-[25deg] origin-top"></div>
                    <div className="absolute top-0 -left-4 h-full w-4 bg-black -skew-x-[25deg] origin-top"></div>
                    <div className="absolute -left-3 -bottom-1 w-3 h-3 bg-black/80 transform rotate-45"></div>
                    <div className="absolute -right-3 -bottom-1 w-3 h-3 bg-black/80 transform rotate-45"></div>
                  </div>
                </div>
              )}
              {/* <div className={`${plan.color} h-2`} /> */}
              <div className="pb-6 pt-2 px-6 flex flex-col flex-grow z-10">
                <div className="flex-grow">
                  <h3 className="text-3xl font-semibold text-white text-center">
                    {plan.name}
                  </h3>
                  <div className="flex gap-2 justify-center">
                    <p className="text-white text-center">৳ {plan.price}</p>
                    {
                      plan?.old_price && <p className="text-white text-center line-through">৳ {plan.old_price}</p>
                    }
                  </div>
                  <ul className="mt-32 sm:mt-24 md:mt-32 md:ml-12 lg:ml-0 lg:mt-6 space-y-2">
                    {/* <ul className="mt-32 sm:mt-40 md:mt-60 md:ml-12 lg:ml-0 lg:mt-6 space-y-2"> */}
                    {plan?.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-green-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3 text-gray-500">
                          {feature?.feature_text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`mt-8 w-full rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm bg-global-primary hover:opacity-90`}
                >
                  Order Now
                </button>
              </div>

              <div className="absolute xs:top-[-50px] sm:top-[-80px] md:top-[-15px] lg:top-0 z-0">
                {/* <div className={`mask-demo ${plan.color}`}> */}
                <div className={`mask-demo bg-orange-500`}>
                  <img
                    src="images\price_bg.png"
                    alt="Description"
                    className="w-full h-auto rounded opacity-0"
                  />
                </div>
              </div>
            </div>
          )) : monthlyPackages?.map((plan, index) => (
            <div
              key={plan.id}
              className="relative flex flex-col rounded-2xl bg-white shadow-lg overflow-hidden h-full"
            >
              {!!plan?.is_popular && (
                <div className="absolute -left-[5.5rem] top-[1rem] w-[243px] transform -rotate-45 z-10">
                  <div className="py-1 text-center text-white font-semibold bg-black shadow-lg relative">
                    <span className="text-sm">Popular Plan</span>
                    <div className="absolute top-0 -right-4 h-full w-4 bg-black skew-x-[25deg] origin-top"></div>
                    <div className="absolute top-0 -left-4 h-full w-4 bg-black -skew-x-[25deg] origin-top"></div>
                    <div className="absolute -left-3 -bottom-1 w-3 h-3 bg-black/80 transform rotate-45"></div>
                    <div className="absolute -right-3 -bottom-1 w-3 h-3 bg-black/80 transform rotate-45"></div>
                  </div>
                </div>
              )}
              {/* <div className={`${plan.color} h-2`} /> */}
              <div className="pb-6 pt-2 px-6 flex flex-col flex-grow z-10">
                <div className="flex-grow">
                  <h3 className="text-3xl font-semibold text-white text-center">
                    {plan.name}
                  </h3>
                  <p className="text-white text-center">৳ {plan.price}</p>
                  <ul className="mt-32 sm:mt-24 md:mt-32 md:ml-12 lg:ml-0 lg:mt-6 space-y-2">
                    {/* <ul className="mt-32 sm:mt-40 md:mt-60 md:ml-12 lg:ml-0 lg:mt-6 space-y-2"> */}
                    {plan?.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-green-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3 text-gray-500">
                          {feature?.feature_text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`mt-8 w-full rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm bg-global-primary hover:opacity-90`}
                >
                  Order Now
                </button>
              </div>

              <div className="absolute xs:top-[-50px] sm:top-[-80px] md:top-[-15px] lg:top-0 z-0">
                {/* <div className={`mask-demo ${plan.color}`}> */}
                <div className={`mask-demo bg-orange-500`}>
                  <img
                    src="images\price_bg.png"
                    alt="Description"
                    className="w-full h-auto rounded opacity-0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 relative lg:mx-20">
          <div className="bg-orange-500 rounded-xl p-8 text-center md:text-left  md:flex justify-between items-center relative overflow-hidden">
            <div className="text-white max-w-xl">
              <p className="text-2xl font-medium lg:ml-32 mb-2">
                {pricingData?.banner_text}
              </p>
            </div>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold relative group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-2">
                <div>
                  <span className="block text-lg">Call Now</span>
                  <span className="block text-sm text-gray-600">
                    For Information
                  </span>
                </div>
                <svg
                  className="w-6 h-6 animate-arrow-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSectionTwo;
