import Link from "next/link";
import { FaCartShopping, FaHeart, FaUser } from "react-icons/fa6";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header className="bg-blue-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <div>
          <Link href="/" className="text-2xl font-semibold">
            Gadget Hub
          </Link>
        </div>
        <SearchBox />
        <ul className="flex space-x-3 gap-4 text-2xl mr-3">
          <li>
            <Link href="/cart" className="hover:text-gray-300">
              <FaCartShopping />
            </Link>
          </li>
          <li>
            <Link href="/wishlist" className="hover:text-gray-300">
              <FaHeart />
            </Link>
          </li>
          <li>
            <Link href="/account" className="hover:text-gray-300">
              <FaUser />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
