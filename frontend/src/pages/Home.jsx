import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SectionTitle = ({ title, action }) => (
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
      <span className="w-4 h-7 bg-red-500 rounded" />
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    {action}
  </div>
);

function Home() {
  return (
    <>
      <Navbar />

      {/* Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-16">
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
                <li key={c} className="hover:text-red-500 clickable">{c}</li>
              ))}
            </ul>
          </aside>
          <div className="lg:col-span-9">
            <div className="relative rounded-lg overflow-hidden bg-black text-white">
              <img
                alt="Hero banner"
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop"
                className="w-full h-64 md:h-80 object-cover opacity-70"
              />
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-200">iPhone 14 Series</p>
                  <h1 className="text-2xl md:text-4xl font-semibold max-w-xl mt-2">
                    Up to 10% off Voucher
                  </h1>
                </div>
                <button className="self-start px-5 py-2 bg-white text-black rounded-md hover:bg-gray-100 clickable">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Flash Sales */}
        <section>
          <SectionTitle
            title="Flash Sales"
            action={
              <button className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 clickable">
                View All
              </button>
            }
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="border rounded-lg overflow-hidden group">
                <div className="relative bg-gray-50 aspect-square">
                  <img
                    alt="sale"
                    className="w-full h-full object-cover group-hover:scale-105 duration-200"
                    src={`https://picsum.photos/seed/sale${i}/600/600`}
                  />
                  <span className="absolute left-3 top-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -{10 + i * 5}%
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="text-sm">Product {i + 1}</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-red-500 font-semibold">${(99 + i * 5).toFixed(0)}</span>
                    <span className="text-gray-400 line-through text-sm">${(129 + i * 5).toFixed(0)}</span>
                  </div>
                  <p className="mt-1 text-xs text-yellow-600">★★★★★ <span className="text-gray-500">(32)</span></p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <SectionTitle title="Browse By Category" />
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
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
                className="border rounded-lg p-5 flex flex-col items-center gap-3 hover:border-red-500 clickable"
              >
                <img alt={c} className="w-12 h-12 object-contain" src={`https://picsum.photos/seed/cat${i}/200/200`} />
                <p className="text-sm">{c}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Best Selling */}
        <section>
          <SectionTitle
            title="Best Selling Products"
            action={
              <button className="px-5 py-2 border rounded-md hover:bg-gray-50 clickable">View All</button>
            }
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <div className="relative bg-gray-50 aspect-square">
                  <img alt="best" src={`https://picsum.photos/seed/best${i}/600/600`} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <h3 className="text-sm">Best Item {i + 1}</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-red-500 font-semibold">${(140 + i * 10).toFixed(0)}</span>
                    <span className="text-gray-400 line-through text-sm">${(170 + i * 10).toFixed(0)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Big banner */}
        <section className="relative rounded-lg overflow-hidden bg-gray-900 text-white">
          <img
            alt="speaker banner"
            src="https://images.unsplash.com/photo-1552689486-f6773047d19f?q=80&w=1400&auto=format&fit=crop"
            className="w-full h-64 md:h-80 object-cover opacity-70"
          />
          <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between">
            <div className="max-w-xl">
              <p className="text-green-400 text-sm">Enhance Your Music Experience</p>
              <h3 className="text-2xl md:text-4xl font-semibold mt-2">Powerful Bluetooth Speakers</h3>
              <div className="mt-4 grid grid-cols-4 sm:grid-cols-5 gap-2 w-60">
                {['Days', 'Hours', 'Min', 'Sec'].map((t) => (
                  <div key={t} className="bg-white text-black px-3 py-2 rounded flex flex-col items-center">
                    <span className="text-lg font-semibold">12</span>
                    <span className="text-xs text-gray-600">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="self-start px-5 py-2 bg-green-500 rounded-md hover:bg-green-600 clickable">
              Buy Now!
            </button>
          </div>
        </section>

        {/* Explore Our Products */}
        <section>
          <SectionTitle
            title="Explore Our Products"
            action={
              <button className="px-5 py-2 border rounded-md hover:bg-gray-50 clickable">View All</button>
            }
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <div className="relative bg-gray-50 aspect-square">
                  <img alt="prod" src={`https://picsum.photos/seed/prod${i}/600/600`} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <h3 className="text-sm">Product {i + 1}</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-red-500 font-semibold">${(40 + i * 7).toFixed(0)}</span>
                  </div>
                  <p className="mt-1 text-xs text-yellow-600">★★★★☆ <span className="text-gray-500">(21)</span></p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 clickable">View All Products</button>
          </div>
        </section>

        {/* New Arrival */}
        <section>
          <SectionTitle title="New Arrival" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 relative rounded-lg overflow-hidden">
              <img alt="ps5" src="https://images.unsplash.com/photo-1606813907291-76bbd48f2f9e?q=80&w=1400&auto=format&fit=crop" className="w-full h-80 object-cover" />
              <div className="absolute left-6 bottom-6 text-white max-w-sm">
                <h3 className="text-xl font-semibold">PlayStation 5</h3>
                <p className="text-sm text-gray-200 mt-2">Black and White version of the PS5 coming out on sale.</p>
                <button className="mt-3 underline clickable">Shop Now</button>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-6">
              <div className="relative rounded-lg overflow-hidden">
                <img alt="speaker" src="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?q=80&w=800&auto=format&fit=crop" className="w-full h-38 md:h-40 lg:h-36 xl:h-40 object-cover" />
                <div className="absolute left-4 bottom-4 text-white">
                  <h3 className="font-semibold">Women’s Collections</h3>
                  <p className="text-xs text-gray-200">Featured woman collections.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative rounded-lg overflow-hidden">
                  <img alt="perfum" src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop" className="w-full h-36 object-cover" />
                  <div className="absolute left-3 bottom-3 text-white">
                    <h3 className="font-semibold text-sm">Perfume</h3>
                    <p className="text-xs text-gray-200">GUCCI INTENSE OUD EDP</p>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <img alt="speakers" src="https://images.unsplash.com/photo-1602524817899-b91f9b9c4b3e?q=80&w=800&auto=format&fit=crop" className="w-full h-36 object-cover" />
                  <div className="absolute left-3 bottom-3 text-white">
                    <h3 className="font-semibold text-sm">Speakers</h3>
                    <p className="text-xs text-gray-200">Amazon wireless speakers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { t: 'FREE AND FAST DELIVERY', s: 'Free delivery for all orders over $140' },
            { t: '24/7 CUSTOMER SERVICE', s: 'Friendly 24/7 customer support' },
            { t: 'MONEY BACK GUARANTEE', s: 'We return money within 30 days' },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 border rounded-lg">
              <div className="w-12 h-12 rounded-full bg-gray-900 text-white grid place-items-center mb-4">
                <span className="text-xl">{i + 1}</span>
              </div>
              <h4 className="font-semibold">{f.t}</h4>
              <p className="text-sm text-gray-500 mt-1">{f.s}</p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;