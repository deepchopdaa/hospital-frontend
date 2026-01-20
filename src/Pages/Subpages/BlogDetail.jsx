import React, { useRef, useState } from "react";
import allBlogs from '../../json/blog_detail_jsons.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useNavigate, useParams } from "react-router-dom";
import BgMail1 from "../../assets/image/blog/bgmail1.png";
import BgMail2 from "../../assets/image/blog/bgmail2.png";
import BgSub1 from "../../assets/image/blog/bgsub1.png";
import BgSub2 from "../../assets/image/blog/bgsub2.png";
import BgSub3 from "../../assets/image/blog/bgsub3.png";
import BgSub4 from "../../assets/image/blog/bgsub4.png";
import blog1 from "../../assets/image/blog/wisdomb1.png";
import blog2 from "../../assets/image/blog/wisdomb2.png";
import blog3 from "../../assets/image/blog/wisdomb3.png";
import blog4 from "../../assets/image/blog/subblog1_2.png"
import blog5 from "../../assets/image/blog/subblog1_3.png"

//  Image Map
const imageMap = {
    "bgmail1.png": BgMail1,
    "bgmail2.png": BgMail2,
    "bgsub1.png": BgSub1,
    "bgsub2.png": BgSub2,
    "bgsub3.png": BgSub3,
    "bgsub4.png": BgSub4
};

const Recentpost = [
    {
        id: 1,
        image: "bgsub1.png",
        title: "The Importance Of Flossing: Tips For A Successful Routine",
        category: "General Dentistry"
    },
    {
        id: 2,
        image: "bgsub2.png",
        title: "Modern Dental Implant Technology For Successful Implant Treatment",
        category: "Surgical Dentistry"
    },
    {
        id: 3,
        image: "bgsub3.png",
        title: "The Benefits Of Scaling And Root Planing For Gum Health",
        category: "Denty Clinic"
    },
    {
        id: 4,
        image: "bgsub4.png",
        title: "How To Choose A Cosmetic Dentist In Greenwood Village",
        category: "Cosmetic Dentistry"
    },
    {
        id: 5,
        image: "bgsub2.png",
        title: "How To Choose A surgical Dentist In Rebemwood Village",
        category: "General Dentistry"
    }
];



const RelatedBlog = [
    {
        img: blog1,
        title: "5 Myths About Wisdom Teeth Removal",
        description:
            "Discover the truth behind common misconceptions about wisdom teeth removal. We debunk myths related to pain, recovery, and the necessity of the procedure, providing..",
        category: "Surgical Dentistry",

    },
    {
        img: blog2,
        title: "Choosing the Right Dental Specialist",
        description:
            "Learn how to select the best dental expert for your needs. From general dentistry to orthodontics and oral surgery, find out who suits your condition best...",
        category: "General Dentistry",
    },
    {
        img: blog3,
        title: "Understanding Wisdom Teeth Development",
        description:
            "Wisdom teeth removal is a surgical procedure to extract the third molars located at the back of the mouth. Often necessary when these teeth cause discomfort...",
        category: "Cosmetic Dentistry",
    },
    {
        img: blog4,
        title: "How General Dentistry Protects Your Smile",
        description:
            "Explore the role of general dentistry in maintaining and protecting your smile. Learn about cleanings, exams, and early treatments that can prevent more serious dental issues.",
    },
    {
        img: blog5,
        title: "Top 5 Foods for Stronger Teeth",
        description:
            "This blog highlights the top five foods that can help strengthen your teeth and promote overall oral health. Discover how nutrition plays a vital role in dental care.",
    },
];


//  Blog Component
const BlogDetail = () => {
    const { title } = useParams();
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const Navigate = useNavigate("/")
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    /* slider slide change function */
    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const decodedtitle = decodeURIComponent(title)?.toLowerCase().trim();

    /* filter blogs */
    function getBlogsByCategory(categoryParam) {
        const filterblogs = allBlogs.filter(blog =>
            blog?.main?.title.toLowerCase().trim() == decodedtitle,
        );
        console.log(filterblogs, "filter blog")
        console.log(categoryParam, "category param")
        return filterblogs
    }

    console.log(title, "title")
    const randomBlog = getBlogsByCategory(title)[0];
    const main = randomBlog?.main;
    const sections = randomBlog?.sections;

    return (
        <div className="w-full lg:max-w-[1500px] mx-auto px-4 2xl:px-0 text-left  md:mt-[50px] lg:mt-[120px] text-[#1d1d1d]">
            <div className="flex flex-col xl:flex-row gap-[14px]">
                <div className="w-full xl:w-[993px]">
                    <h1 className="text-2xl md:text-[38px] mb-[10px] md:leading-[48px] font-bold text-[#00849A]">
                        {main?.title}
                    </h1>
                    <p className="text-base md:text-[20px] leading-[30px] md:mt-[10px] mt-[5px] text-[#21A0B6]">
                        {main?.author} | {main?.date} | {main?.category}
                    </p>
                    <img
                        src={imageMap[main?.image]}
                        alt="Main"
                        className="rounded-lg w-full md:max-w-[900px] md:mx-auto lg:max-w-[1000px] h-auto md:mt-[22px]"
                    />
                    <p className="whitespace-pre-line text-base md:text-lg leading-[27px] md:mt-[22px] mt-[5px] font-normal">
                        {main?.intro}
                    </p>
                    {sections?.map((section, idx) => (
                        <div key={idx} className="mt:mb-[30px]">
                            {section.heading && (
                                <h2 className="text-lg md:text-[32px] font-medium md:mt-[30px] mt-5 md:leading-[48px] pl-2 text-[#21A0B6]">
                                    • {section.heading}
                                </h2>
                            )}
                            {section.paragraphs &&
                                section.paragraphs.map((para, i) => (
                                    <p key={i} className="text-base md:text-lg leading-[27px] md:mt-3 mt-1">
                                        {para}
                                    </p>
                                ))}
                            {section.subpoints && (
                                <ul className="list-disc ml-6 space-y-2">
                                    {section.subpoints.map((point, i) => (
                                        <li key={i} className="text-base md:text-lg leading-[27px] font-normal">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {section.image && (
                                <img
                                    src={imageMap[section.image]}
                                    alt="Blog Section"
                                    className="rounded-lg w-full md:max-w-[900px] md:mx-auto lg:max-w-[1000px] h-auto md:mt-3 mt-1"
                                />
                            )}
                            {section.list && (
                                <ul className="list-disc ml-5 space-y-2 mt-2">
                                    {section.list.map((point, i) => (
                                        <li key={i} className="text-base md:text-lg leading-[27px] font-normal">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* Sidebar */}
                <div className="w-full xl:w-[493px] border-[1px]  border-[#00849A] rounded-lg max-h-[748px] sticky top-32 hidden xl:inline">
                    <div className="mx-[10px] md:mx-[30px]">
                        <h3 className="font-bold md:text-[22px] md:leading-[32px] text-[#00849A] text-lg mt-2 xl:mt-[22px]">
                            Recent Posts
                        </h3>
                        <ul className="">
                            {Recentpost?.map((post) => (
                                <li
                                    key={post.id}
                                    className="flex border-[1px] md:min-w-[433px] rounded-md text-left border-[#D1E9ED] h-[125px]  bg-Primary mt-1 md:mt-[10px]"
                                >
                                    <img
                                        src={imageMap[post?.image]}
                                        alt={post.title}
                                        className="w-[108px] h-[108px] m-1 md:m-[8px] object-cover rounded-md"
                                    />
                                    <div className="flex flex-col mt-1 mr-1 md:mt-[10px] md:mr-[10px] justify-between">
                                        <p className="font-medium xl:text-base 2xl:text-[22px] leading-[30px] text-[#21A0B6]">
                                            {post?.title}
                                        </p>
                                        <button className="text-[#00849A] underline text-lg leading-[30px] font-medium self-end" onClick={() => Navigate(`/blog/${post.title}`)}>
                                            Read More
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full lg:max-w-[1500px] mx-auto lg:px-4 2xl:px-0 my-5 md:my-[50px] lg:my-[80px] xl:my-[100px] 2xl:my-[120px] relative">
                    <div className="text-left mx-auto">
                        <h2 className="md:text-4xl lg:text-5xl xl:text-6xl text-center text-Primary text-2xl leading-10 md:leading-[40px] xl:leading-[75px] font-bold">
                            Related Blog
                        </h2>
                        <p className="text-center font-normal text-lg leading-[27px] text-secondary2 mt-[10px] mb-3 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-[50px]">
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
                                // Setup navigation
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
                            {RelatedBlog.map((blog, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="rounded bg-white cursor-pointer" onClick={() => Navigate(`/blog/${blog.title}`)}>
                                        <img
                                            src={blog.img}
                                            alt={blog.title}
                                            className="w-full max-w-[450px] mx-auto md:mx-0 md:max-w-[487px] object-cover rounded-xl"
                                        />
                                        <div>
                                            <h3 className="text-secondary text-left max-w-[500px] mx-auto font-semibold mt-2 md:mt-3 text-lg md:text-[22px] leading-[32px]">
                                                {blog.title}
                                            </h3>
                                            <p className="text-base md:text-lg md:leading-[27px] text-secondary2 mt-1 font-normal max-w-[500px] mx-auto md:w-full md:mx-0 text-justify">
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
    );
};

export default BlogDetail;
