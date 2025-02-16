import ImageWText from "@/components/molecules/ImageWText/ImageWText";
import GridTemplate from "@/components/UI/GridTemplate/GridTemplate";

const LandingPageSection = ({ data }) => {
  return (
    <GridTemplate columns={5}>
      {data?.map((image, index) => (
        <ImageWText key={index} url={image?.url} title={image?.title} />
      ))}
    </GridTemplate>
  );
};

export default LandingPageSection;
