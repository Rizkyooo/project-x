'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white border-gray-200 md:p-4 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/logoo.png"
              className="h-8"
              alt="NikahanKita Logo"
            />
          </a>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#967E76] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white md:text-xl ">
              <li>
                <a
                  href="/#home"
                  className="block py-2 px-3 bg-amber-50 hover:bg-[#967E76] rounded md:bg-transparent md:text-[#967E76] md:p-0 md:hover:bg-white "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#templateDesain"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-[#967E76] md:hover:bg-transparent md:border-0 md:hover:text-[#967E76] md:p-0"
                >
                  Desain/Template
                </a>
              </li>
              <li>
                <a
                  href="/#fitur"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-[#967E76] md:hover:bg-transparent md:border-0 md:hover:text-[#967E76] md:p-0"
                >
                  Fitur
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-[#967E76] md:hover:bg-transparent md:border-0  md:hover:text-[#967E76] md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
