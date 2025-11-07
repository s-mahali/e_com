import {ShoppingCart, Star } from "lucide-react";
import Button from "./Button";
import {type ProductCardProps } from "../index";

const getBadgeClasses = (badge: string) => {
  const baseClass =
    "absolute top-0 left-0 px-4 py-1 rounded-tl-sm  rounded-br-xl text-xs font-medium text-white";
  switch (badge.toLowerCase()) {
    case "hot":
      return `${baseClass} bg-[#F74B81]`;
    case "sale":
      return `${baseClass} bg-blue-500`;
    case "new":
      return `${baseClass} bg-green-500`;
    default:
      return `${baseClass} bg-orange-400`;
  }
};

const ProductCard = ({
  className = "",
  badge ,
  imageUrl,
  vendorName,
  basePrice,
  dcPrice,
  category,
  productTitle,
  rating,
  variant = 'default'
}: ProductCardProps) => {
  return (
    <div
      className={`relative w-full max-w-[320px] p-4 rounded-lg border border-border flex flex-col gap-3 group ${className} `}
    >
      <div className="w-full h-[200px] bg-card-bg rounded-lg overflow-hidden">
        {badge && <span className={getBadgeClasses(badge)}>{badge}</span>}
        <img
          src={imageUrl}
          alt={productTitle}
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
      </div>
     <div className="flex flex-col gap-2">
        <span className="text-sm text-text-tertiary">{category}</span>
         <h3 className="text-base font-medium text-text-secondary h-6 line-clamp-2">
        <a href="#" className="hover:text-primary transition-colors">
          {productTitle}
        </a>
      </h3>

      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 text-yellow-400"/>
        <span className="text-sm text-text-tertiary">({rating})</span>
      </div>
      <span className="text-sm text-text-tertiary">
          By <a href="#" className="text-primary hover:underline">{vendorName}</a>
        </span>
     </div>
     <div className="mt-auto pt-2">
       {
        variant === 'default' ? (
           <div className="flex justify-between items-center">
             <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-[#3BB77E]">
                ${dcPrice.toFixed(2)}
              </span>
              <span className="text-sm text-text-tertiary line-through">
                ${basePrice.toFixed(2)}
              </span>
            </div>
            <Button title="Add" icon={<ShoppingCart className="w-4 h-4"/>} onClick={(e) => {e.stopPropagation(); console.log("hello")}}/>
           </div>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="flex items-baseline gap-2 mb-10">
              <span className="text-lg font-bold text-[#3BB77E]">
                ${dcPrice.toFixed(2)}
              </span>
              <span className="text-sm text-text-tertiary line-through">
                ${basePrice.toFixed(2)}
              </span>
            </div>
           
            <Button
              title="Add To Cart"
              className="w-full" 
              
            />
          </div>
          
        )
       }
        
     </div>
    </div>
  );
};

export default ProductCard;
