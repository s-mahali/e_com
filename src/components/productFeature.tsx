import Button from "./Button";
import { type ProductFeatureCardProps } from "../index";
import { ShoppingCart, Star } from "lucide-react";

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
    <span className="text-sm text-gray-500">({rating})</span>
  </div>
);

const ProductFeatureCard = ({
  title,
  imageUrl,
  className = "",
  rating,
  vendorName,
  dcPrice,
  basePrice,
}: ProductFeatureCardProps) => {
  return (
    <div
      className={`flex flex-col max-w-[320px] rounded-2xl border border-gray-200 shadow-md overflow-hidden bg-white mx-auto ${className}`}
    >
      {/* Product image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[180px] object-cover"
      />

      {/* Product details */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-800 leading-tight">
          {title}
        </h3>
        <Rating rating={rating} />
        <span className="text-xs text-gray-400">By {vendorName}</span>

        {/* Price and button */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-[#3BB77E]">
              ${dcPrice.toFixed(2)}
            </span>
            <span className="text-sm text-gray-400 line-through">
              ${basePrice.toFixed(2)}
            </span>
          </div>

          <Button
            title="Add"
            icon={<ShoppingCart className="w-4 h-4" />}
            
          />
        </div>
      </div>
    </div>
  );
};

export default ProductFeatureCard;
