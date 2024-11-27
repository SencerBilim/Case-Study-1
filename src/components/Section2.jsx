import React from 'react'
import { LiaShoppingCartSolid } from "react-icons/lia";

const Section2 = () => {
  return (
    <section className='w-full bg-[#0F172A] px-6 sm:px-12 md:px-20 py-20'> 
    {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:justify-between items-center sm:items-center gap-6 mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-center sm:text-left">
                The best of the best
            </h1>
            <button className="border-2 border-white rounded-lg px-6 py-4 text-base font-bold text-white hover:bg-white hover:text-[#0F172A] transition-colors">
                Sign up now
            </button>
        </div>



    {/* Cards Container */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {/* Card 1 */}
      <div className="bg-[#0F172A] rounded-xl overflow-hidden border border-gray-800 relative shadow-xl shadow-white/20 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-300/20 ">
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-pink-500/20 rounded-full"/>
        <img 
          src="/images/Picture.png" 
          alt="sneaker" 
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">Title</h3>
          <p className="text-white mb-6 font-normal">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>

          
          <button className="w-full py-3 border-2 border-white rounded-lg text-white flex items-center justify-center space-x-2 hover:bg-gray-400 transition-colors">
            <LiaShoppingCartSolid className="text-white text-2xl" />
            <span>Buy Now</span>
        </button>

        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#0F172A] rounded-xl overflow-hidden border border-gray-800 relative shadow-xl shadow-white/20 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-300/20 ">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full"/>
        <img 
          src="/images/Picture1.png" 
          alt="sneaker" 
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">Title</h3>
          <p className="text-white mb-6 font-normal">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
          <button className="w-full py-3 border-2 border-white rounded-lg text-white flex items-center justify-center space-x-2 hover:bg-gray-400 transition-colors">
            <LiaShoppingCartSolid className="text-white text-2xl" />
            <span>Buy Now</span>
        </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#0F172A] rounded-xl overflow-hidden border border-gray-800 relative shadow-xl shadow-white/20 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-300/20 ">
        <img 
          src="/images/Picture2.png" 
          alt="sneaker" 
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">Title</h3>
          <p className="text-white mb-6 font-normal">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
          <button className="w-full py-3 border-2 border-white rounded-lg text-white flex items-center justify-center space-x-2 hover:bg-gray-400 transition-colors">
            <LiaShoppingCartSolid className="text-white text-2xl" />
            <span>Buy Now</span>
        </button>
        </div>
      </div>
    </div>
  </section>
)
}

export default Section2
