import { FaShoppingCart, FaHeart } from "react-icons/fa";
import BadgeTwo from "../Badge/BadgeTwo";
import ProductImage from "../../molecules/Product/ProductImage";
import Rating from "../Rating/Rating";
import PriceTagTwo from "../PriceTag/PriceTagTwo";

const ThemeTwoProductCard = ({ product }) => {
  const {
    name,
    mainPrice,
    discountedPrice,
    inStock,
    rating,
    mainImage,
    hoverImage,
  } = product;

  return (
    <div className="group relative w-full m-2 max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
      {/* Discount Tag */}
      {mainPrice !== discountedPrice && (
        <div className="absolute left-0 top-4 z-10">
          <div className="bg-red-500 px-4 py-1 text-sm font-bold text-white shadow-md">
            {Math.round(((mainPrice - discountedPrice) / mainPrice) * 100)}% OFF
          </div>
        </div>
      )}

      {/* Stock Badge */}
      <div className="absolute right-4 top-4 z-10">
        <BadgeTwo
          className={
            inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }
        >
          {inStock ? "In Stock" : "Out of Stock"}
        </BadgeTwo>
      </div>

      {/* Product Image */}
      <div className="relative">
        <ProductImage mainImage={mainImage} hoverImage={hoverImage} />

        {/* Quick Action Buttons */}
        <div className="absolute -bottom-20 opacity-0 left-0 right-0 flex justify-center gap-4 bg-gradient-to-t from-black/50 to-transparent p-6 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <button className="rounded-full bg-white p-3 text-gray-800 shadow-lg transition-transform hover:scale-110 hover:bg-blue-50 active:scale-95">
            <FaShoppingCart className="h-6 w-6" />
          </button>
          <button className="rounded-full bg-white p-3 text-gray-800 shadow-lg transition-transform hover:scale-110 hover:bg-red-50 active:scale-95">
            <FaHeart className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3 bg-white p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        </div>

        <PriceTagTwo mainPrice={mainPrice} discountedPrice={discountedPrice} />
        <Rating rating={rating} />

        {/* Action Buttons */}
        {/* <div className="flex gap-2 pt-2">
          <button className="flex-1 rounded-lg bg-blue-600 py-2.5 font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800">
            Add to Cart
          </button>
          <button className="flex-1 rounded-lg border-2 border-red-500 py-2.5 font-semibold text-red-500 transition-colors hover:bg-red-50 active:bg-red-100">
            Add to Favorites
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ThemeTwoProductCard;
