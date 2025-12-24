import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const SectionTitle = ({ title, action }) => (
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
      <span className="w-4 h-7 bg-red-500 rounded" />
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    {action}
  </div>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-4 ml-8 md:ml-16">
      <div className="text-center">
        <div className="text-xs font-medium">Days</div>
        <div className="text-2xl font-bold font-mono">{String(timeLeft.days).padStart(2, '0')}</div>
      </div>
      <span className="text-red-500 text-2xl font-bold">:</span>
      <div className="text-center">
        <div className="text-xs font-medium">Hours</div>
        <div className="text-2xl font-bold font-mono">{String(timeLeft.hours).padStart(2, '0')}</div>
      </div>
      <span className="text-red-500 text-2xl font-bold">:</span>
      <div className="text-center">
        <div className="text-xs font-medium">Minutes</div>
        <div className="text-2xl font-bold font-mono">{String(timeLeft.minutes).padStart(2, '0')}</div>
      </div>
      <span className="text-red-500 text-2xl font-bold">:</span>
      <div className="text-center">
        <div className="text-xs font-medium">Seconds</div>
        <div className="text-2xl font-bold font-mono">{String(timeLeft.seconds).padStart(2, '0')}</div>
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
      <Navbar />

      {/* Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-16 mb-20">
        {/* Hero with side categories */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="hidden lg:block lg:col-span-3 border-r pr-4">
            <ul className="space-y-4 text-gray-700">
              {[
                "Woman's Fashion",
                "Men's Fashion",
                'Electronics',
                'Home & Lifestyle',
                'Medicine',
                'Sports & Outdoor',
                'Baby’s & Toys',
                'Groceries & Pets',
                'Health & Beauty',
              ].map((c) => (
                <li key={c} className="hover:text-red-500 cursor-pointer flex justify-between items-center group">
                  {c}
                  {(c === "Woman's Fashion" || c === "Men's Fashion") && <span className="hidden group-hover:block text-xs">›</span>}
                </li>
              ))}
            </ul>
          </aside>
          <div className="lg:col-span-9">
            <div className="relative rounded-lg overflow-hidden bg-black text-white h-[350px]">
              <img
                alt="Hero banner"
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-start gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">🍎</span>
                  <span className="text-sm">iPhone 14 Series</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-semibold max-w-lg leading-tight">
                  Up to 10% off Voucher
                </h1>
                <Link to="/products" className="mt-4 flex items-center gap-2 border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">
                  Shop Now <span className="text-lg">→</span>
                </Link>
                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 border border-white cursor-pointer" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-500 cursor-pointer" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flash Sales */}
        <section className="border-b pb-12">
          <div className="flex items-end gap-20 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-4 h-8 bg-red-500 rounded-sm" />
                <span className="text-red-500 font-semibold">Today's</span>
              </div>
              <h2 className="text-3xl font-semibold tracking-wide">Flash Sales</h2>
            </div>
            <CountdownTimer />
            <div className="ml-auto flex gap-2">
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"><span className="text-xl">←</span></button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"><span className="text-xl">→</span></button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <ProductCard
                key={i}
                showDiscount={true}
                discountPercentage={10 + i * 5}
                product={{
                  id: i,
                  name: `HAVIT HV-G92 Gamepad`,
                  price: 120,
                  oldPrice: 160,
                  rating: 5,
                  reviewCount: 88,
                  image: `https://picsum.photos/seed/sale${i}/600/600`
                }}
              />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/products" className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition-colors font-medium">View All Products</Link>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b pb-12">
          <SectionTitle
            title="Browse By Category"
            action={
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"><span className="text-xl">←</span></button>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"><span className="text-xl">→</span></button>
              </div>
            }
          />
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Phones',
              'Computers',
              'SmartWatch',
              'Camera',
              'HeadPhones',
              'Gaming',
            ].map((c, i) => (
              <div
                key={c}
                className="border rounded-lg p-8 flex flex-col items-center gap-4 hover:border-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer group"
              >
                <img alt={c} className="w-12 h-12 object-contain group-hover:invert group-hover:brightness-0" src={`https://picsum.photos/seed/cat${i}/200/200`} />
                <p className="text-sm font-medium">{c}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Best Selling */}
        <section>
          <SectionTitle
            title="Best Selling Products"
            action={
              <Link to="/products" className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm">View All</Link>
            }
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <ProductCard
                key={i}
                product={{
                  id: 10 + i,
                  name: `The North Coat`,
                  price: 260,
                  oldPrice: 360,
                  rating: 5,
                  reviewCount: 65,
                  image: `https://picsum.photos/seed/best${i}/600/600`
                }}
              />
            ))}
          </div>
        </section>

        {/* Big banner */}
        <section className="relative rounded-lg overflow-hidden bg-black text-white h-[500px] flex items-center">
          <img
            alt="speaker banner"
            src="https://images.unsplash.com/photo-1552689486-f6773047d19f?q=80&w=1400&auto=format&fit=crop"
            className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-80 mix-blend-overlay"
          />
          <div className="relative z-10 p-12 max-w-xl">
            <p className="text-green-500 font-semibold mb-6">Categories</p>
            <h3 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">Enhance Your Music Experience</h3>
            <div className="grid grid-cols-4 gap-4 mb-10 w-80">
              {['Days', 'Hours', 'Minutes', 'Seconds'].map((t) => (
                <div key={t} className="bg-white text-black w-14 h-14 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center">
                  <span className="text-sm font-bold">23</span>
                  <span className="text-[10px] font-medium">{t}</span>
                </div>
              ))}
            </div>
            <button className="px-8 py-3 bg-green-500 rounded hover:bg-green-600 transition-colors font-medium">
              Buy Now!
            </button>
          </div>
          {/* Visual Gradient/Shadow overlay behind text if needed */}
        </section>

        {/* Explore Our Products */}
        <section>
          <SectionTitle
            title="Explore Our Products"
            action={
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"><span className="text-xl">←</span></button>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"><span className="text-xl">→</span></button>
              </div>
            }
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCard
                key={i}
                showNew={i < 2}
                product={{
                  id: 20 + i,
                  name: `Breed Dry Dog Food`,
                  price: 100,
                  rating: 3,
                  reviewCount: 35,
                  image: `https://picsum.photos/seed/prod${i}/600/600`
                }}
              />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/products" className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition-colors font-medium">View All Products</Link>
          </div>
        </section>

        {/* New Arrival */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-8 bg-red-500 rounded-sm" />
            <span className="text-red-500 font-semibold">Featured</span>
          </div>
          <h2 className="text-3xl font-semibold mb-10">New Arrival</h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-[600px]">
            {/* Left Big Item */}
            <div className="lg:col-span-2 relative rounded bg-black overflow-hidden group">
              <img alt="ps5" src="https://images.unsplash.com/photo-1606813907291-76bbd48f2f9e?q=80&w=1400&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute left-8 bottom-8 text-white max-w-sm">
                <h3 className="text-2xl font-semibold mb-2">PlayStation 5</h3>
                <p className="text-sm text-gray-300 mb-4">Black and White version of the PS5 coming out on sale.</p>
                <Link to="/products" className="underline hover:text-gray-200">Shop Now</Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Top Right */}
              <div className="flex-1 relative rounded bg-black overflow-hidden group">
                <img alt="womens" src="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" />
                <div className="absolute left-6 bottom-6 text-white max-w-xs">
                  <h3 className="text-xl font-semibold mb-2">Women’s Collections</h3>
                  <p className="text-xs text-gray-300 mb-3">Featured woman collections that give you another vibe.</p>
                  <Link to="/products" className="underline hover:text-gray-200">Shop Now</Link>
                </div>
              </div>

              {/* Bottom Right Split */}
              <div className="flex-1 grid grid-cols-2 gap-8">
                <div className="relative rounded bg-black overflow-hidden group">
                  <img alt="perfume" src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute left-4 bottom-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">Perfume</h3>
                    <p className="text-xs text-gray-300 mb-2">GUCCI INTENSE OUD EDP</p>
                    <Link to="/products" className="underline hover:text-gray-200 text-sm">Shop Now</Link>
                  </div>
                </div>
                <div className="relative rounded bg-black overflow-hidden group">
                  <img alt="speakers" src="https://images.unsplash.com/photo-1602524817899-b91f9b9c4b3e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute left-4 bottom-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">Speakers</h3>
                    <p className="text-xs text-gray-300 mb-2">Amazon wireless speakers</p>
                    <Link to="/products" className="underline hover:text-gray-200 text-sm">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-10 justify-items-center">
          {[
            { t: 'FREE AND FAST DELIVERY', s: 'Free delivery for all orders over $140', i: '🚚' },
            { t: '24/7 CUSTOMER SERVICE', s: 'Friendly 24/7 customer support', i: '🎧' },
            { t: 'MONEY BACK GUARANTEE', s: 'We return money within 30 days', i: '🛡️' },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mb-6 border-[10px] border-gray-200">
                <span className="text-3xl bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">{f.i}</span>
              </div>
              <h4 className="font-bold text-lg">{f.t}</h4>
              <p className="text-sm text-gray-600 mt-2">{f.s}</p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;