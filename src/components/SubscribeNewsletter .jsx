// src/SubscribeNewsletter.js
"use client";
import React, { useState } from "react";

const SubscribeNewsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the email submission, e.g., API call to backend
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center py-12 bg-gray-200 mt-10 ">
      <div className="w-full max-w-md px-8 py-6 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Subscribe to our Newsletter
        </h2>
        {submitted ? (
          <div className="text-center text-green-500">
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
