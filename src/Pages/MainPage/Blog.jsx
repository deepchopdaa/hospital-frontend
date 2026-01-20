import React, { useEffect, useState } from 'react';
import Line from "../../assets/image/comman/line.png";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import blogs from "../../json/BlogsJson";
import Img1 from "../../assets/image/blog/blogimg1.png";
import Img2 from "../../assets/image/blog/blogimg2.png";
import Img3 from "../../assets/image/blog/blogimg3.png";
import Img4 from "../../assets/image/blog/blogimg4.png";
import Img5 from "../../assets/image/blog/blogimg5.png";
import Img6 from "../../assets/image/blog/blogimg6.png";

/* image scrolling images */
const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const categories = [
    "All",
    "General Dentistry",
    "Cosmetic Dentistry",
    "Surgical Dentistry",
    "Denty Clinic",
];

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [visibleBlogs, setVisibleBlogs] = useState(9);


    /* blog pagination logic */
    const currentBlogs = filteredBlogs.slice(0, visibleBlogs);
    const loadMoreBlogs = () => {
        setVisibleBlogs((prev) => prev + 6);
    };

    /* left column images */
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

    /* useEffect */
    useEffect(() => {
        const lowerSearch = search.toLowerCase().trim();
        const categoryFilteredAndSearched = blogs.filter(
            (blog) =>
                (activeCategory === "All" || blog.category === activeCategory) &&
                (blog.title.toLowerCase().includes(lowerSearch)
                ));
        setFilteredBlogs(lowerSearch ? categoryFilteredAndSearched : categoryFilteredAndSearched);
        setVisibleBlogs(9)
    }, [search, activeCategory]);

    return (
        <>

            {/* main section */}
            <div className="bg-white">
                <div className="bg-Primary px-4 2xl:px-0">
                    <div className="w-full max-w-[1500px] mx-auto">
                        <div className="flex flex-col md:flex-row h-[600px] lg:h-[854px] items-center justify-between">
                            <div className="m-auto xl:w-[786px] text-left md:pr-5 min-h-[250px]">

                                <p className="text-Primary font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[64px] 2xl:text-[70px] mt-3 md:mt-0 leading-[38px] sm:leading-[44px] md:leading-[52px] lg:leading-[60px] xl:leading-[72px] 2xl:leading-[84px]">
                                    Dental Insights & Tips
                                </p>
                                <img src={Line} alt="not found" className="my-3" />
                                <p className="text-secondary2 xl:w-[737px] text-base md:text-lg lg:text-lg font-normal md:mt-5 md:leading-7">
                                    Stay informed with our latest articles on dental health, treatments, and tips for maintaining a beautiful smile. Our blog is your resource for expert advice, updates on dental innovations, and insights into common oral health issues. Join us on the journey to better oral care and discover how to keep your smile shining bright!
                                </p>
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

                <div className="w-full lg:max-w-[1500px] mx-auto mt-10 px-4 2xl:px-0 md:mt-[50px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[120px] md:py-0">
                    <h2 className="text-center text-Primary text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl md:leading-10 xl:leading-[75px] font-bold ">
                        Latest Blogs
                    </h2>
                    <p className="text-center font-normal text-lg leading-[27px] text-secondary2 mt-1 md:mt-[10px]">
                        Your guide to achieving a healthy, beautiful smile with expert advice.
                    </p>
                    <div className="bg-[#A3D2DB33] relative rounded-xl mt-5 md:mt-[30px] lg:mt-[40px] xl:mt-[50px]">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div className="flex flex-col gap-3 lg:hidden px-[10px] py-2">

                                <div className="flex overflow-x-auto gap-3 px-2 sm:px-4 no-scrollbar">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveCategory(cat)}
                                            className={`text-sm sm:text-base whitespace-nowrap leading-[28px] font-medium px-3 py-[6px] md:px-4 md:py-2 rounded-[12px] border transition
                                                ${activeCategory === cat
                                                    ? "bg-secondary font-semibold text-white"
                                                    : "bg-[#A3D2DB33] text-Primary border border-[#A3D2DB]"
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                                <div className="relative w-full">
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


                            <div className="hidden lg:flex flex-wrap text-nowrap px-[20px] py-[10px] lg:flex-nowrap items-center justify-around gap-[20px] w-full">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`text-sm md:text-base lg:text-sm xl:text-xl leading-[30px] font-medium px-[30px] py-2 rounded-md text-center border transition
                                                    ${activeCategory === cat
                                                ? "bg-secondary font-semibold rounded-xl text-white"
                                                : "bg-[#A3D2DB33] text-Primary border border-[#A3D2DB]"
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
                                        className="w-full bg-Primary border-[1px] h-[42px] text-lg border-[#D1E9ED] text-[#0097a7] placeholder-[#86cbd8] rounded-md pl-5 pr-10 py-2 focus:outline-none"
                                    />
                                    <FiSearch className="absolute top-1/2 right-3 text-secondary transform -translate-y-1/2 w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-5 md:mt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {currentBlogs.length === 0 ? (
                            <div className="col-span-full text-center text-xl text-gray-500 font-semibold mb-5 md:mb-[50px] xl:mb-[120px]">
                                No blogs found.
                            </div>
                        ) : (
                            currentBlogs.map((blog, idx) => (
                                <div
                                    key={idx}
                                    className="rounded bg-white cursor-pointer flex flex-col items-center text-left"
                                    onClick={() => navigate(`/blog/${encodeURIComponent(blog.title)}`)}
                                >
                                    <img
                                        src={blog.img}
                                        alt={blog.title}
                                        className="w-full max-w-[450px] xl:max-w-full object-cover rounded-xl mx-auto"
                                    />
                                    <div className="mt-1 md:mt-3 max-w-[450px] lg:max-w-full">
                                        <h3 className="text-secondary font-semibold text-lg md:text-[22px] md:leading-[32px]">
                                            {blog.title}
                                        </h3>
                                        <p className="text-base md:text-lg font-normal md:leading-[27px] text-secondary2 mt-1 text-left">
                                            {blog.desc}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {filteredBlogs.length > 9 && visibleBlogs < filteredBlogs.length ? (
                        <div className="text-center mb-5 md:mb-[50px] lg:mb-[80px] xl:mb-[100px] 2xl:mb-[120px]">
                            <button
                                onClick={loadMoreBlogs}
                                className="bg-secondary md:py-3 py-1 px-4 md:px-10 mt-2 md:mt-5 lg:mt-7 xl:mt-10 font-bold text-base md:text-[20px] leading-[30px] rounded-xl text-white"
                            >
                                Load More
                            </button>
                        </div>
                    ) : <div className='mb-5 md:mb-[50px] lg:mb-[80px] xl:mb-[100px] 2xl:mb-[120px]'>
                    </div>}
                </div>
            </div>
        </>
    );
}

export default Blog;
