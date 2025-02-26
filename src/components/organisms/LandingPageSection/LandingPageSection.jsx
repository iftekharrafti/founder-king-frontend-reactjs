import React from "react";

const solutions = [
  {
    id: 1,
    title: "Analytics Data Warehouse Solution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "https://placehold.co/300x200",
  },
  {
    id: 2,
    title: "Application Data Processing Solution",
    description:
      "Duis at tellus at libero consequat sagittis et sit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://placehold.co/300x200",
  },
  {
    id: 3,
    title: "Leads Performance Vectorization",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Maecenas eutellus sapien eu arcu convallis, vitae vestibulum ipsum maximus.",
    image: "https://placehold.co/300x200",
  },
];

function LandingPageSection({ data }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Build Your Customizable Landing Page
          </h1>
        </div>

        <div className="space-y-8 md:space-y-12">
          {data?.map((solution) => (
            <div
              key={solution.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-48 w-full object-cover md:h-full"
                  />
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                  >
                    View details
                    <svg
                      className="ml-2 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPageSection;
