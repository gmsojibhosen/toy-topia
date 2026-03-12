import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-black py-10 mt-10 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Toy-Topia</h2>
          <p className="text-gray-700 mb-4">
            Bringing joy to kids with high-quality toys. Explore our collection
            and make every playtime special!
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/terms" className="hover:text-yellow-400 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-yellow-400 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-700"> Jatrabari, Dhaka, Bangladesh </p>
          <p className="text-gray-700 mt-2">Email: gmsojibhosen@gmail.com</p>
          <p className="text-gray-700 mt-2">Phone: 01848241722</p>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-700 text-sm">
        © {new Date().getFullYear()} Toy-Topia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
