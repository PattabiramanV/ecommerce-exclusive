import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../context/Store";
const Navbar = () => {
  const { cart, wishlist } = useStore();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    // Simple check for token presence
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    // Listen for storage changes in case login happens in another tab/window
    // and manual check also on mount
  }, []);

  // A helper to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/"; // Force refresh or redirect
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Top promo bar */}
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          <p className="truncate flex-1 text-center sm:text-left">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a className="ml-2 underline font-semibold cursor-pointer" href="#">ShopNow</a>
          </p>
          <div className="ml-4 flex-shrink-0">
            <select className="bg-black text-white text-sm focus:outline-none cursor-pointer">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wider text-black">
          Exclusive
        </Link>

        <ul className="hidden lg:flex items-center gap-10 text-black font-medium">
          <li><Link to="/" className="hover:underline underline-offset-4 decoration-2">Home</Link></li>
          <li><Link to="/contact" className="hover:underline underline-offset-4 decoration-2">Contact</Link></li>
          <li><Link to="/about" className="hover:underline underline-offset-4 decoration-2">About</Link></li>
          {!isLoggedIn && (
            <li><Link to="/sign-up" className="hover:underline underline-offset-4 decoration-2">Sign Up</Link></li>
          )}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-gray-100 rounded px-3 py-2 w-60">
            <input
              className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
              placeholder="What are you looking for?"
              type="text"
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 cursor-pointer hover:text-black">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 104.216 12.06l4.237 4.237a.75.75 0 101.06-1.06l-4.237-4.237A6.75 6.75 0 0010.5 3.75zm-5.25 6.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/wishlist" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cart.reduce((s, i) => s + i.qty, 0)}
                </span>
              )}
            </Link>

            {/* Profile Dropdown */}
            {isLoggedIn && (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`p-2 rounded-full transition-colors ${isDropdownOpen ? 'bg-red-500 text-white' : 'hover:bg-red-500 hover:text-white'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-gradient-to-br from-black to-gray-800 text-white rounded-md shadow-xl py-2 z-50 bg-opacity-95 backdrop-blur-sm">
                    <Link to="/account" className="flex items-center gap-3 px-4 py-2 hover:bg-white hover:bg-opacity-10 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      Manage My Account
                    </Link>
                    <Link to="/orders" className="flex items-center gap-3 px-4 py-2 hover:bg-white hover:bg-opacity-10 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                      My Order
                    </Link>
                    <Link to="/cancel" className="flex items-center gap-3 px-4 py-2 hover:bg-white hover:bg-opacity-10 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      My Cancellations
                    </Link>
                    <Link to="/reviews" className="flex items-center gap-3 px-4 py-2 hover:bg-white hover:bg-opacity-10 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                      My Reviews
                    </Link>
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-white hover:bg-opacity-10 text-sm text-left">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


