"use client";
import { urlFor } from '@/sanity/lib/image';
import React, { useState } from 'react';
import Image from 'next/image';

interface CartItem {
  title: string;
  price: number;
  productImage?: string;
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  return (
    <div>Shopping Cart
      {/* Cart Summary */}
      <div className="mt-10 bg-gray-100 p-6 rounded-md shadow-md">
        <h2 className="text-lg font-black text-blue-950">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4 mt-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-white shadow-sm p-4 rounded-sm">
                <div>
                  <p className="font-medium text-gray-800">{item.title}</p>
                  <p className="text-lg text-green-500">${item.price.toFixed(2)}</p>
                </div>
                {item.productImage && <Image src={urlFor(item.productImage).url()} alt={item.title} width={50} height={50} />}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 mt-2">Your Cart Is Empty</p>
        )}
      </div>
    </div>
  );
}