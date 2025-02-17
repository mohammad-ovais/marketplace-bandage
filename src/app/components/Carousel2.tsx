import Image from "next/image";

export default function Carousel2() {
    return (
     <div className="bg-emerald-700">
        <div className="flex flex-col md:flex-row text-white items-center lg:pl-52 gap-8">
        
          <div className="pt-44 items-center text-center lg:text-left">
            <h5 className="text-xl font-normal">SUMMER 2020</h5>
            <h1 className="text-5xl md:text-6xl font-bold py-8 ">Vita Classic</h1>
            <h1 className="text-5xl md:text-6xl font-bold pb-8">Product</h1>
            <p className="text-sm font-normal mt-4 w-80">
              We know how large objects will act, We know how are objects will act. We know.
            </p>
            <div className="flex flex-col md:flex-row  items-center gap-4 mt-8">
              <span className="text-2xl font-bold py-2">$16.48</span>
              <button className="bg-green-500 text-white px-10 gap-2 py-4 rounded hover:bg-green-700 transition">
               <h3 className="text-sm font-bold">ADD TO CART</h3>
              </button>
            </div>

          </div>
          
          <div className="mt-28 pl-20">
           <Image src={"/shop2.png"} alt="Model" width={443} height={500} />
          </div>

        </div>

      </div>
    );
  }
