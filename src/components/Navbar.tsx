import { ChevronDown, TextAlignJustify, Phone, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { title: "Home", path: "/home" },
  {
    title: "Category",
    path: "/category",
    icon: <ChevronDown className="w-4 h-4" />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <ChevronDown className="w-4 h-4" />,
  },
  { title: "Pages", path: "/pages", icon: <ChevronDown className="w-4 h-4" /> },
  { title: "Blog", path: "/blog", icon: <ChevronDown className="w-4 h-4" /> },
  {
    title: "Elements",
    path: "/elements",
    icon: <ChevronDown className="w-4 h-4" />,
  },
];

const DesktopNavLinks = () => (
  <ul className="hidden md:flex gap-4 items-center justify-center">
    {navItems.map((item) => (
      <li key={item.path}>
        <Link
          to={item.path}
          className="
            flex items-center gap-0.5 text-xs font-medium 
            text-text-secondary hover:text-primary transition-colors
          "
        >
          <span>{item.title}</span>
          {item.icon}
        </Link>
      </li>
    ))}
  </ul>
);

const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        md:hidden absolute top-[55px] left-0 w-full 
        bg-white shadow-lg z-50 border-t border-border
      "
    >
      <ul className="flex flex-col p-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <a
              href={item.path}
              className="
                flex items-center justify-between w-full py-3 
                text-base font-medium  
                text-text-secondary hover:text-primary transition-colors
              "
            >
              <span>{item.title}</span>
              {item.icon &&
                React.cloneElement(item.icon, { className: "w-5 h-5" })}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full  border-b border-border shadow-sm bg-white relative">
      <div className="container flex items-center justify-around h-[55px]">
        <div className="flex items-center ">
          <button className="hidden md:block p-1 border border-border rounded">
            <TextAlignJustify className="w-4 h-4 text-text-secondary" />
          </button>

         
        </div>
         <DesktopNavLinks />

        <div className="hidden md:flex gap-2 justify-center items-center">
          <Phone className="w-4 h-4 text-text-secondary" />
          <span className="font-light text-sm text-text-secondary">
            +123 ( 456 ) ( 7890 )
          </span>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1 text-text-secondary"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} />
    </nav>
  );
};

export default Navbar;
