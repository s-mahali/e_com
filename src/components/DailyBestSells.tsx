import daily_sale_banner from '../assets/best_sale_banner.png'
import dail_sale2 from '../assets/daily_sale_prod_img.png'
import ProductCard from './ProductCard'

const DailyBestSells = () => {
   const bestSellList = [
         {
              vendorName: "NestFood",
              basePrice: 32.8,
              dcPrice: 28.5,
              category: "snack",
              imageUrl: dail_sale2,
              productTitle: "Fresh Organic villa lemon",
              rating: 4.0,
              badge: "hot",
            },
             {
              vendorName: "NestFood",
              basePrice: 32.8,
              dcPrice: 28.5,
              category: "snack",
              imageUrl: dail_sale2,
              productTitle: "Fresh Organic villa lemon",
              rating: 4.0,
              badge: "hot",
            },
            {
              vendorName: "NestFood",
              basePrice: 32.8,
              dcPrice: 28.5,
              category: "snack",
              imageUrl: dail_sale2,
              productTitle: "Fresh Organic villa lemon",
              rating: 4.0,
              badge: "hot",
            },
            {
              vendorName: "NestFood",
              basePrice: 32.8,
              dcPrice: 28.5,
              category: "snack",
              imageUrl: dail_sale2,
              productTitle: "Fresh Organic villa lemon",
              rating: 4.0,
              badge: "hot",
            },
    ]
  return (
    <div className='container flex flex-col gap-5'>
       <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Daily Best Sells</h1>
        <ul className='flex gap-3 cursor-pointer'>
            <li>Featured</li>
            <li>Popular</li>
            <li>New added</li>
        </ul>
       </div>
       <div className='w-full flex gap-4 p-2'>
         <div className=''><img  className='hidden lg:block object-cover'src={daily_sale_banner} alt={"banner-img"}/></div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {
            bestSellList.map((product) => {
                return (
                       <ProductCard imageUrl={product.imageUrl}vendorName={product.vendorName} basePrice={product.basePrice} dcPrice={product.dcPrice} category={product.category} productTitle={product.productTitle}rating={product.rating} badge={product.badge} variant='compact'/>
                )
            })
        }
         </div>
       </div>
    </div>
  )
}

export default DailyBestSells