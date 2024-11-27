import React, { useState } from "react";
import { BiMenuAltLeft, BiX } from "react-icons/bi";

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

 const menuOpen = () => {
   setIsOpen(!isOpen);
 };

 return (
   <nav className="w-full h-24 flex justify-between items-center p-6 md:px-20 py-6 mx-auto bg-light-yellow md:justify-between relative z-50">
     {/* Logo */}
     <h1 className="font-roboto text-[32px] font-bold leading-[35.2px] text-left underline-from-font skip-ink-none text-coffee cursor-pointer">Collers</h1>

     {/* Desktop Navigation and Sign-up button */}
     <div className="hidden md:flex items-center space-x-8 font-medium text-base text-coffee ml-auto">
       <ul className="flex space-x-8">
         <li className="cursor-pointer">Products</li>
         <li className="cursor-pointer">Solutions</li>
         <li className="cursor-pointer">Pricing</li>
         <li className="cursor-pointer">Resources</li>
         <li className="cursor-pointer">Log In</li>
       </ul>
       <button className="border-2 border-coffee rounded-md px-4 py-2 text-base font-medium text-coffee transition-all duration-300 hover:bg-coffee hover:text-white">
         Sign up now
       </button>
     </div>

     {/* Mobile Menu Toggle */}
     {isOpen ? (
       <BiX
         className="block md:hidden text-4xl opacity-70 cursor-pointer"
         onClick={menuOpen}
       />
     ) : (
       <BiMenuAltLeft
         className="block md:hidden text-4xl opacity-70 rotate-180 cursor-pointer"
         onClick={menuOpen}
       />
     )}

     {/* Mobile Navigation */}
     {isOpen && (
       <div className="fixed right-0 top-24 flex flex-col items-start justify-start gap-8 bg-black/80 p-12 w-1/2 h-[calc(100vh-6rem)] border-l border-gray-800 md:hidden z-40">
         <ul className="space-y-6 text-white">
           <li className="cursor-pointer">Products</li>
           <li className="cursor-pointer">Solutions</li>
           <li className="cursor-pointer">Pricing</li>
           <li className="cursor-pointer">Resources</li>
           <li className="cursor-pointer">Log In</li>
         </ul>
         <button className="border-2 border-white rounded px-3 py-2 text-base font-medium text-white">
           Sign up now
         </button>
       </div>
     )}
   </nav>
 );
};

export default Navbar;