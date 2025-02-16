import Heading from "@/components/atoms/Text/Heading";

const Section = ({ children, heading, subHeading, className }) => {
  return (
    <section className={`md:py-6 pt-4 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Heading className="mb-6 text-gray-800" type="main">
            {heading}
          </Heading>

          {subHeading && (
            <Heading
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              type="sub"
            >
              {subHeading}
            </Heading>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
