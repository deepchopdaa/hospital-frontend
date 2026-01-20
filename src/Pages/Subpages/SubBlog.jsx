import React, { useState } from 'react'
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import Img1 from "../../assets/image/blog/blogimg1.png";
import Img2 from "../../assets/image/blog/blogimg2.png";
import Img3 from "../../assets/image/blog/blogimg3.png";
import Img4 from "../../assets/image/blog/blogimg4.png";
import Img5 from "../../assets/image/blog/blogimg5.png";
import Img6 from "../../assets/image/blog/blogimg6.png";
import Line from "../../assets/image/comman/line.png";
import List1 from "../../assets/image/blog/list1.png";
import List2 from "../../assets/image/blog/list2.png";
import List3 from "../../assets/image/blog/list3.png";
import List4 from "../../assets/image/blog/list4.png";
import List5 from "../../assets/image/blog/list5.png";
import List6 from "../../assets/image/blog/list6.png";
import List7 from "../../assets/image/blog/list7.png";
import List8 from "../../assets/image/blog/list8.png";
import List9 from "../../assets/image/blog/list9.png";
import List10 from "../../assets/image/blog/list10.png";
import List11 from "../../assets/image/blog/list11.png";
import List12 from "../../assets/image/blog/list12.png";
const images = [Img1, Img2, Img3, Img4, Img5, Img6];

/* category */

const categories = [
    "All",
    "General Dentistry",
    "Cosmetic Dentistry",
    "Surgical Dentistry",
    "Denty Clinic",
];

const blogs = [
    {
        title: "The Impact Of Cosmetic Dentistry..",
        desc: "Cosmetic dentistry is often seen as a way to enhance one's appearance, but its benefits extend far beyond a perfect smile. Procedures such as teeth whitening, veneers...",
        img: List1,
        category: "Cosmetic Dentistry",
    },
    {
        title: "The Benefits Of Regular Dental Checkups",
        desc: "Routine dental checkups are more than just a cleaning—they're an essential part of maintaining your overall health. Early detection of dental issues, professional cleanings..",
        img: List2,
        category: "General Dentistry",
    },
    {
        title: "Top 5 Foods For Stronger Teeth",
        desc: "Rich in calcium and phosphates, milk, cheese, and yogurt help strengthen tooth enamel and promote healthy gums. Packed with vitamins and minerals like calcium, leafy greens..",
        img: List3,
        category: "General Dentistry",
    },
    {
        title: "Benefits Of Dental Implants Explained",
        desc: "Dental implants offer a permanent solution for missing teeth, improving both function and aesthetics. They prevent bone loss and support adjacent teeth, promoting overall oral health.",
        img: List4,
        category: "Surgical Dentistry",
    },
    {
        title: "How To Choose The Right Toothbrush",
        desc: "Selecting the right toothbrush can greatly impact your oral hygiene. Look for a brush with soft bristles and a comfortable grip. Electric toothbrushes can provide a deeper clean...",
        img: List5,
        category: "General Dentistry",
    },
    {
        title: "Modern Dental Implant Technology For...",
        desc: "What you eat has a direct impact on your oral health. Certain foods can help strengthen your teeth and prevent cavities, while others can contribute to decay. In this blog, we explore...",
        img: List6,
        category: "Surgical Dentistry",
    },
    {
        title: "Common Myths About Teeth Whitening",
        desc: "There are many misconceptions surrounding teeth whitening treatments. Some believe they damage enamel, while others think they provide immediate results...",
        img: List7,
        category: "Denty Clinic",
    },
    {
        title: "Tips for Maintaining Healthy Gums",
        desc: "Healthy gums are vital for overall oral health. Regular brushing and flossing, along with a balanced diet, can prevent gum disease. Routine dental visits also play a key role...",
        img: List8,
        category: "Surgical Dentistry",
    },
    {
        title: "What to Expect During Root Canal Therapy",
        desc: "Root canal therapy may seem intimidating, but it’s a common and effective procedure for saving damaged teeth. The process involves removing infected pulp, cleaning the tooth...",
        img: List9,
        category: "Cosmetic Dentistry",
    },
    {
        title: "How General Dentistry Protects Your Smile",
        desc: "Explore the role of general dentistry in maintaining and protecting your smile. Learn about cleanings, exams, and early treatments that can prevent more serious dental...",
        img: List10,
        category: "Denty Clinic",
    },
    {
        title: "Why Regular Dental Check-Ups Matter",
        desc: "Routine check-ups are at the core of general dentistry. Discover how regular dental exams can detect early signs of oral health issues and provide treatments that keep your...",
        img: List11,
        category: "Cosmetic Dentistry",
    },
    {
        title: "Comprehensive Care with General Dentistry",
        desc: "General dentistry offers a wide range of services to keep your teeth and gums healthy. From routine cleanings to early detection of issues, learn how comprehensive care ensures...",
        img: List12,
        category: "Denty Clinic",
    },
];



const SubBlog = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [view, setview] = useState(false)

    const filteredBlogs = blogs.filter((blog) => {
        const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
        const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    return (
        <>
            {/* main section */}
            <div className="bg-Primary px-4 2xl:px-0">
                <div className="w-full lg:max-w-[1500px] mx-auto">
                    <div className="flex flex-col lg:flex-row h-[600px] md:h-[800px] items-center justify-between">

                        <div className="m-auto xl:w-[786px] text-left min-h-[250px]">
                            <p className="text-Primary  font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-[70px] mt-3 md:mt-0 md:leading-[60px] lg:leading-75 xl:leading-90">
                                Dental Insights & Tips
                            </p>
                            <img src={Line} alt="not found" className="my-3" />
                            <p className="text-secondary2 xl:w-[737px] text-base md:text-base lg:text-lg font-normal md:mt-5  md:leading-7">
                                Stay informed with our latest articles on dental health, treatments, and tips for maintaining a beautiful smile. Our blog is your resource for expert advice, updates on dental innovations, and insights into common oral health issues. Join us on the journey to better oral care and discover how to keep your smile shining bright!
                            </p>

                        </div>
                        {/* Image Scroll Section */}
                        <div className="m-auto md:ml-auto">
                            <div className=" w-full overflow-hidden">
                                <div className="h-[340px] lg:h-[800px] overflow-hidden relative md:w-[500px] lg:w-[500px] 2xl:w-[672px] mx-auto">
                                    <div className="animate-verticalScroll flex flex-col gap-4 will-change-transform">
                                        <div className="max-w-6xl mx-auto ">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-4">
                                                    <img src={images[0]} alt="img1" className="w-full h-[327px] rounded-xl object-cover" />
                                                    <img src={images[2]} alt="img3" className="w-full h-[192px] rounded-xl object-cover" />
                                                    <img src={images[4]} alt="img5" className="w-full h-[380px] rounded-xl object-cover" />
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <img src={images[1]} alt="img2" className="w-full h-[192px] rounded-xl object-cover" />
                                                    <img src={images[3]} alt="img4" className="w-full h-[380px] rounded-xl object-cover" />
                                                    <img src={images[5]} alt="img6" className="w-full h-[327px] rounded-xl object-cover" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="max-w-6xl mx-auto ">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-4">
                                                    <img src={images[0]} alt="img1" className="w-full h-[327px] rounded-xl object-cover" />
                                                    <img src={images[2]} alt="img3" className="w-full h-[192px] rounded-xl object-cover" />
                                                    <img src={images[4]} alt="img5" className="w-full h-[380px] rounded-xl object-cover" />
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <img src={images[1]} alt="img2" className="w-full h-[192px] rounded-xl object-cover" />
                                                    <img src={images[3]} alt="img4" className="w-full h-[380px] rounded-xl object-cover" />
                                                    <img src={images[5]} alt="img6" className="w-full h-[327px] rounded-xl object-cover" />
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

            {/* blog section start */}

            <div className="bg-white px-4 2xl:px-0">

                <div className='w-full lg:max-w-[1500px] mx-auto '>
                    <div className=" bg-[#eaf7f9] rounded-xl mt-5 md:mt-[50px]">

                        <div className=" bg-[#eaf7f9] relative rounded-xl mt-5 md:mt-[50px]">

                            <div className="flex flex-col  lg:flex-row  lg:items-center lg:justify-between gap-4">

                                <div className="flex lg:hidden  items-center p-[10px] justify-between w-full">
                                    <button
                                        onClick={() => setMenuOpen(!menuOpen)}
                                        className="text-secondary text-2xl"
                                    >
                                        {menuOpen ? <FiX /> : <FiMenu />}
                                    </button>


                                    <div className="relative w-[90%] ">
                                        <input
                                            type="text"
                                            placeholder="Search blog here.."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="w-full bg-Primary border-[1px] h-[42px] border-[#D1E9ED] text-[#0097a7] placeholder-[#86cbd8] text-sm rounded-md pl-4 pr-10 py-2 focus:outline-none"
                                        />
                                        <FiSearch className="absolute top-1/2 right-3 text-secondary transform -translate-y-1/2 w-4 h-4" />
                                    </div>
                                </div>


                                <div className="hidden lg:flex flex-wrap text-nowrap p-[10px] lg:flex-nowrap items-center justify-around gap-[20px] w-full">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveCategory(cat)}
                                            className={`text-sm md:text-base lg:text-sm xl:text-xl leading-[30px] font-medium px-[30px] py-2 rounded-md  text-center border transition
                                                                            ${activeCategory === cat
                                                    ? "bg-secondary font-semibold rounded-xl text-white"
                                                    : "bg-[#D1E9ED] text-Primary border border-secondary"
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}


                                    <div className="relative flex-grow sm:flex-grow-0 md:text-xl leading-[30px] sm:w-[230px] md:w-[400px]">
                                        <input
                                            type="text"
                                            placeholder="Search blog here.."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="w-full bg-Primary border-[1px] h-[42px] text-lg  border-[#D1E9ED] text-[#0097a7] placeholder-[#86cbd8]  rounded-md pl-5 pr-10 py-2 focus:outline-none"
                                        />
                                        <FiSearch className="absolute top-1/2 right-3 text-secondary transform -translate-y-1/2 w-5 h-5" />
                                    </div>
                                </div>



                                {menuOpen && (
                                    <div className="flex flex-col gap-2 mt-[60px] w-full bg-[#D1DEED]  absolute lg:hidden">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => {
                                                    setActiveCategory(cat);
                                                    setMenuOpen(false);
                                                }}
                                                className={`text-sm px-4 py-2 rounded-md text-center border transition font-medium
                                            ${activeCategory === cat
                                                        ? "bg-secondary w-full text-white"
                                                        : "bg-[#D1E9ED] w-full text-Primary border border-secondary"
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>


                    {/* Blog listing */}

                    <div className=" grid grid-cols-1 mt-2 md:mt-5  mb-5  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                        {filteredBlogs.map((blog, idx) => (
                            <div
                                key={idx}
                                className="rounded  bg-white "
                            >
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    className="w-full object-cover rounded-xl"
                                />
                                <div className="mt-1 md:mt-3">
                                    <h3 className="text-secondary font-semibold  text-left text-lg md:text-[22px] leading-[32px] ">
                                        {blog.title}
                                    </h3>
                                    <p className="text-base md:text-lg md:leading-[27px] text-secondary2  text-justify">
                                        {blog.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* blog section end */}

                    {/* load button */}
                    {
                        activeCategory === "All" ? (
                            <div className="text-center mt-2 mb-5 md:mb-[50px] lg:mb-[120px]">
                                <button
                                    onClick={() => setview(!view)}
                                    className="bg-secondary md:py-3 py-1 px-4 md:px-10 mt-1 md:mt-[50px] font-bold text-base md:text-[20px] leading-[30px] rounded-xl text-white"
                                >
                                    {view ? "Show Less" : "Load More"}
                                </button>
                            </div>
                        ) : (
                            <div className="mb-5  md:mb-[50px] lg:mb-[120px]"></div>
                        )
                    }
                </div >
            </div>



        </>
    )
}

export default SubBlog
