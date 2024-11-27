import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

const Footer = () => {
    return (
      <footer className="bg-dark-blue text-white py-20">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            {/* Product Column */}
            <div>
              <h3 className="font-bold text-lg mb-6">Product</h3>
              <ul className="space-y-4">
                <li className="cursor-pointer">Pricing</li>
                <li className="cursor-pointer">Overview</li>
                <li className="cursor-pointer">Browse</li>
                <li className="cursor-pointer">Accessibility</li>
                <li className="cursor-pointer">Five</li>
              </ul>
            </div>
   
            {/* Solutions Column */}
            <div>
              <h3 className="font-bold text-lg mb-6">Solutions</h3>
              <ul className="space-y-4">
                <li className="cursor-pointer">Brainstorming</li>
                <li className="cursor-pointer">Ideation</li>
                <li className="cursor-pointer">Wireframing</li>
                <li className="cursor-pointer">Research</li>
                <li className="cursor-pointer">Design</li>
              </ul>
            </div>
   
            {/* Support Column */}
            <div>
              <h3 className="font-bold text-lg mb-6">Support</h3>
              <ul className="space-y-4">
                <li className="cursor-pointer">Contact Us</li>
                <li className="cursor-pointer">Developers</li>
                <li className="cursor-pointer">Documentation</li>
                <li className="cursor-pointer">Integrations</li>
                <li className="cursor-pointer">Reports</li>
              </ul>
            </div>
   
            {/* App Section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg mb-6">Get the App</h3>
              <div className="space-y-4">
                <img src="src/assets/images/app-store.png" alt="App Store" className="h-10 cursor-pointer" />
                <img src="src/assets/images/google-play.png" alt="Google Play" className="h-10 cursor-pointer" />
              </div>
   
              <div className="mt-12">
                <h3 className="font-bold text-lg mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <IoLogoYoutube className="cursor-pointer" />
                  <FaFacebookF className="cursor-pointer" />
                  <FaTwitter className="cursor-pointer" />
                  <FaInstagram className="cursor-pointer" />
                  <FaLinkedinIn  className="cursor-pointer"/>
                </div>
              </div>
            </div>
          </div>
   
          {/* Bottom Section */}
          <div className="flex flex-col items-center md:flex-row md:justify-between mt-20 pt-8 border-t border-gray-700">
            <p className="mb-4 md:mb-0">Collers © 2023. All rights reserved.</p>
            <div className="flex flex-row md:flex-row items-center gap-4 md:gap-6">
              <span className="cursor-pointer">Terms</span>
              <span className="cursor-pointer">Privacy</span>
              <span className="cursor-pointer">Contact</span>
              <div className="flex items-center gap-2">
                <GrLanguage className="cursor-pointer"/>
                <span >EN</span>  
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
   };
   
   export default Footer;