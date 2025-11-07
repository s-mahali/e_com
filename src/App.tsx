import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
     <div className='w-full min-h-screen flex flex-col items-center justify-center gap-2'>
    <div className='sticky top-0 z-50 flex flex-col w-full'>
      <Navbar/>
      <Header/>
    </div>
    <Outlet/>
    <Footer/>
    </div>
   

  )
}

export default App

