import React from 'react';
import { IoCheckmarkOutline } from "react-icons/io5";

const Join = () => {
  return (
    <section className="w-full h-[750px] bg-light-yellow px-6 sm:px-12 md:px-20 py-20">
  <div className="w-full max-w-[1280px] mx-auto h-[500px] flex flex-col lg:flex-row items-center bg-white rounded-[30px] shadow-custom-2 p-8 lg:p-12 gap-8">

    {/* Left Side - Text and Button */}
    <div className="w-full lg:w-[520px] flex flex-col gap-6 z-20">
      <h1 className="text-6xl font-bold pb-4 pt-4 text-dark-blue rounded-md">Why join us</h1>
      <ul className="list-none space-y-3">
        <li className="flex items-start gap-4 rounded-md hover:bg-gray-200">
          <IoCheckmarkOutline className="w-6 h-6 flex items-center justify-center text-green-600"/>
          <p className="text-dark-blue">
            Est et in pharetra magna adipiscing ornare aliquam.
          </p>
        </li>
        <li className="flex items-start gap-4 rounded-md hover:bg-gray-200">
          <IoCheckmarkOutline className="w-6 h-6 flex items-center justify-center text-green-600"/>
          <p className="text-dark-blue">
            Tellus arcu sed consequat ac velit ut eu blandit.
          </p>
        </li>
        <li className="flex items-start gap-4 rounded-md hover:bg-gray-200">
          <IoCheckmarkOutline className="w-6 h-6 flex items-center justify-center text-green-600"/>
          <p className="text-dark-blue">
            Ullamcorper ornare in et egestas dolor orci.
          </p>
        </li>
      </ul>
      <button className="border-2 border-coffee w-2/6 rounded-md px-4 py-2 text-base font-medium text-coffee transition-all duration-300 hover:bg-coffee hover:text-white cursor-pointer mx-auto md:mx-0">
      Sign up now
      </button>
    </div>

    {/* Right Side - Video Section */}
    <div className="w-full lg:w-[520px] relative">

      {/* Image */}
      <div className="absolute top-[-60px] w-ful">
        <img
            draggable="false"
          src="/images/Deco-video.png" 
          alt="Desktop Thumbnail"
          className="w-full h-full object-cover scale-125"
        />
      </div>

      {/* Desktop Image */}
      <div className="relative w-full overflow-hidden  ">
        <img
            draggable="false"
          src="/images/Desktop.png" 
          alt="Desktop Thumbnail"
          className="w-full h-full object-cover cursor-pointer shadow-custom-2 transition-all duration-300 hover:scale-105"
        />
      </div>

      <div class="absolute bottom-[30px] scale-150 sm:translate-x-0 sm:left-0 w-11 h-11 bg-[#15803D] opacity-70 rounded-full rotate-45"></div>

    </div>

  </div>
</section>

  );
};

export default Join;
