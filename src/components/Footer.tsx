import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

import logo from "../assets/logo_com.png";
import footer1 from "../assets/18 →  → 1.jpg.png";
import footer2 from "../assets/18 →  → 2.jpg.png";
import footer3 from "../assets/18 →  → 3.jpg.png";
import footer4 from "../assets/18 →  → 4.jpg.png";
import footer5 from "../assets/18 →  → 5.jpg.png";

const FooterLogoInfo = () => (
  <div className="flex flex-col gap-4 text-sm text-text-tertiary">
    <a href="/" className="flex items-center gap-3 -ml-2">
      <img src={logo} alt="Foodzy logo" className="w-12 h-12" />
      <div>
        <span className="text-2xl font-bold font-logo text-text-secondary">
          Foodzy
        </span>
        <p className="text-xs">A Treasure of Tastes</p>
      </div>
    </a>

    <p>
      Foodzy is the biggest market of grocery products. Get your daily needs
      from our store.
    </p>

    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-start">
        <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
        <span>
          51 Green St Huntington ohaio beach ontorio, NY 11746 KY, 4783, USA.
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <Mail className="w-5 h-5 text-primary shrink-0" />
        <span>example@email.com</span>
      </div>
      <div className="flex gap-2 items-center">
        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
        <span>+91 123 4567890</span>
      </div>
    </div>
  </div>
);

const FooterLinks = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; path: string }[];
}) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-xl font-bold text-text-secondary">{title}</h3>
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.path}
            className="text-sm text-text-tertiary hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const FooterSubscribe = () => {
  const socialIcons = [
    { icon: <Facebook className="w-5 h-5" />, path: "#" },
    { icon: <Twitter className="w-5 h-5" />, path: "#" },
    { icon: <Instagram className="w-5 h-5" />, path: "#" },
    { icon: <Youtube className="w-5 h-5" />, path: "#" },
  ];

  const galleryImages = [footer1, footer2, footer3, footer4, footer5];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold text-text-secondary">
        Subscribe Our Newsletter
      </h3>

      <form className="relative flex">
        <input
          type="email"
          placeholder="Search here..."
          className="
            flex-grow p-3 text-sm 
            border border-border 
            rounded-l-md 
            focus:outline-none focus:ring-1 focus:ring-primary/50
          "
        />
        <button
          type="submit"
          className="
            p-3 bg-primary text-white 
            border border-primary
            rounded-r-md 
            hover:bg-primary/90 transition-colors
          "
          aria-label="Subscribe"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>

      {/* Social Icons */}
      <div className="flex gap-2 items-center">
        {socialIcons.map((social, index) => (
          <a
            key={index}
            href={social.path}
            className="
              w-9 h-9 flex items-center justify-center 
              rounded-full bg-primary/10 text-primary 
              hover:bg-primary hover:text-white transition-all
            "
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-1">
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery image ${index + 1}`}
            className="w-16 h-16 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

const companyLinks = [
  { name: "About Us", path: "#" },
  { name: "Delivery Information", path: "#" },
  { name: "Privacy Policy", path: "#" },
  { name: "Terms & Conditions", path: "#" },
  { name: "Contact Us", path: "#" },
  { name: "Support Center", path: "#" },
];

const categoryLinks = [
  { name: "Dairy & Milks", path: "#" },
  { name: "Fruits & Vegetable", path: "#" },
  { name: "Snack & Spice", path: "#" },
  { name: "Juice & Drinks", path: "#" },
  { name: "Chicken & Meat", path: "#" },
  { name: "Fast Food", path: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-border mt-24">
      <div className="container py-16 px-16 ">
        <div
          className="
          grid 
          grid-cols-1       
          md:grid-cols-2     
          lg:grid-cols-4     
           gap-1 md:gap-2 lg:gap-4         
        "
        >
          <FooterLogoInfo />
          <FooterLinks title="Company" links={companyLinks} />
          <FooterLinks title="Category" links={categoryLinks} />
          <FooterSubscribe />
        </div>
      </div>

      <div className="w-full border-t border-border">
        <div className="container py-6 text-center text-sm text-text-tertiary">
          © 2025 <span className="text-primary font-bold">Foodzy</span>, All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
