import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../context/Store";
const Navbar = () => {
  const { cart, wishlist } = useStore();
  return (
    <header className="w-full border-b border-gray-200">
      {/* Top promo bar */}
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          <p className="truncate">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a className="ml-2 underline cursor-pointer" href="#">ShopNow</a>
          </p>
          <div>
            <select className="bg-black text-white text-sm focus:outline-none">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-2xl font-semibold">Exclusive</div>
        <ul className="hidden md:flex items-center gap-8 text-gray-700">
          <li><Link href="#" to={"/"} className="hover:text-black cursor-pointer">Home</Link></li>
          <li><Link href="#" to={"/contact"} className="hover:text-black cursor-pointer">Contact</Link></li>
          <li><Link href="#"  to={"/about"} className="hover:text-black cursor-pointer">About</Link></li>
          <li><Link href="#" className="text-black font-medium cursor-pointer" to={"/sign-up"}>Sign Up</Link></li>
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 border rounded-md px-3 py-2">
            <input
              className="outline-none text-sm w-40"
              placeholder="What are you looking for?"
              type="text"
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 104.216 12.06l4.237 4.237a.75.75 0 101.06-1.06l-4.237-4.237A6.75 6.75 0 0010.5 3.75zm-5.25 6.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z" clipRule="evenodd" />
            </svg>
          </div>
          {/* Icons */}
          <Link to="/wishlist" className="relative p-2 rounded hover:bg-gray-100 clickable" aria-label="Wishlist">
            <span role="img" aria-label="heart">❤</span>
            {wishlist.length > 0 && (
              <span className="absolute -right-1 -top-1 text-[10px] leading-none bg-red-500 text-white rounded-full px-1.5 py-0.5">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative p-2 rounded hover:bg-gray-100 clickable" aria-label="Cart">
            <span role="img" aria-label="cart">🛒</span>
            {cart.length > 0 && (
              <span className="absolute -right-1 -top-1 text-[10px] leading-none bg-red-500 text-white rounded-full px-1.5 py-0.5">
                {cart.reduce((s, i) => s + i.qty, 0)}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
