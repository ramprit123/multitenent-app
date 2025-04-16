"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { NavItem } from "./NavItem";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/75 backdrop-blur-lg shadow-sm dark:bg-gray-900/75"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Logo
          </span>
        </a>

        <button
          onClick={() => setIsActive(!isActive)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isActive}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 transition-transform ${isActive ? 'rotate-90' : ''}`}
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

        <div className={`${isActive ? 'block' : 'hidden'} w-full md:block md:w-auto transition-all duration-300`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/features", label: "Feature" },
              { href: "/pricing", label: "Price" },
              { href: "/contact", label: "Contact" },
            ].map((item) => {
              return <NavItem key={item.href} item={item} isActive={pathname === item.href} />;
            })}
          </ul>
        </div>
        <div className={`${isActive ? 'flex mt-4 md:mt-0' : 'hidden'} md:flex items-center space-x-4 w-full md:w-auto`}>
          <a
            href="/signin"
            className="text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
          >
            Sign In
          </a>
          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};
