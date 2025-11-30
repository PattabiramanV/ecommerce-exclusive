import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Exclusive</h3>
          <p className="text-gray-300 mb-3">Subscribe</p>
          <p className="text-gray-400 text-sm mb-4">Get 10% off your first order</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border border-white/30 text-white placeholder-gray-400 px-4 pr-12 py-2 rounded-md text-sm outline-none focus:border-white/60"
            />
            <button
              type="button"
              aria-label="Subscribe"
              className="absolute right-1.5 top-1.5 p-2 rounded-md hover:bg-white/10 text-white cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-medium text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="font-medium text-lg mb-4">Account</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white cursor-pointer">My Account</a></li>
            <li><a href="#" className="hover:text-white cursor-pointer">Login / Register</a></li>
            <li><a href="#" className="hover:text-white cursor-pointer">Cart</a></li>
            <li><a href="#" className="hover:text-white cursor-pointer">Wishlist</a></li>
            <li><a href="#" className="hover:text-white cursor-pointer">Shop</a></li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h4 className="font-medium text-lg mb-4">Quick Link</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white cursor-pointer">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white cursor-pointer">Terms Of Use</a></li>
            <li><a href="#" className="hover:text-white cursor-pointer">FAQ</a></li>
            <li><a href="#" className="hover:text-white cursor-pointer">Contact</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h4 className="font-medium text-lg mb-4">Download App</h4>
          <p className="text-xs text-gray-400 mb-3">Save $3 with App New User Only</p>
          <div className="flex items-center gap-3 mb-4">
            <img className="w-20 h-20 object-cover rounded" alt="QR" src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://example.com" />
            <div className="flex flex-col gap-2">
              <img className="w-32" alt="Google Play" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
              <img className="w-32" alt="App Store" src="https://upload.wikimedia.org/wikipedia/commons/9/96/Available_on_the_App_Store_%28black%29_SVG.svg" />
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            {/* Socials */}
            <a href="#" aria-label="Facebook" className="hover:text-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M13.5 9H16l.5-3h-3V4.5c0-.867.176-1.5 1.5-1.5H16V0h-2c-2.485 0-3.5 1.343-3.5 3.5V6H8v3h2.5v12h3V9z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 4.557a9.93 9.93 0 01-2.828.775A4.932 4.932 0 0023.337 3a9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.574A4.897 4.897 0 01.964 9.1v.062a4.917 4.917 0 003.946 4.817 4.902 4.902 0 01-2.212.084 4.918 4.918 0 004.59 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.004-.425-.014-.636A10.012 10.012 0 0024 4.557z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A5.5 5.5 0 1111.5 18 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zM17.5 6a1.5 1.5 0 11-1.5 1.5A1.5 1.5 0 0117.5 6z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07C13.6 8.84 15.28 8 17.6 8 22.2 8 24 10.76 24 15.2V24h-5v-7.4c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.83 1.9-2.83 3.88V24H8z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4">
        <p className="text-center text-gray-500 text-sm">© Copyright Rimel 2022. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
