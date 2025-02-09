"use client"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import React, { useEffect, useState } from "react"
import { urlFor } from "@/sanity/lib/image"
import { Product } from "../../../types/product"
import Link from "next/link"
import { Button } from "@/components/ui/button"


// Define the props interface
interface ProductListProps {
    products: Product[];
  }
  
  const ProductList: React.FC<ProductListProps> = ({ products = [] }) => {

   const [cart, setCart] = useState<Product[]> ([])
    
    const addToCart = (product:Product) =>{
            setCart((prevCart) => [...prevCart,product] );
            alert(`${product.title} has been added to your cart`)
        }
        
    return(
        <div className=" px-4 py-8">
             <h2 className="text-center text-2xl font-semibold my-4">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) =>(
                    <div key={product._id} 
                    className="bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                        <Link href={`/productDetail/${product._id}`}>
                        {product.productImage &&(
                            <Image src={urlFor(product.productImage).url()} alt="image" width={200} height={200} 
                             className="w-full h-60 object-cover rounded-sm" />
                        )}
                       <h2 className="text-xl font-medium text-slate-800 mt-2"> {product.title}</h2>
                       <div className="flex justify-between items-center mt-2">
                       <p className="text-lg font-medium text-green-600">$ {product.price}</p>
                       {product.dicountPercentage> 0 && (
                        <p className="text-sm font-medium text-orange-500">{product.dicountPercentage} %OFF</p>
                       )}
                       </div>
                       </Link>
                                                               {/* Add to cart functionality */}
                       <div className=" flex justify-center ">          
                       <button className="mt-4 bg-gradient-to-r bg-blue-600 hover:bg-blue-900 text-white w-full py-2 rounded-sm transition-all" 
                       onClick={()=>addToCart(product)}>
                        Add To Cart</button>
                       </div>
                    </div>
                 ) )}
            </div>
                          {/* Cart Summary */}
                <div className="mt-10 bg-gray-100 p-6 rounded-md shadow-md">
                    <h2 className="text-lg font-black text-blue-950">Cart Summary</h2>
                    {cart.length > 0 ?(
                        <ul className="space-y-4 mt-4">
                            {cart.map((item,index)=>(
                                <li key={index} className="flex justify-between items-center bg-white shadow-sm p-4 rounded-sm ">
                                    <div>
                                        <p className="font-medium text-gray-800 ">{item.title} </p>
                                        <p className="text-lg text-green-500">${item.price.toFixed(2)} </p>
                                    </div>
                                    {item.productImage && (
                                        <Image src={urlFor(item.productImage).url()} alt={item.title} width={50} height={50} />)}
                                </li>
                            ))} <Link href="/checkOut">
                               <Button>Check Out</Button></Link>
                        </ul>
                    ):(<p className="text-gray-600 mt-2">Your Cart Is Empty</p> ) }
                </div>

        </div>

    )
}
export default ProductList 