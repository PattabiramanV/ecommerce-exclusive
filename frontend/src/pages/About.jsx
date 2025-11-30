import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-10">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="hover:text-black cursor-pointer">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">About</li>
          </ol>
        </nav>

        {/* Our Story */}
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-7">
              Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence
              in Bangladesh. Supported by a wide range of tailored marketing and data services, Exclusive has 10.5k
              sellers and 33k monthly products and serves 45.5k customers across the region.
            </p>
            <p className="text-gray-600 leading-7 mt-4">
              We have more than 25k monthly active users, offering a way for sellers and buyers to discover and connect
              across a diverse assortment of categories ranging from consumer goods to lifestyle accessories.
            </p>
          </div>
          <div>
            <img
              className="w-full h-[360px] object-cover rounded-md"
              alt="about visual"
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1400&auto=format&fit=crop"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[{
            value: '10.5k', label: 'Sellers active on our site'
          },{
            value: '33k', label: 'Monthly product sales', highlight: true
          },{
            value: '45.5k', label: 'Customers active on our site'
          },{
            value: '25k', label: 'Annual gross sale in our site'
          }].map((item, idx) => (
            <div key={idx} className={`border rounded-md p-6 text-center ${item.highlight ? 'bg-red-500 text-white border-red-500' : 'bg-white'} `}>
              <div className={`mx-auto mb-4 w-14 h-14 rounded-full flex items-center justify-center ${item.highlight ? 'bg-white/10' : 'bg-gray-100'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 6h2v7h-2V6zm1 11.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                </svg>
              </div>
              <p className="text-2xl font-semibold">{item.value}</p>
              <p className={`mt-1 text-sm ${item.highlight ? 'text-white' : 'text-gray-600'}`}>{item.label}</p>
            </div>
          ))}
        </section>

        {/* Team */}
        <section className="mt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              name: 'Tom Cruise', role: 'Founder & Chairman', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop'
            },{
              name: 'Emma Watson', role: 'Managing Director', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop'
            },{
              name: 'Will Smith', role: 'Product Manager', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop'
            }].map((m, i) => (
              <div key={i}>
                <img src={m.img} alt={m.name} className="w-full h-80 object-cover rounded-md" />
                <h3 className="mt-4 font-medium">{m.name}</h3>
                <p className="text-sm text-gray-500">{m.role}</p>
                <div className="mt-2 flex items-center gap-4 text-gray-500">
                  <a href="#" className="hover:text-black cursor-pointer" aria-label="LinkedIn">in</a>
                  <a href="#" className="hover:text-black cursor-pointer" aria-label="Twitter">tw</a>
                  <a href="#" className="hover:text-black cursor-pointer" aria-label="Instagram">ig</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            title: 'FREE AND FAST DELIVERY', desc: 'Free delivery for all orders over $140'
          },{
            title: '24/7 CUSTOMER SERVICE', desc: 'Friendly 24/7 customer support'
          },{
            title: 'MONEY BACK GUARANTEE', desc: 'We return money within 30 days'
          }].map((f, idx) => (
            <div key={idx} className="border rounded-md p-6 text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-black"><path d="M3 3h18v2H3V3zm2 4h14v2H5V7zm-2 4h18v2H3v-2zm2 4h10v2H5v-2z"/></svg>
              </div>
              <h4 className="font-semibold">{f.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{f.desc}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;