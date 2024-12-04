import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa6';
import { LuShieldCheck } from 'react-icons/lu';
import { LiaRocketSolid } from 'react-icons/lia';
import { CgScreen } from 'react-icons/cg';
import { LuPodcast } from 'react-icons/lu';
import { GiSettingsKnobs } from 'react-icons/gi';

const Collections = () => {
  return (
    <section className="relative w-full h-[900px] bg-light-yellow px-6 sm:px-12 md:px-20 py-20">
      <div className="container 2xl:px-40 p-5 relative z-10">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-blue leading-tight text-center sm:text-left mb-6">
            Grow your collection
          </h2>

          <p className="text-lg text-dark-blue font-normal mb-10">
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
            amet dictum pellentesque sed. Eu non turpis risus odio sapien,
            fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et
            volutpat proin neque placerat at bibendum quam tellus.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-16">
            <div className="flex flex-row lg:flex-col gap-4 w-full md:w-[600px] lg:w-auto overflow-x-auto scrollbar-hidden space-x-6 lg:space-x-0">
            <button className="flex-shrink-0 flex items-center gap-4 px-4 py-4 text-dark-blue font-medium shadow-lg hover:bg-gray-200 rounded-lg whitespace-nowrap">
                <IoSearch /> Bibendum tellus <FaArrowRight />
            </button>
            <button className="flex-shrink-0 flex items-center gap-4 px-4 py-4 text-dark-blue font-medium hover:bg-gray-200 rounded-lg whitespace-nowrap">
                <LuShieldCheck className="text-xl" /> Cras eget
            </button>
            <button className="flex-shrink-0 flex items-center gap-4 px-4 py-4 text-dark-blue font-medium hover:bg-gray-200 rounded-lg whitespace-nowrap">
                <LiaRocketSolid className="text-xl" /> Dolor pharetra  
            </button>
            <button className="flex-shrink-0 flex items-center gap-4 px-4 py-4 text-dark-blue font-medium hover:bg-gray-200 rounded-lg whitespace-nowrap">
                <CgScreen className="text-xl" /> Amet, fringilla
            </button>
            <button className="flex-shrink-0 flex items-center gap-4 px-4 py-4 text-dark-blue font-medium hover:bg-gray-200 rounded-lg whitespace-nowrap">
                <LuPodcast className="text-xl" /> Amed nibh
            </button>
            <button className="flex-shrink-0 flex items-center gap-4 px-4 py-4 text-dark-blue font-medium hover:bg-gray-200 rounded-lg whitespace-nowrap">
                <GiSettingsKnobs className="text-xl" /> Sed velit
            </button>
        </div>

          <div className="relative w-full max-w-[759px] mx-auto p-4">
  {/* Base image */}
  <div className="rounded-xl overflow-hidden">
    <img
      src="/images/Desktop1.png"
      alt="Back Image"
      className="w-full h-auto md:w-[759px] md:h-[451px] object-cover"
    />
  </div>

  {/* Middle image */}
  <div className="absolute top-[20%] left-[15%] md:top-20 md:left-28 rounded-xl overflow-hidden w-[90%] md:w-auto">
    <img
      src="/images/Desktop2.png"
      alt="Front Image"
      className="w-full h-auto md:w-[759px] md:h-[451px] object-cover"
    />
  </div>

  {/* Small right image */}
  <div className="absolute -right-5 bottom-[-10%] md:-right-20 md:top-44 rounded-xl overflow-hidden w-[40%] md:w-auto">
    <img
      src="/images/desktop3.png"
      alt="Front Image"
      className="w-full h-auto md:w-[256px] md:h-[286px] object-cover"
    />
  </div>
</div>
        </div>
      </div>




      <div className='absolute bottom-0 left-0 w-full overflow-hidden'>
   <img 
       src="/images/Vector1.png" 
       className='w-full h-auto object-contain 2xl:object-cover 2xl:h-screen' 
       alt="" 
   />
</div>
<div className='absolute bottom-0 left-0 w-full overflow-hidden'>
   <img 
       src="/images/Vector2.png" 
       className='w-full h-auto object-contain 2xl:object-cover 2xl:h-screen'
       alt="" 
   />  
</div>
<div className='absolute bottom-0 left-0 w-full overflow-hidden'>
   <img 
       src="/images/Vector3.png" 
       className='w-full h-auto object-contain 2xl:object-cover 2xl:h-screen'
       alt="" 
   />
</div>
    </section>
  );
};

export default Collections;
