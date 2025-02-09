import Image from 'next/image';
import shop1 from "/public/shop1.png";
import Link from 'next/link';

const Carousel1 = () => {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center text-white flex items-center px-6 lg:px-40" 
         style={{ backgroundImage: "url('/shop1.png')" }}>

      {/* Content Wrapper */}
      <div className="max-w-2xl text-center lg:text-left">
        <h5 className="text-sm md:text-base font-bold">SUMMER 2020</h5>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-4 md:my-10">NEW COLLECTION</h1>
        <p className="text-base md:text-lg lg:text-xl font-normal my-2 md:my-4 w-full md:w-96">
          We know how large objects will act, but things on a small scale.
        </p>
        
        <Link href="/shop">
          <button className="bg-green-500 text-white px-6 md:px-10 py-3 md:py-4 rounded-sm mt-4 hover:bg-green-600 text-lg md:text-2xl font-bold">
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Carousel1;
