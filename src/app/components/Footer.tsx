import Image from "next/image";
import fcb from "/icons/fcb.png"
import insta from "/icons/insta.png"
import twtr from "/icons/twtr.png"

const Footer = () => {
    return (
      <footer className="py-8">

          <div className="flex justify-between items-center py-10 bg-[#fafafa]">
          <h3 className="font-bold text-2xl text-[#252B42] ml-8 ">Bandage</h3>
              <div className="flex justify-items-end gap-5 mr-2">
            <div> <Image src={fcb} alt="fcb" width={23} height={23} className="bg-[#23A6F0]"/></div>
           <div><Image src={insta} alt="insta" width={23} height={23} className="bg-[#23A6F0]"/></div>
           <div><Image src={twtr} alt="twtr" width={23} height={23} className="bg-[#23A6F0]"/></div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Company Info</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Carrier</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">We are hiring</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Blog</a></li>
              </ul>
            </div>
  
            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Legal</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Carrier</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">We are hiring</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Blog</a></li>
              </ul>
            </div>
  
            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Features</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Business Marketing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">User Analytic</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Live Chat</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Unlimited Support</a></li>
              </ul>
            </div>
  
            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Resources</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500">iOS & Android</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Watch a Demo</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Customers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">API</a></li>
              </ul>
            </div>
  
            {/* Get in Touch */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Get In Touch</h4>
              <form className="mt-4 flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-2">Lorem imp sum dolor Amit</p>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-8 border-t border-gray-300 py-6 bg-[#fafafa] flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">Made With Love By Finland All Right Reserved</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  