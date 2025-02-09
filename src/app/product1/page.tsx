import Header from "../components/Header"
import Navbar_light from "../components/Navbar_light"
import Image from "next/image"

export default function ProductSection() {
    return (
        <div>
     <Header/>
     <Navbar_light/>
      <section className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Image Section */}
          <div className="relative">
            <Image
              src="/product1cover.png" // Replace with actual image URL
              alt="Yellow Sofa"
              className="w-full h-auto rounded-lg"
            />
            <div className="flex space-x-2 mt-4">
              <Image
                src="/singleproduct1.jpg" // Small thumbnails
                alt="Thumbnail 1"
                className="w-16 h-16 rounded-md border hover:border-blue-500 cursor-pointer"
              />
              <Image
                src="singleproduct2.jpg"
                alt="Thumbnail 2"
                className="w-16 h-16 rounded-md border hover:border-blue-500 cursor-pointer"
              />
            </div>
          </div>
  
          {/* Right Product Info Section */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-2">Floating Phone</h1>
            <div className="flex items-center mb-4">
              {/* Rating */}
              <div className="flex text-yellow-500">
                ★★★★☆
              </div>
              <span className="ml-2 text-gray-600">(10 Reviews)</span>
            </div>
            <p className="text-2xl font-semibold mb-4">$1,139.33</p>
            <span className="text-green-500 font-medium mb-4">In Stock</span>
            <p className="text-gray-600 mb-6">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial
              consequent sent nostrum met.
            </p>
  
            {/* Color Options */}
            <div className="flex items-center mb-6">
              <span className="mr-4 font-medium">Colors:</span>
              <div className="flex space-x-2">
                <div className="w-6 h-6 bg-blue-400 rounded-full cursor-pointer"></div>
                <div className="w-6 h-6 bg-green-400 rounded-full cursor-pointer"></div>
                <div className="w-6 h-6 bg-orange-400 rounded-full cursor-pointer"></div>
                <div className="w-6 h-6 bg-black rounded-full cursor-pointer"></div>
              </div>
            </div>
  
            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                Select Options
              </button>
              <button className="border border-gray-300 px-6 py-2 rounded hover:border-gray-500">
                ❤️
              </button>
              <button className="border border-gray-300 px-6 py-2 rounded hover:border-gray-500">
                🛒
              </button>
            </div>
          </div>
        </div>
      </section>

      </div>
    );
  }
  
    
 






 
       
    
