import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="mt-2">
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-300">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Connect with Us</h2>
          {/* Add your social media icons or links here */}
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} E-Commerce Store. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
