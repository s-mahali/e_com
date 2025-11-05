import { Search, User, Heart, ShoppingCart, ChevronDown } from "lucide-react";
import logoImage from "../assets/react.svg";
import {Link}  from "react-router";

const Logo = () => (
  <a className="flex items-center gap-3 shrink-0">
    <img src={logoImage} alt="Foodzy logo" className="w-12 h-12" />
    <div>
      <span className="text-2xl font-bold font-logo text-text-secondary">
        Foodzy
      </span>
      <p className="text-xs text-text-tertiary">A Treasure of Tastes</p>
    </div>
  </a>
);

const HeaderSearchBar = () => (
  <form
    className="
      flex items-center w-full lg:w-auto lg:grow lg:max-w-2xl
      border border-border rounded-lg overflow-hidden
    "
  >
    <input
      type="text"
      placeholder="Search for items..."
      className="
        grow p-3 text-sm
        border-none focus:ring-0 focus:outline-none
      "
    />

    <span className="border-l border-border h-6"></span>

    <div className="relative">
      <select
        className="
          p-3 text-sm text-text-tertiary
          border-none focus:ring-0 focus:outline-none
          appearance-none bg-transparent pr-8
        "
        defaultValue="all"
      >
        <option value="all">All Categories</option>
        <option value="milks">Milks & Dairies</option>
        <option value="pet">Pet Foods</option>
        <option value="vegetables">Vegetables</option>
      </select>
      <ChevronDown className="w-4 h-4 text-text-tertiary absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none" />
    </div>

    <button
      type="submit"
      className="
        p-3 bg-primary text-white 
        hover:bg-primary/90 transition-colors
      "
      aria-label="Search"
    >
      <Search className="w-5 h-5" />
    </button>
  </form>
);

const UserActions = () => {
  const actions = [
    { title: "Account", icon: <User className="w-5 h-5" />, path: "/account" },
    {
      title: "Wishlist",
      icon: <Heart className="w-5 h-5" />,
      path: "/wishlist",
    },
    {
      title: "Cart",
      icon: <ShoppingCart className="w-5 h-5" />,
      path: "/cart",
    },
  ];

  return (
    <div className="flex items-center gap-4 shrink-0">
      {actions.map((action) => (
        <a
          key={action.title}
          href={action.path}
          className="
            flex items-center gap-1.5 text-sm text-text-secondary 
            font-medium hover:text-primary transition-colors
          "
        >
          {action.icon}
          <span>{action.title}</span>
        </a>
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <header className="container max-w-[1296px] m-auto bg-white">
      <div
        className="
          container py-4
          flex flex-col lg:flex-row items-center justify-around gap-6
        "
      >
        <div className="w-full lg:w-auto flex items-center justify-between">
          <Logo />

          <div className="lg:hidden">
            <UserActions />
          </div>
        </div>

        <div className="w-full lg:w-auto lg:grow">
          <HeaderSearchBar />
        </div>

        <div className="hidden lg:block">
          <UserActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
