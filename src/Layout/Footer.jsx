import React from 'react';
import { NavLink } from "react-router-dom"
import Location from "../assets/image/footer/footerlocation.png"
import Time from "../assets/image/footer/footertime.png"
import Email from "../assets/image/footer/footeremil.png"
import Phone from "../assets/image/footer/footerphone.png"
import Facebook from "../assets/image/footer/facebookdefult.png"
import Twitter from "../assets/image/footer/twitter.png"
import Instagram from "../assets/image/footer/instagram.png"
import Linkdin from "../assets/image/footer/linkedin.png"
import Facebook1 from "../assets/image/footer/facebook.png"
import Twiiter1 from "../assets/image/footer/twitterhover.png"
import Instagram1 from "../assets/image/footer/instahover.png"
import Linkdine1 from "../assets/image/footer/linkdinehover.png"

const Footer = () => {
    return (
        <div className='bg-Primary mx-auto px-4 2xl:px-0'>
            <div className='w-full lg:max-w-[1500px] mx-auto'>
                <footer className=" text-secondary text-center">
                    <div className="text-cente text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold py-5 md:pt-[50px] md:pb-6"><p>Stay In Touch</p></div>
                    <div className="text-secondary2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-5 lg:gap-8 xl:gap-10 border-y border-[#c1e7e7]">

                        {/* Hospital Details */}

                        <div className="py-2 2xl:py-9">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=123+Smile+Avenue,+City,+ZIP"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <img src={Location} alt="Location" className="h-8 w-8 md:h-10 md:w-10" />
                                <span className="text-base md:text-lg leading-[30px]">
                                    123 Smile Avenue, City, ZIP
                                </span>
                            </a>
                        </div>

                        <div className="py-2 2xl:py-9">
                            <a href="tel:+911234567890" className="flex items-center gap-2">
                                <img src={Phone} alt="Phone" className="h-8 w-8 md:h-10 md:w-10" />
                                <span className="text-base md:text-lg leading-[30px]">
                                    +91 12345 67890
                                </span>
                            </a>
                        </div>

                        <div className="py-2 2xl:py-9">
                            <a
                                href="mailto:denttydental@gmail.com?subject=Appointment Inquiry&body=Hello,"
                                className="flex items-center gap-2"
                            >
                                <img src={Email} alt="Email Icon" className="h-8 w-8 md:h-10 md:w-10" />
                                <span className="text-base md:text-lg leading-[30px]">
                                    denttydental@gmail.com
                                </span>
                            </a>
                        </div>

                        <div className="py-2 2xl:py-9">
                            <div className="flex items-center gap-2">
                                <img src={Time} alt="Working Hours" className="h-8 w-8 md:h-10 md:w-10" />
                                <span className="text-base md:text-lg leading-[30px]">
                                    Mon - Sat : 9:00AM to 6:00PM
                                </span>
                            </div>
                        </div>
                    </div>


                    {/* navigating page link */}


                    <div className="max-w-[1143px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-between items-center md:gap-4 text-[16px] font-medium text-secondary text-center md:text-left">
                        <div className="py-2 md:py-5 lg:py-[73px]">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-secondary font-bold underline text-lg md:text-[20px] lg:text-[22px] md:leading-[30px]"
                                        : "text-secondary font-normal text-lg md:text-[20px] lg:text-[22px] md:leading-[30px] hover:underline"
                                }
                            >
                                Home
                            </NavLink>
                        </div>
                        <span className="hidden md:inline">|</span>
                        <div className="py-2 md:py-5 lg:py-[73px]">
                            <NavLink
                                to="/aboutus"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-secondary font-bold underline text-lg md:text-[20px] lg:text-[22px] md:leading-[30px]"
                                        : "text-secondary font-normal text-lg md:text-[20px] lg:text-[22px] md:leading-[30px] hover:underline"
                                }
                            >
                                About Us
                            </NavLink>
                        </div>
                        <span className="hidden md:inline">|</span>
                        <div className="py-2 md:py-5 lg:py-[73px]">
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-secondary font-bold underline text-lg md:text-[20px] lg:text-[22px] md:leading-[30px]"
                                        : "text-secondary font-normal text-lg md:text-[20px] lg:text-[22px] md:leading-[30px] hover:underline"
                                }
                            >
                                Services
                            </NavLink>
                        </div>
                        <span className="hidden md:inline">|</span>
                        <div className="py-2 md:py-5 lg:py-[73px]">
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-secondary font-bold underline text-lg md:text-[20px] lg:text-[22px] md:leading-[30px]"
                                        : "text-secondary font-normal text-lg md:text-[20px] lg:text-[22px] md:leading-[30px] hover:underline"
                                }
                            >
                                Blog
                            </NavLink>
                        </div>
                        <span className="hidden md:inline">|</span>
                        <div className="py-2 md:py-5 lg:py-[73px]">
                            <NavLink
                                to="/schedule-appointment"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-secondary font-bold underline text-lg md:text-[20px] lg:text-[22px] md:leading-[30px]"
                                        : "text-secondary font-normal text-lg md:text-[20px] lg:text-[22px] md:leading-[30px] hover:underline"
                                }
                            >
                                Schedule Appointment
                            </NavLink>
                        </div>
                        <span className="hidden md:inline">|</span>
                        <div className="py-2 md:py-5 lg:py-[73px]">
                            <NavLink
                                to="/faq"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-secondary font-bold underline text-lg md:text-[20px] lg:text-[22px] md:leading-[30px]"
                                        : "text-secondary font-normal text-lg md:text-[20px] lg:text-[22px] md:leading-[30px] hover:underline"
                                }
                            >
                                FAQs
                            </NavLink>
                        </div>
                    </div>
                    <div className="flex w-full lg:max-w-[1500px] flex-col lg:flex-row justify-between items-center text-sm border-t  border-[#c1e7e7] pt-[13px] pb-[15px]">
                        <div className="flex gap-4 mb-2 md:mb-0">
                            <NavLink
                                to="/terms-and-conditions"
                                className={({ isActive }) =>
                                    `text-lg md:leading-[30px]  hover:underline ${isActive ? 'font-bold underline' : 'font-normal'
                                    }`
                                }
                            >
                                Terms & Conditions
                            </NavLink>

                            <NavLink
                                to="/privacy-policy"
                                className={({ isActive }) =>
                                    `text-lg md:leading-[30px]  hover:underline ${isActive ? 'font-bold underline' : 'font-normal'
                                    }`
                                }
                            >
                                Privacy Policy
                            </NavLink>
                        </div>
                        <p className="text-center font-normal text-lg leading-[30px] w-full lg:w-auto order-2 lg:order-none">
                            © Dentty Dental All Rights Reserved
                        </p>

                        {/*  social media icon */}

                        <div className="flex gap-[18px] mb-2 md:mb-0">
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-full group"
                            >
                                <img src={Facebook} alt="Facebook" className="inline group-hover:hidden rounded-full" />
                                <img src={Facebook1} alt="Facebook Hover" className="hidden group-hover:inline rounded-full" />
                            </a>

                            {/* Twitter */}
                            <a
                                href="https://www.twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center bg-Primary hover:bg-secondary text-secondary hover:text-white rounded-full group"
                            >
                                <img src={Twitter} alt="Twitter" className="inline group-hover:hidden rounded-full" />
                                <img src={Twiiter1} alt="Twitter Hover" className="hidden group-hover:inline rounded-full" />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center bg-Primary hover:bg-secondary text-secondary hover:text-white rounded-full group"
                            >
                                <img src={Linkdin} alt="LinkedIn" className="inline group-hover:hidden rounded-full" />
                                <img src={Linkdine1} alt="LinkedIn Hover" className="hidden group-hover:inline rounded-full" />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-full group"
                            >
                                <img src={Instagram} alt="Instagram" className="inline group-hover:hidden rounded-full" />
                                <img src={Instagram1} alt="Instagram Hover" className="hidden group-hover:inline rounded-full" />
                            </a>
                        </div>

                    </div>
                </footer>
            </div>
        </div>

    );
};

export default Footer;
