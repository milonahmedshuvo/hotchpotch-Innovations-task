"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../images/Logo.png'




const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`${isOpen ? 'mb-48' : 'mb-0'} text-secondaryColor`}>
            <div className="mx-auto flex items-center justify-between  py-3 md:py-4">
                {/*This is Left Side Logo and Nav content */}

                <div className="flex items-center lg:space-x-4 ">
                    {/* Logo */}
                    <Image src={logo} width={90} height={60} alt="logo" className="md:mr-3 lg:mr-8" />

                    {/* Nav content */}
                    <div
                        className={`absolute top-[65px] left-0  w-full md:static md:w-auto md:flex md:items-center md:space-x-6 lg:space-x-12 ${isOpen ? "block" : "hidden"
                            }`}
                    >
                        <Link
                            href="/"
                            className="block px-4 py-1  md:inline md:p-0 font-inter navberTextStype"
                        >
                            Demos
                        </Link>
                        <Link
                            href="/"
                            className="block  px-4 py-1  md:inline md:p-0 font-inter navberTextStype"
                        >
                            About
                        </Link>
                        <Link
                            href="/"
                            className="block  px-4 py-1  md:inline md:p-0 font-inter navberTextStype"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/"
                            className="block px-4 py-1  md:inline md:p-0 font-inter navberTextStype"
                        >
                            Pages
                        </Link>
                        <Link
                            href="/"
                            className="block px-4 py-1  md:inline md:p-0 font-inter navberTextStype"
                        >
                            Contact
                        </Link>
                    </div>
                </div>






                {/* Right Side Buttons in navber*/}
                <div className="flex items-center space-x-2">
                    <button className="rounded-[5px] px-4 py-2 font-inter border border-gray-500 navberTextStype  ">
                        Sing in
                    </button>

                    <button
                        className="gradientButtonText rounded-[5px] bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] px-4 py-2 text-white font-medium hover:opacity-90 focus:outline-none font-inter navberTextStype"
                    >
                        Get Started Free
                    </button>

                    {/*This Is Mobile Menu Toggle code */}
                    <button
                        className="text-gray-800 dark:text-white md:hidden"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
