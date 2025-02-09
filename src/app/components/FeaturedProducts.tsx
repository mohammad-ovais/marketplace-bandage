import React from "react";
import Image from "next/image";

const featured = [
 { id: 1, name: "Graphic Design", dept:"English Department",
     price: "$16.48 ", price2:" $6.48", image: "/fixed.png", image2:"/product1.png" },

 { id: 1, name: "Graphic Design", dept:"English Department",
      price: "$16.48", price2: "$6.48", image: "/fixed1.png", image2:"/product1.png" },

 { id: 1, name: "Graphic Design", dept:"English Department",
        price: "$16.48", price2:" $6.48", image: "/fixed2.png", image2:"/product1.png" },

 { id: 1, name: "Graphic Design", dept:"English Department",
          price: "$16.48", price2:" $6.48", image: "/fixed3.png", image2:"/product1.png" },

 { id: 1, name: "Graphic Design", dept:"English Department",
            price: "$16.48", price2:" $6.48", image: "/fixed4.png", image2:"/product1.png" },

 { id: 1, name: "Graphic Design", dept:"English Department",
              price: "$16.48", price2: "$6.48", image: "/fixed5.png", image2:"/product1.png" },

 { id: 1, name: "Graphic Design", dept:"English Department",
                price: "$16.48", price2: "$6.48", image: "/fixed6.png", image2:"/product1.png" },

 { id: 1, name: "Graphic Design", dept:"English Department",
                  price: "$16.48", price2: "$6.48", image: "/fixed7.png", image2:"/product1.png" },
];
const FeaturedProducts= () => {
  return (
  
      <div className="py-20 text-center">
        <h4 className="text-xl font-semibold text-slate-500 mb-2">Featured Products</h4>
        <h3 className="text-2xl font-extrabold text-blue-950">BESTSELLER PRODUCTS</h3>
        <p className="text-sm font-semibold text-slate-500 pt-3 tracking-wide">Problems trying to resolve the conflict between</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-20 justify-items-center">
          {featured.map((product) => (
            <div
              key={product.id}
              className=" ">
              <Image src={product.image} alt={product.name} width={239} height={427} />
          
            <h5 className="text-base font-bold text-blue-950 pb-3 mt-6">{product.name}</h5>
            <p className="text-base font-bold text-slate-600 pb-3">{product.dept}</p>
            <div className="flex justify-center mb-3 gap-1">
              <p className="text-gray-400">{product.price}</p>
              <p className="text-emerald-700 text-base font-bold">{product.price2}</p>
             </div>
             <div className="flex justify-center pb-10"> <Image src={product.image2} alt="image2" width={82.23} height={16}/></div>
              
            
            </div>
          ))}

        </div>

      </div>
  
  );
};

export default FeaturedProducts;
