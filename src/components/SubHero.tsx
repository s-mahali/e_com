// components/SubHero.tsx
import React from 'react';
import PromoCard from './PromoCard';

// Import your banner images
import banner1 from '../assets/banner-1.png'; // Onions
import banner2 from '../assets/banner-2.png'; // Strawberry drink
import banner3 from '../assets/banner-3.png'; // Vegetables


const promos = [
  {
    title: 'Everyday Fresh & <br /> Clean with Our Products',
    imageUrl: banner1,
    bgColor: '#F0EADF', 
  },
  {
    title: 'Make your Breakfast <br /> Healthy and Easy',
    imageUrl: banner2,
    bgColor: '#F3E8E8', 
  },
  {
    title: 'The best Organic <br /> Products Online',
    imageUrl: banner3,
    bgColor: '#E6EAF2', 
  },
];

const SubHero = () => {
  return (
    <section className="container py-10">
      <div className="
        grid 
        grid-cols-1    
        md:grid-cols-2     
        lg:grid-cols-3
        gap-6
      ">
        {promos.map((promo) => (
          <PromoCard
            key={promo.title}
            title={promo.title}
            imageUrl={promo.imageUrl}
            bgColor={promo.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default SubHero;