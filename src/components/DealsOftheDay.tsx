import { ChevronRight } from "lucide-react";
import banner1 from "../assets/banner-5.png";
import banner2 from "../assets/dealoftheday2.png";
import banner3 from "../assets/dealsoftheday3.png";
import ProductFeatureCard from "./productFeature";
const DealsOftheDay = () => {
  const ProductList = [
    {
      title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      rating: 4.0,
      vendorName: "NestFood",
      dcPrice: 32.85,
      basePrice: 33.8,
      imageUrl: banner1,
    },
     {
      title: "Perdue Simply Smart Organics Gluten Free",
      rating: 4.0,
      vendorName: "Old El Paso",
      dcPrice: 24.85,
      basePrice: 26.8,
      imageUrl: banner2,
    },
     {
      title: "Signature Wood-Fired Mushroom and Caramelized",
      rating: 3.0,
      vendorName: "Progresso",
      dcPrice: 12.85,
      basePrice: 13.8,
      imageUrl: banner3,
    },
    {
      title: "Signature Wood-Fired Mushroom and Caramelized",
      rating: 3.0,
      vendorName: "Progresso",
      dcPrice: 12.85,
      basePrice: 13.8,
      imageUrl: banner3,
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="w-full px-2 flex justify-between">
        <h1 className="font-bold text-2xl">Delas Of The Day</h1>
        <div className="flex items-center justify-center">
          <span className="text-base">All Deals</span>
          <span>
            <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-3">
        {ProductList.map((product, idx) => {
            return (
                <ProductFeatureCard key={idx} title={product.title} rating={product.rating} vendorName={product.vendorName} dcPrice={product.dcPrice} basePrice={product.basePrice} imageUrl={product.imageUrl} />
            )
        })}
      </div>
    </div>
  );
};

export default DealsOftheDay;
