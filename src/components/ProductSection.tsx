import prodImage from "../assets/tarbooz.png";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
const ProductSection = () => {
  const navigate = useNavigate();
  const foodCategory = [
    {
      title: "All",
    },
    {
      title: "Milks & Dairies",
    },
    {
      title: "Coffes & Teas",
    },
    {
      title: "Pet Foods",
    },
    {
      title: "Meats",
    },
    {
      title: "Vegetables",
    },
    {
      title: "Fruits",
    },
  ];

  const productLists = [
    {
      vendorName: "NestFood",
      basePrice: 32.8,
      dcPrice: 28.5,
      category: "snack",
      imageUrl: prodImage,
      productTitle: "Fresh Organic villa lemon",
      rating: 4.0,
      badge: "hot",
    },
    {
      vendorName: "NestFood",
      basePrice: 32.8,
      dcPrice: 28.5,
      category: "snack",
      imageUrl: prodImage,
      productTitle: "Fresh Organic villa lemon",
      rating: 4.0,
      badge: "hot",
    },
    {
      vendorName: "NestFood",
      basePrice: 32.8,
      dcPrice: 28.5,
      category: "snack",
      imageUrl: prodImage,
      productTitle: "Fresh Organic villa lemon",
      rating: 4.0,
      badge: "hot",
    },
    {
      vendorName: "NestFood",
      basePrice: 32.8,
      dcPrice: 28.5,
      category: "snack",
      imageUrl: prodImage,
      productTitle: "Fresh Organic villa lemon",
      rating: 4.0,
      badge: "hot",
    },
    {
      vendorName: "NestFood",
      basePrice: 32.8,
      dcPrice: 28.5,
      category: "snack",
      imageUrl: prodImage,
      productTitle: "Fresh Organic villa lemon",
      rating: 4.0,
      badge: "hot",
    },
    {
      vendorName: "NestFood",
      basePrice: 32.8,
      dcPrice: 28.5,
      category: "snack",
      imageUrl: prodImage,
      productTitle: "Fresh Organic villa lemon",
      rating: 4.0,
      badge: "hot",
    },
    {
      vendorName: "NestFood",
      basePrice: 32.8,
      dcPrice: 28.5,
      category: "snack",
      imageUrl: prodImage,
      productTitle: "Fresh Organic villa lemon",
      rating: 4.0,
      badge: "hot",
    },
    {
      vendorName: "NestFood",
      basePrice: 32.8,
      dcPrice: 28.5,
      category: "snack",
      imageUrl: prodImage,
      productTitle: "Fresh Organic villa lemon",
      rating: 4.0,
      badge: "hot",
    },
  ];
  return (
    <div className="container py-5 flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl  font-bold">
          popular products
        </h3>
        <ul className=" hidden md:flex  gap-3 text-sm">
          {foodCategory.map((category, i) => (
            <li key={i}>{category.title}</li>
          ))}
        </ul>
      </div>
      <div className="w-full grid 
        grid-cols-2
        md:grid-cols-3    
        lg:grid-cols-5 gap-4">
        {
            productLists.map((product) => {
                return (
                       <div onClick={() => navigate('/product-details')} className="cursor-pointer">
                        <ProductCard imageUrl={product.imageUrl}vendorName={product.vendorName} basePrice={product.basePrice} dcPrice={product.dcPrice} category={product.category} productTitle={product.productTitle}rating={product.rating} badge={product.badge} variant="default"/>
                       </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default ProductSection;
