"use client";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userId = Cookies.get("userId");
        const response = await fetch(`/api/orders/all/${userId}`);
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto px-3 py-8">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.reverse().map((order) => (
            <div key={order._id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-2">
                Order ID: {order._id}
              </h2>
              <p className="mb-2">Status: {order.orderStatus}</p>
              <p className="mb-2">
                Created At: {new Date(order.createdAt).toLocaleString()}
              </p>
              <h3 className="text-md font-semibold mb-2">Products:</h3>
              <ul>
                {order.products.map((product) => (
                  <li key={product._id} className="flex items-center mb-2">
                    <span className="font-semibold mr-2">Product:</span>
                    <span>{product.product}</span>
                    <span className="font-semibold mx-2">Quantity:</span>
                    <span>{product.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
