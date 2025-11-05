import ProductCard from './components/ProductCard'
import prodImg from './assets/product_image.png'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Hero from './components/Hero'
import SubHero from './components/SubHero'

const App = () => {
  return (
    // <div className='flex items-center justify-center min-h-screen'>
    //   <ProductCard imageUrl={prodImg} vendorName='NestFood' basePrice={32.8} dcPrice={28.50} category='snack' productTitle='Fresh Organic villa from lomon' rating={4.0} badge='hot'/>
    // </div>
    <div className='flex flex-col'>
    <div className='flex flex-col w-full max-w-[1920px]'>
      <Navbar/>
      <Header/>
    </div>
    <Hero/>
    <SubHero/>
    </div>

  )
}

export default App