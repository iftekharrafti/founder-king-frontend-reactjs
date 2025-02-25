import Text from "../../atoms/Text/Text";

const CategoryInfo = ({ name }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
      <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 shadow-xl">
        <Text className="text-sm md:text-xl lg:text-2xl font-bold text-white tracking-wide">
          {name}
        </Text>
        <div className="mt-2 flex items-center gap-2">
          <div className="w-12 h-1 bg-white/50 rounded-full" />
          <Text className="text-white/70 text-sm">Explore Collection</Text>
        </div>
      </div>
    </div>
  );
};

export default CategoryInfo;
