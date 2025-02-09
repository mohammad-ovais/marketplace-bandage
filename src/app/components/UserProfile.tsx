"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
  addresses: string[];
  orders: { id: string; date: string }[];
}

const UserProfile: React.FC<{ user: User }> = ({ user }) => {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="p-4 shadow-lg">
        <div className="flex items-center space-x-4">
          {/* <Avatar className="w-16 h-16" /> */}
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </Card>
      
      <Card className="mt-6 p-4 shadow-lg">
        <h3 className="text-lg font-semibold mb-2">Saved Addresses</h3>
        <ul>
          {user.addresses.map((address, index) => (
            <li key={index} className="text-gray-700 border-b py-2">
              {address}
            </li>
          ))}
        </ul>
      </Card>
      
      <Card className="mt-6 p-4 shadow-lg">
        <h3 className="text-lg font-semibold mb-2">Order History</h3>
        <ul>
          {user.orders.map((order) => (
            <li
              key={order.id}
              className="text-blue-600 hover:underline cursor-pointer py-2"
              onClick={() =>{console.log("navigating to order",order.id); router.push(`/orders/${order.id}`)}}
            >
              Order #{order.id} - {order.date}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UserProfile;
