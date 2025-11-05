// components/PromoCard.tsx
import React from 'react';
import Button from './Button'; 
import { type PromoCardProps } from '../index';



const PromoCard = ({
  title,
  imageUrl,
  bgColor,
  className = '',
}: PromoCardProps) => {
  return (
    <div
      className={`
        w-full rounded-lg 
        flex items-center justify-between 
        pl-8 pr-4 py-4 
        overflow-hidden 
        ${className}
      `}
      style={{ backgroundColor: bgColor }} 
    >
      {/* 1. Text & Button Content */}
      <div className="flex flex-col gap-4 max-w-[200px]">
        <h3 className="text-2xl font-bold font-family-primary text-text-secondary">
          
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </h3>
        
        
        <Button 
          title="Shop Now" 
          className="self-start" 
        />
      </div>

      
      <div className="shrink-0">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-50 object-cover" 
        />
      </div>
    </div>
  );
};

export default PromoCard;