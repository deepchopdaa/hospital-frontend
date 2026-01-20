import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/image/comman/logo.png";

function Header() {

    /* state Declare */
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const Navigate = useNavigate("/");

    // Scroll event
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 5);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [menuOpen]);

    return (
        <div className="sticky top-0 z-20 transition-all duration-300">
            <header className={`bg-Primary w-full transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2 md:py-5 lg:py-10'} ${isScrolled ? "bg-white" : "bg-Primary"} `}>
                <div className="mx-auto flex items-center justify-between w-full max-w-[1500px] px-4 2xl:px-0 transition-all duration-300">
                    {/* Logo */}
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-10 lg:h-16 w-auto cursor-pointer"
                        onClick={() => Navigate("/")}
                    />

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center flex-1 justify-end space-x-6">
                        <nav className="w-[300px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] md:text-base lg:text-xl leading-[27px] flex-1 bg-[#D1E9ED] rounded-xl md:px-5 lg:px-[60px] py-2 lg:py-[19px] flex justify-between">
                            {['Home', 'About Us', 'Services', 'Blog'].map((label, i) => {
                                const path = ['/', '/aboutus', '/services', '/blog'][i];
                                return (
                                    <NavLink
                                        key={label}
                                        to={path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-secondary font-bold underline"
                                                : "text-secondary font-normal hover:underline"
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                );
                            })}
                        </nav>
                        <Link
                            to="/schedule-appointment"
                            className="bg-[#D1E9ED] md:text-lg lg:text-[22px] leading-[30px] text-nowrap text-Primary font-bold px-5 py-2 lg:px-10 lg:py-[19px] rounded-xl"
                        >
                            Schedule Now
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-3xl text-[#008297]"
                        >
                            {menuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>

                {/* small screen nav */}

                {menuOpen && (
                    <div className="md:hidden absolute px-4 pb-4 space-y-2 w-full h-screen bg-white bg-Primary transition-all duration-300">
                        <div className=" rounded-xl px-4 py-4 flex flex-col items-start space-y-2">
                            {['Home', 'About Us', 'Services', 'Blog'].map((label, i) => {
                                const path = ['/', '/aboutus', '/services', '/blog'][i];
                                return (
                                    <NavLink
                                        key={label}
                                        to={path}
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-secondary font-bold underline"
                                                : "text-secondary font-normal hover:underline"
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                );
                            })}
                        </div>
                        <Link
                            to="/schedule-appointment"
                            onClick={() => setMenuOpen(false)}
                            className="block bg-white text-[#008297] border-2 border-Primary font-bold px-6 py-2 rounded-xl text-center"
                        >
                            Schedule Now
                        </Link>
                    </div>
                )}
            </header>
        </div>
    );
}

export default Header;
