import CardIcon from "@/components/atoms/Images/CardIcon";
import CardDescription from "@/components/atoms/Text/CardDescription";
import CardTitle from "@/components/atoms/Text/CardTitle";
import CardWithHoverBG from "@/components/molecules/CardWithHoverBG/CardWithHoverBG";
import GridTemplate from "@/components/UI/GridTemplate/GridTemplate";

const ServicesSection = ({ data, serviceData }) => {
  return (
    <div className="bg-[#5038ED] flex flex-col items-center justify-center">
      <div className="container mx-auto p-4 ">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {serviceData?.title}
            <div className="h-0.5 bg-white mt-2"></div>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {serviceData?.content}
          </p>
        </div>
        <GridTemplate columns={3}>
          {data?.map((item, index) => (
            <CardWithHoverBG key={index} item={item}>
              <CardIcon imageUrl={item?.image} alt={item?.name} />
              <CardTitle title={item?.name} />
              <CardDescription description={item?.description} />
            </CardWithHoverBG>
          ))}
        </GridTemplate>
      </div>
    </div>
  );
};

export default ServicesSection;
