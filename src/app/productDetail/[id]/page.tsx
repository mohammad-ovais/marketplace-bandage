import { client } from '@/sanity/lib/client'
import React from 'react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { Product } from '../../../../types/product'
import Navbar_light from '@/app/components/Navbar_light'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'


const ProductDetails = async({params:{id}}:{params:{id:string}}) => {
    const query = `*[_type == "product" && _id == $id]{
    _id,
    title,
    price,
    description,
    productImage,
    dicountPercentage,
    }[0]`
    const product: Product | null = await client.fetch(query, {id})
    if (!product){
        return(
            <div>
                <h1>Product Not Found</h1>
            </div>
        )
    }
    
    
   return (
        <div>
          <Header/>
          <Navbar_light/>             
            <section className="container mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Image Section */}
                    <div key={product._id}>
                        {product.productImage && (<Image src={ urlFor(product.productImage).url()} alt={product.title} 
                        width={500} height={500} className='rounded-lg'/> )}
                    </div>
  
                    {/* Right Product Info Section */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                        <div className="flex items-center mb-4">
                            {/* Rating */}
                            <div className="flex text-yellow-400">
                                ★★★★☆
                            </div>
                            <span className="ml-2 text-gray-600">(10 Reviews)</span>
                        </div>

                        <p className="text-2xl font-semibold mb-4">$ {product.price}</p>
                        {product.dicountPercentage > 0 && (
                          <p className='text-orange-500'>{product.dicountPercentage} %oFF </p>)}

                        <div className='flex my-4'>  <p>Availability:</p>
                        <span className="text-green-500 font-medium"> In Stock</span>
                        </div>
                        <p className="text-gray-600 mb-6">
                            {product.description}
                        </p>
  
                        {/* Buttons */}
                        <div className="flex space-x-4">
                            {/* <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                                Select Options
                            </button>  */}
                             <button className="border border-gray-400 px-6 py-2 rounded hover:border-gray-500">
                                ❤️
                            </button>
                            <button className="border border-gray-400 hover:border-gray-800 px-6 py-2 rounded">
                                🛒 
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            </div>
    );
}
export default ProductDetails

  
