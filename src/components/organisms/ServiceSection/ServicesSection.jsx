import CardIcon from "@/components/atoms/Images/CardIcon";
import CardDescription from "@/components/atoms/Text/CardDescription";
import CardTitle from "@/components/atoms/Text/CardTitle";
import CardWithHoverBG from "@/components/molecules/CardWithHoverBG/CardWithHoverBG";
import GridTemplate from "@/components/UI/GridTemplate/GridTemplate";

const ServicesSection = ({ data }) => {
  return (
    <GridTemplate columns={3}>
      {data?.map((item, index) => (
        <CardWithHoverBG key={index} item={item}>
          <CardIcon imageUrl={item?.imageUrl} alt={item?.title} />
          <CardTitle title={item?.title} />
          <CardDescription description={item?.description} />
        </CardWithHoverBG>
      ))}
    </GridTemplate>
  );
};

export default ServicesSection;
