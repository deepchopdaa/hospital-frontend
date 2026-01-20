
import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

/* image import */
import Img1 from "../../assets/image/home/home1.png";
import Img2 from "../../assets/image/home/home2.png";
import Img3 from "../../assets/image/home/home3.png";
import Img4 from "../../assets/image/home/home4.png";
import Img5 from "../../assets/image/home/home5.png";
import Img6 from "../../assets/image/home/home6.png";
import Doctor from "../../assets/image/home/homedoctor.png"
import service1 from "../../assets/image/home/hservice1.png"
import service2 from "../../assets/image/home/hservice2.png"
import service3 from "../../assets/image/home/hservices3.png"
import Icon from "../../assets/image/home/serviceicon.png"
import ToothBg from '../../assets/image/comman/teetth.png';
import blog1 from '../../assets/image/home/blog1.png';
import blog2 from '../../assets/image/home/blog2.png';
import blog3 from '../../assets/image/home/blog3.png';
import List4 from "../../assets/image/home/list4.png";
import List5 from "../../assets/image/home/list5.png";
import List6 from "../../assets/image/home/list6.png";

/* image scrolling images */
const images = [Img1, Img2, Img3, Img4, Img5, Img6];


/* blog data of blog section */
const blogData = [
    {
        img: blog1,
        category: "General Dentistry",
        title: "The Impact of Cosmetic Dentistry",
        description:
            "Cosmetic dentistry is often seen as a way to enhance one's appearance, but its benefits extend far beyond a perfect smile. Procedures such as teeth whitening, veneers...",
    },
    {
        img: blog2,
        category: "Cosmetic Dentistry",
        title: "The Benefits of Regular Dental Checkups",
        description:
            "Routine dental checkups are more than just a cleaning—they're an essential part of maintaining your overall health. Early detection of dental issues, professional cleanings..",
    },
    {
        img: blog3,
        category: "Denty Clinic",
        title: "Top 5 Foods for Stronger Teeth",
        description:
            "What you eat has a direct impact on your oral health. Certain foods can help strengthen your teeth and prevent cavities, while others can contribute to decay. In this blog, we explore...",
    },
    {
        title: "Benefits Of Dental Implants Explained",
        description: "Dental implants offer a permanent solution for missing teeth, improving both function and aesthetics. They prevent bone loss and support adjacent teeth, promoting overall oral health.",
        img: List4,
        category: "Cosmetic Dentistry"

    },
    {
        title: "How To Choose The Right Toothbrush",
        description: "Selecting the right toothbrush can greatly impact your oral hygiene. Look for a brush with soft bristles and a comfortable grip. Electric toothbrushes can provide a deeper clean...",
        img: List5,
        category: "Cosmetic Dentistry"

    }
];

// left column images (scrolling down)
const leftColumnImages = [
    { src: images[0], height: "h-[327px]" },
    { src: images[2], height: "h-[192px]" },
    { src: images[4], height: "h-[380px]" }
];

// Right column images (scrolling down)
const rightColumnImages = [
    { src: images[1], height: "h-[192px]" },
    { src: images[3], height: "h-[380px]" },
    { src: images[5], height: "h-[327px]" }
];

const Home = () => {

    /* state declare */
    const Navigate = useNavigate("/")
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    /* slider slide change function */
    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };
    return (
        <>
            {/* main section */}
            <div className="bg-white">
                <div className="bg-Primary px-4 2xl:px-0">
                    <div className="w-full max-w-[1500px] mx-auto">
                        <div className="flex flex-col md:flex-row h-[600px] lg:h-[854px] items-center justify-between">
                            <div className="m-auto xl:w-[786px] md:pr-5 min-h-[250px] text-left">
                                <p className="text-Primary font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[64px] 2xl:text-[70px] mt-3 md:mt-0 leading-[38px] sm:leading-[44px] md:leading-[52px] lg:leading-[60px] xl:leading-[72px] 2xl:leading-[84px]">
                                    Transforming Smiles, One Tooth at a Time
                                </p>
                                <p className="text-secondary2 xl:w-[737px] text-base md:text-lg lg:text-lg font-normal sm:mt-5 md:mt-5 md:leading-7">
                                    Experience personalized dental care tailored to enhance your smile’s health and beauty. Our expert team is committed to providing gentle, effective treatments that help you achieve the perfect smile with confidence.
                                </p>
                                <div>
                                    <button onClick={() => Navigate("/schedule-appointment")} className="bg-secondary md:py-3 py-1  px-4 md:px-10 mt-1 sm:mt-5 md:mt-10 font-bold text-base md:text-[20px] leading-[30px] rounded-xl text-white mb-4 md:mb-0">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                            <div className="m-auto md:ml-auto">
                                <div className="h-[340px] md:h-[600px] lg:h-[854px] w-full overflow-hidden">
                                    <div className="relative h-full lg:w-[500px] 2xl:w-[672px] md:min-w-[300px] overflow-hidden">
                                        <div className="max-w-6xl mx-auto">
                                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 h-full">
                                                <div className="relative overflow-hidden">
                                                    <div className="flex flex-col gap-4 animate-scroll-up">
                                                        {leftColumnImages.map((img, index) => (
                                                            <img
                                                                key={`left-1-${index}`}
                                                                src={img.src}
                                                                alt={`left-img-${index}`}
                                                                className={`lg:w-full ${img.height} rounded-xl object-cover flex-shrink-0`}
                                                            />
                                                        ))}
                                                        {leftColumnImages.map((img, index) => (
                                                            <img
                                                                key={`left-2-${index}`}
                                                                src={img.src}
                                                                alt={`left-img-duplicate-${index}`}
                                                                className={`lg:w-full ${img.height} rounded-xl object-cover flex-shrink-0`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="relative overflow-hidden">
                                                    <div className="flex flex-col gap-4 animate-scroll-down">
                                                        {rightColumnImages.map((img, index) => (
                                                            <img
                                                                key={`right-1-${index}`}
                                                                src={img.src}
                                                                alt={`right-img-${index}`}
                                                                className={`lg:w-full ${img.height} rounded-xl object-cover flex-shrink-0`}
                                                            />
                                                        ))}
                                                        {rightColumnImages.map((img, index) => (
                                                            <img
                                                                key={`right-2-${index}`}
                                                                src={img.src}
                                                                alt={`right-img-duplicate-${index}`}
                                                                className={`lg:w-full ${img.height} rounded-xl object-cover flex-shrink-0`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white  grid grid-cols-1 lg:grid-cols-2 md:mt-[50px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[120px] pt-5 px-4 2xl:px-0 md:pt-0 gap-2 md:gap-8">
                <div className="bg-gradient-to-b order-2 lg:order-1 from-[#CEE8ED00] to-[#CEE8ED] flex justify-center lg:justify-end items-center rounded-b-xl md:rounded-e-xl">
                    <img
                        src={Doctor}
                        alt="Doctor Not Found!"
                        className="object-contain w-full xl:pr-20 max-w-[350px]  max-h-[350px]  md:max-h-[429px] md:max-w-[429px] lg:max-h-[529px] lg:max-w-[529px]  xl:max-h-[596px] xl:max-w-[596px]"
                    />
                </div>
                <div className="flex flex-col order-1 lg:order-2 text-left ">
                    <div className="">
                        <p className="text-Primary font-light text-2xl lg:leading-[50px] xl:leading-75 sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
                            Meet
                        </p>
                        <p className="text-Primary font-bold xl:mt-3 text-3xl lg:leading-[50px] xl:leading-75 md:text-4xl lg:text-5xl 2xl:text-6xl ">
                            Dr. Neel Anderson
                        </p>
                        <p className="text-Primary mt-1 md:mt-2 lg:mt-3 font-light text-lg md:text-[22px]">
                            DDS, MSD, DABP
                        </p>
                        <p className="text-secondary2 text-base sm:text-lg md:text-lg text-left mt-2 md:mt-3 lg:mt-6 lg:max-w-[710px]">
                            Dr. Neel Anderson is a dedicated dental professional with over a decade of experience in providing exceptional patient care. Passionate about helping individuals achieve optimal oral health, Dr. Anderson combines clinical expertise with a compassionate approach. He believes in creating a comfortable and welcoming environment for all patients, ensuring they feel at ease during their visits. Committed to ongoing education, Dr. Anderson stays updated on the latest advancements in dentistry to offer the best treatments available. Whether it's a routine check-up or a complex procedure.
                        </p>
                    </div>
                    <div className="mt-2">
                        <div>
                            <button onClick={() => Navigate("/aboutus")} className="bg-secondary md:py-3 py-1 px-4 md:px-10 mt-1 md:mt-5 lg:mt-[30px] xl:mt-10 2xl:mt-[50px] font-bold text-base md:text-[20px] leading-[30px] rounded-xl text-white ">
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* services  */}
            <div>
                <div className="bg-white w-full lg:max-w-[1500px] mx-auto px-4 2xl:px-0 m-2 md:mt-[50px] lg:mt-[80px] xl:mt-[100px] 2xl :mt-[120px]" >
                    <h1 className="text-Primary text-3xl md:text-5xl xl:text-6xl mt-5 md:mt-0 md:leading-75 text-center font-bold ">Dentty Services</h1>
                    <p className="text-secondary2 text-base md:text-lg text-center leading-[27px] font-normal mt-1 md:mt-[6px]">At Dentty, we offer a wide range of dental treatments designed to cater to your individual oral health needs.</p>
                    <div className="w-full flex flex-col-reverse lg:flex-row gap-2 md:gap-6 mt-3 md:mt-5 lg:mt-8 xl:mt-10 2xl:mt-[50px]">
                        <div className="w-full lg:w-1/2 ">
                            <img
                                src={service1}
                                alt="Not Found"
                                className="w-full h-auto max-w-[450px] md:max-w-[600px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[740px] mx-auto lg:mx-0 object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-Primary max-w-[550px] md:max-w-[750px] mx-auto font-semibold text-left leading-[50px] text-2xl md:text-[28px] lg:text-[38px]">General Dentistry :</h2>
                            <p className="text-secondary2 mx-auto max-w-[550px] md:max-w-[750px] lg:mx-0 font-normal text-base text-left  md:text-lg xl:mt-3 2xl:mt-[22px]">
                                Our general dentistry services focus on maintaining your overall oral health. From routine cleanings and exams to preventive treatments, we ensure your teeth and gums stay in excellent condition.
                            </p>
                            <div className="grid grid-cols-1 text-left sm:max-w-[550px] md:max-w-[650px] sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 xl:gap-5 mx-auto mt-2 md:mt-2 lg:max-w-full lg:mx-0 xl:mt-8 2xl:mt-10">
                                {[
                                    "Dental Cleaning",
                                    "Cavity Fillings",
                                    "Root Canal Therapy",
                                    "Tooth Extractions",
                                    "Gum Disease Treatment",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-1 md:gap-3">
                                        <div className="2xl:w-[50px] 2xl:h-[50px] flex items-center rounded-full">
                                            <img src={Icon} alt="icon" className="size-[30px] xl:size-10 2xl:size-[50px]" />
                                        </div>
                                        <span className="text-Primary xl:pt-0 font-medium text-base leading-[30px] md:text-[22px]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Cosmetic Dentistry */}
                    <div className="w-full flex flex-col-reverse lg:flex-row gap-2 md:gap-6 mt-3 md:mt-5 lg:mt-8 xl:mt-10 2xl:mt-[50px]">
                        <div className="inline-block lg:hidden w-full lg:w-1/2">
                            <img
                                src={service2}
                                alt="Cosmetic Dentistry"
                                className="w-full h-auto max-w-[450px] md:max-w-[600px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[740px] object-cover rounded-lg shadow-md mx-auto"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-Primary max-w-[550px] md:max-w-[750px] mx-auto text-left font-semibold leading-[50px] text-2xl md:text-[28px] lg:text-[38px]">
                                Cosmetic Dentistry :
                            </h2>
                            <p className="text-secondary2 mx-auto max-w-[550px] md:max-w-[750px] lg:mx-0 lg:w-full font-normal text-base text-left md:text-lg xl:mt-3 2xl:mt-[22px]">
                                Enhance the appearance of your smile with our cosmetic dentistry solutions. Whether it's teeth whitening,
                                veneers, or bonding, we offer treatments designed to give you a radiant, confident smile.
                            </p>
                            <div className="grid grid-cols-1 text-left sm:max-w-[550px] md:max-w-[650px] sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 xl:gap-5 mx-auto mt-2 md:mt-2 lg:max-w-full lg:mx-0 xl:mt-8 2xl:mt-10">
                                {[
                                    "Teeth Whitening & Veneers",
                                    "Teeth Braces",
                                    "Dental Bonding",
                                    "Invisalign & Clear Aligners",
                                    "Smile Makeovers",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-1 md:gap-3">
                                        <div className="2xl:w-[50px] 2xl:h-[50px] flex items-center rounded-full">
                                            <img src={Icon} alt="icon" className="size-[30px] xl:size-10 2xl:size-[50px]" />
                                        </div>
                                        <span className="text-Primary xl:pt-0 font-medium text-base leading-[30px] md:text-[22px]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="hidden lg:inline w-full lg:w-1/2">
                            <img
                                src={service2}
                                alt="Cosmetic Dentistry"
                                className="w-full h-auto max-w-[450px] md:max-w-[600px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[740px] object-cover rounded-lg shadow-md mx-auto lg:mx-0"
                            />
                        </div>
                    </div>

                    {/* Surgical Dentistry */}
                    <div className="w-full flex flex-col-reverse lg:flex-row gap-2 md:gap-6 mt-3 md:mt-5 lg:mt-8 xl:mt-10 2xl:mt-[50px]">
                        <div className="w-full lg:w-1/2">
                            <img
                                src={service3}
                                alt="Surgical Dentistry"
                                className="w-full h-auto max-w-[450px] md:max-w-[600px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[740px] object-cover rounded-lg shadow-md mx-auto lg:mx-0"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-Primary mx-auto max-w-[550px] md:max-w-[750px] font-semibold leading-[50px] text-2xl md:text-[28px] lg:text-[38px] text-left">
                                Surgical Dentistry :
                            </h2>
                            <p className="text-secondary2 mx-auto max-w-[550px] md:max-w-[750px] lg:mx-0 font-normal text-base text-left md:text-lg xl:mt-3 2xl:mt-[22px]">
                                Our surgical dentistry services provide advanced solutions for more complex dental conditions. From wisdom teeth
                                extractions to dental implants, our skilled professionals ensure you receive the best care for optimal results.
                            </p>
                            <div className="grid grid-cols-1 text-left sm:max-w-[550px] md:max-w-[650px] sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 xl:gap-5 mx-auto mt-2 md:mt-2 lg:max-w-full lg:mx-0 xl:mt-8 2xl:mt-10">
                                {[
                                    "Dental Implants",
                                    "Wisdom Teeth Removal",
                                    "Bone Grafting",
                                    "Jaw Correction",
                                    "Sinus Lifts",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-1 md:gap-3">
                                        <div className="2xl:w-[50px] 2xl:h-[50px] flex items-center rounded-full">
                                            <img src={Icon} alt="icon" className="size-[30px] xl:size-10 2xl:size-[50px]" />
                                        </div>
                                        <span className="text-Primary xl:pt-0 font-medium text-base leading-[30px] md:text-[22px]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:max-w-[1500px] mx-auto md:mt-[50px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[120px] mt-5 ">
                        <div className="relative bg-[#f5fbfc] overflow-hidden w-full rounded-3xl mx-auto">
                            <img
                                src={ToothBg}
                                alt="tooth-shape"
                                className="absolute w-[180px] md:w-[250px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100"
                            />
                            <div className="relative text-center mt-5 md:my-[50px] lg:my-[100px]">
                                <h2 className="text-[22px] md:text-[40px] font-bold lg:text-6xl md:leading-[90px] text-Primary">
                                    <span className="text-[#008297]">Schedule </span>
                                    <span className="text-[#199cad] font-light">Your Appointment</span>
                                </h2>
                                <p className="text-secondary2 text-center w-full lg:max-w-[1212px] font-normal mx-auto mt-4 text-base md:text-lg px-4 2xl:p-0">
                                    Ready to take the first step toward a healthier, more confident smile? Our team is here to make your experience as comfortable and stress-free as possible. Whether you need a routine checkup, cosmetic enhancements, or specialized treatment, we’re committed to providing personalized care that meets your unique needs. Schedule your first visit today.                            </p>
                                <button onClick={() => Navigate("/schedule-appointment")} className="bg-secondary md:py-3 my-5 md:mb-0 py-1 px-4 md:px-10  md:mt-[34px] font-bold text-base md:text-[20px] leading-[30px] rounded-xl text-white ">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="w-full lg:max-w-[1500px] lg:px-4 2xl:px-0 my-5 md:mt-[50px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[120px] md:mb-[50px] lg:mb-[120px] relative">
                        <div className="mx-auto">
                            <h2 className="xl:text-6xl text-center text-Primary text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-[75px] font-bold mb-[6px]">
                                Latest Blog
                            </h2>
                            <p className="text-center font-normal leading-[27px] text-lg text-secondary2 mb-3 md:mb-6 lg:mb-8 xl:mb-10  2xl:mb-[50px]">
                                Your guide to achieving a healthy, beautiful smile with expert advice.
                            </p>
                            <div className="hidden">
                                <button
                                    ref={prevRef}
                                    disabled={isBeginning}
                                    className={`absolute hidden lg:inline-block lg:left-[-5px] xl:left-[-10px] 2xl:left-[-60px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition ${isBeginning ? 'opacity-40 cursor-not-allowed' : ''}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    ref={nextRef}
                                    disabled={isEnd}
                                    className={`absolute hidden lg:inline-block lg:right-[-5px] xl:right-[-10px] 2xl:right-[-60px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition ${isEnd ? 'opacity-40 cursor-not-allowed' : ''}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={1}
                                onSwiper={(swiper) => {
                                    setSwiperInstance(swiper);
                                    setTimeout(() => {
                                        swiper.params.navigation.prevEl = prevRef.current;
                                        swiper.params.navigation.nextEl = nextRef.current;
                                        swiper.navigation.init();
                                        swiper.navigation.update();
                                        setIsBeginning(swiper.isBeginning);
                                        setIsEnd(swiper.isEnd);
                                    });
                                }}
                                onSlideChange={handleSlideChange}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {blogData.map((blog, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="rounded bg-white cursor-pointer" onClick={() => Navigate(`/blog/${blog.title}`)}>
                                            <img
                                                src={blog.img}
                                                alt={blog.title}
                                                className="w-full max-w-[450px] mx-auto md:mx-0 md:max-w-[487px] object-cover rounded-xl"
                                            />
                                            <div>
                                                <h3 className="text-secondary text-left font-semibold mt-2 text-lg md:text-[22px] leading-[32px]">
                                                    {blog.title}
                                                </h3>
                                                <p className=" text-base md:text-lg md:leading-[27px] text-secondary2 mt-1 font-normal max-w-[500px] mx-auto md:w-full md:mx-0 text-justify">
                                                    {blog.description}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
