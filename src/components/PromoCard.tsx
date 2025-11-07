import Button from './Button'; 
import { type PromoCardProps } from '../index';



const PromoCard = ({
  title,
  imageUrl,
  className = '',
}: PromoCardProps) => {
  return (
    
    <div className={`relative max-w-[500px] ${className}`}>
     <img src={imageUrl} className='w-full'/>
     <div className='absolute top-10 left-0 right-0 px-4 py-2'>
      <h3 className='text-xl font-quicksand font-semibold text-[#253D4E]' dangerouslySetInnerHTML={{__html: title}}/>
        <Button 
          title="Shop Now" 
        className="self-start mt-5" 
       />
     </div>
    </div>
  );
};

export default PromoCard;