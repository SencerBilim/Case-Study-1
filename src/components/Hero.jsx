import React from "react";
import { PiPlayCircle } from "react-icons/pi";

const Hero = () => {
 return (
   <div className="relative z-0">
     <section className="bg-gradient-to-br from-[#FFFAF0] from-60% via-[#FEF3C7] via-20% to-[#FEF3C7] to-100% relative">
       <div className="max-w-auto lg:pt-10 md:pt-10 sm:pt-0 px-6 sm:px-12 md:px-20">
         <div className="flex flex-col 2xl:left-18 md:flex-row gap-8 relative z-10">
           <div className="max-w-[800px] mt-16 relative z-20">
             <h1 className="text-5xl md:text-6xl font-extrabold text-dark-blue leading-tight text-center md:text-left">
               Collectible Sneakers
             </h1>
             <p className="mt-6 text-xl md:text-2xl text-dark-blue leading-relaxed">
               Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
               suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
               ultrices amet.
             </p>
             <div className="mt-10 flex gap-6 justify-center md:justify-start">
               <button className="inline-block px-6 py-2 md:px-10 md:py-4 border-2 border-coffee text-coffee font-medium rounded-lg text-base md:text-xl transition-all duration-300 hover:bg-coffee hover:text-white z-20">
                 Sign up now
               </button>
               <button className="inline-flex items-center px-6 py-2 md:px-10 md:py-4 text-coffee font-medium text-base md:text-lg z-20">
                 <PiPlayCircle className="mr-2 md:mr-3 text-xl md:text-2xl" />
                 Watch Demo
               </button>
             </div>
           </div>

           <div className="relative mt-8 md:mt-0 flex items-center justify-center">
             <div className="relative w-[500px] sm:w-[400px] md:w-[400px] lg:w-[500px] aspect-square">
               <div className="absolute inset-0 z-0 w-[80%] h-[80%] bg-yellow-500 rounded-[50px] m-auto" />
               <img
                 src="/images/Hero-img.png"
                 alt="Collectible Sneakers"
                 className="absolute inset-0 w-full h-full object-contain z-10"
               />
             </div>
           </div>
         </div>
       </div>

       <div className="flex justify-center  sm:justify-start">
         <div className="grid md:px-11 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-20 pb-14 px-6 text-center sm:text-left">
           <div className="flex flex-col items-center sm:items-start relative p-6 max-w-[500px]">
             <img src="/images/Rectangle1.png" className="absolute top-0 left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-10 w-11 h-11" />
             <div className="w-12 h-12 mb-4 relative z-10">
               <img src="/images/trophy.png" alt="Feature Icon" className="w-full h-full scale-105" />
             </div>
             <h3 className="text-xl font-medium text-dark-blue mb-2">Nibh viverra</h3>
             <p className="text-dark-blue">
               Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
             </p>
           </div>

           <div className="flex flex-col items-center sm:items-start relative p-6 max-w-[500px]">
             <img src="/images/Rectangle.png" className="absolute top-0 left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-10 w-11 h-11" />
             <div className="w-12 h-12 mb-4 relative z-10">
               <img src="/images/Icon.png" alt="Feature Icon" className="w-full h-full scale-105" />
             </div>
             <h3 className="text-xl font-medium text-dark-blue mb-2">Cursus amet</h3>
             <p className="text-dark-blue">
               Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
             </p>
           </div>

           <div className="flex flex-col items-center sm:items-start relative p-6 max-w-[500px]">
             <div className="absolute top-2 left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-10 w-11 h-11 bg-[#A21CAF] opacity-50 rounded-full rotate-45"></div>
             <div className="w-12 h-12 mb-4 relative z-10">
               <img src="/images/tv.png" alt="Feature Icon" className="w-full h-full scale-105" />
             </div>
             <h3 className="text-xl font-medium text-dark-blue mb-2">Ipsum fermentum</h3>
             <p className="text-dark-blue">
               Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
             </p>
           </div>
         </div>
       </div>
     </section>
   </div>
 );
};

export default Hero;