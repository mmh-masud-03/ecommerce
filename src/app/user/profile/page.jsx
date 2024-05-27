"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import SkeletonPulse from "@/components/SkeletonPulse";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [paymentOptions, setPaymentOptions] = useState([]);
  const [newUsername, setNewUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = Cookies.get("userId");
        const userResponse = await fetch(`/api/user/${userId}`);
        const userData = await userResponse.json();
        setUser(userData);
        setIsLoading(false);

        const ordersResponse = await fetch(`/api/orders/all/${userId}`);
        const ordersData = await ordersResponse.json();
        setOrders(ordersData);

        const addressesResponse = await fetch(`/api/addresses/${userId}`);
        const addressesData = await addressesResponse.json();
        setAddresses(addressesData);

        const paymentOptionsResponse = await fetch(
          `/api/paymentOptions/${userId}`
        );
        const paymentOptionsData = await paymentOptionsResponse.json();
        setPaymentOptions(paymentOptionsData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleUsernameUpdate = async () => {
    setIsLoading(true);
    try {
      const userId = Cookies.get("userId");
      const response = await fetch(`/api/user/${userId}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: newUsername }),
      });
      if (response.ok) {
        const updatedUser = await response.json();
        setUser((prevUser) => ({
          ...prevUser,
          username: updatedUser.username,
        }));
        setNewUsername("");
      } else {
        console.error("Error updating username");
      }
    } catch (error) {
      console.error("Error updating username:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <SkeletonPulse />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">User Profile</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block font-semibold mb-2">
            Username:
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="username"
              value={newUsername || user.username}
              onChange={handleUsernameChange}
              className="border border-gray-300 rounded-l px-3 py-2 mr-2"
            />
            <button
              onClick={handleUsernameUpdate}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-r px-4 py-2"
            >
              Update
            </button>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Email:</h3>
          <p>{user.email}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Role:</h3>
          <p>{user.role}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Orders</h2>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <ul>
            {orders.map((order) => (
              <li
                key={order._id}
                className="bg-white rounded-lg shadow-md p-4 mb-4"
              >
                <h3 className="text-lg font-semibold mb-2">
                  Order ID: {order._id}
                </h3>
                <p>Status: {order.orderStatus}</p>
                <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
                <h4 className="text-md font-semibold mb-2">Products:</h4>
                <ul>
                  {order.products.map((product) => (
                    <li key={product._id} className="flex items-center">
                      <span className="font-semibold mr-2">Product:</span>
                      <span>{product.product}</span>
                      <span className="font-semibold mx-2">Quantity:</span>
                      <span>{product.quantity}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Address Book</h2>
        {addresses.length === 0 ? (
          <p>No addresses found.</p>
        ) : (
          <ul>
            {addresses.map((address) => (
              <li
                key={address._id}
                className="bg-white rounded-lg shadow-md p-4 mb-4"
              >
                <h3 className="text-lg font-semibold mb-2">{address.name}</h3>
                <p>{address.address1}</p>
                <p>{address.address2}</p>
                <p>
                  {address.city}, {address.state} {address.zipCode}
                </p>
                <p>{address.country}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Payment Options</h2>
        {paymentOptions.length === 0 ? (
          <p>No payment options found.</p>
        ) : (
          <ul>
            {paymentOptions.map((option) => (
              <li
                key={option._id}
                className="bg-white rounded-lg shadow-md p-4 mb-4"
              >
                <h3 className="text-lg font-semibold mb-2">{option.name}</h3>
                <p>Type: {option.type}</p>
                <p>Last 4 digits: {option.lastFourDigits}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
