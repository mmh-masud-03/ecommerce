import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#3D52A0] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            {/* Add your categories here */}
            <ul>
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Phone
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Audio
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Laptop
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Camera
                </Link>
              </li>{" "}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul>
              <li>
                <Link href="/" className="hover:text-gray-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Shipping & Delivery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube size={24} />
              </a>
            </div>
            <div className="mt-4 flex items-center">
              <FaEnvelope className="mr-2" />
              <span>support@ecommerce.com</span>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} E-Commerce Store. All Rights
            Reserved.
            <span className="ml-4">
              &copy; This website is designed and created by Masud
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
