import { Mail } from "lucide-react";
import heroImage from "../assets/banner-13.png.png";
import sticker1 from '../assets/__after.png'

const Hero = () => {
  return (
    <section
      className="
        w-full 
        bg-[#f0f0f0]   
        relative   
        overflow-hidden
      "
    >
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="text-sm font-bold text-primary font-family-primary">
            100% <span className="text-[#212529] font-family-primary"> Organic Vegetables</span>
          </span>

          <h1
            className="
              text-5xl md:text-6xl font-bold text-text-secondary 
              mt-2 
              font-hero 
            "
          >
            The best way to stuff your wallet.
          </h1>

          <p className="mt-4 text-base text-text-tertiary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            reiciendis beatae eaque consequatur.
          </p>

          <form className="flex mt-8 relative">
            <div className="relative grow">
              <label htmlFor="email" className="sr-only">
                Your email address
              </label>
              <Mail
                className="w-5 h-5 text-text-tertiary absolute left-6 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="
                  w-full bg-white pl-15 pr-4 py-3 
                  text-sm border border-border 
                  rounded-3xl 
                  focus:outline-none 
                "
              />
            </div>

            <button
              type="submit"
              className="
                px-6 py-3 bg-[#3BB77E] text-white 
                font-medium text-sm rounded-3xl 
                hover:bg-opacity-90 transition-colors absolute top-0 right-0
              "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <img
        src={heroImage}
        alt="Fresh organic vegetables"
        className="
          absolute bottom-0 right-0 z-0 
          w-[500px] h-auto 
          hidden lg:block 
          pointer-events-none
        "
      />

       <img
        src={sticker1}
        alt="vegetable"
        className="
          absolute top-100 right-160 z-0 
          hidden lg:block
          pointer-events-none
        "
      />
    </section>
  );
};

export default Hero;
