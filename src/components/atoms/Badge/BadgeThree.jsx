import { HiArrowRight } from "react-icons/hi";

const BadgeThree = () => {
  return (
    <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-full transform rotate-12 transition-all duration-300 group-hover:rotate-0 group-hover:scale-110">
      <HiArrowRight className="w-5 h-5 text-white" />
    </div>
  );
};

export default BadgeThree;
