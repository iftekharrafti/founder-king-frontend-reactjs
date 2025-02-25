import BadgeThree from "../../atoms/Badge/BadgeThree";
import Image from "../../atoms/Images/Image";
import Text from "../../atoms/Text/Text";
import CategoryInfo from "../../molecules/CategoryInfo/CategoryInfo";

const CategoryCard = ({ category }) => {
  const { name, imageUrl } = category;

  return (
    <div className="group relative w-full h-[250px] rounded-[2rem] cursor-pointer overflow-hidden perspective-1000">
      {/* Card Container with 3D effect */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:rotate-x-12 preserve-3d">
        {/* Image Container */}
        <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
          <Image
            src={imageUrl}
            alt={name}
            className="scale-110 transition-all duration-700 group-hover:scale-125"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent" />
          <div className="absolute -inset-1 border border-white/20 rounded-[2rem] backdrop-blur-sm" />
          <div className="absolute top-8 left-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <Text className="text-white/70 text-xs lg:text-sm uppercase tracking-widest">
                {name}
              </Text>
            </div>
          </div>
        </div>

        {/* Interactive Elements */}
        <BadgeThree />
        <CategoryInfo name={name} />
      </div>
    </div>
  );
};

export default CategoryCard;
