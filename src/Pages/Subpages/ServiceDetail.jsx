// ServiceDetail.js
import { useNavigate, useParams } from 'react-router-dom';
import { ServicesData } from "../../json/ServicesData";
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CompareImage from "react-compare-image";

/* iamge import */
import dentalblog1 from "../../assets/image/blog/dental1.png";
import dentalblog2 from "../../assets/image/blog/dental2.png";
import dentalblog3 from "../../assets/image/blog/dental3.png";
import teethblog1 from "../../assets/image/blog/teeth1blog1.png"
import teethblog2 from "../../assets/image/blog/teethblog2.png"
import teethblog3 from "../../assets/image/blog/teethblog3.png"
import wisdomblog1 from "../../assets/image/blog/wisdomblog1.png"
import wisdomblog2 from "../../assets/image/blog/wisdomblog2.png"
import wisdomblog3 from "../../assets/image/blog/wisdomblog3.png"
import blog4 from "../../assets/image/blog/list10.png"
import blog5 from "../../assets/image/blog/list9.png"
import ToothBg from "../../assets/image/comman/teetth.png";
import Doctor1 from "../../assets/image/comman/doctor1.png";
import Doctor2 from "../../assets/image/comman/doctor2.png";
import quoteIcon from "../../assets/image/comman/reviewicon.png";
import user1 from "../../assets/image/services/user1.png"
import user2 from "../../assets/image/services/user2.png"
import user3 from "../../assets/image/services/user3.png";

const ServiceDetail = () => {
    /* declate states */
    const Navigate = useNavigate();
    const { slug } = useParams();
    const [service, setService] = useState(null);
    const [blogs, setblogs] = useState(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        const foundService = ServicesData.find(s => s.slug === slug);
        setService(foundService);
    }, [slug]);

    // Categorize blog data by slug
    useEffect(() => {
        const detailCleaning = ["dental-cleaning", "cavity-fillings", "root-canal-therapy", "tooth-extraction", "gum-disease-treatment"];
        const teethBraces = ["teeth-braces", "dental-bonding", "invisalign-clear-aligners", "smile-makeovers", "teeth-whitening-veneers"];
        const wisdomTeeth = ["wisdom-teeth-removal", "dental-implants", "bone-grafting", "jaw-correction", "sinus-lifts"];

        if (detailCleaning.includes(slug)) {
            setblogs(dentalData);
        } else if (teethBraces.includes(slug)) {
            setblogs(teethData);
        } else if (wisdomTeeth.includes(slug)) {
            setblogs(wisdomData);
        } else {
            setblogs(null);
        }
    }, [slug]);

    /* for change slide */
    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    /* blog data json */
    const wisdomData = [
        {
            img: wisdomblog1,
            title: "5 Myths About Wisdom Teeth Removal ",
            description:
                "Discover the truth behind common misconceptions about wisdom teeth removal. We debunk myths related to pain, recovery, and the necessity of the procedure, providing..",
        },
        {
            img: wisdomblog2,
            title: "Choosing the Right Specialist",
            description:
                "Learn how to manage your recovery after wisdom teeth removal with our comprehensive guide. Discover essential tips for pain relief, swelling reduction, and maintaining..",
        },
        {
            img: wisdomblog3,
            title: "Understanding Wisdom Teeth Development",
            description:
                "Wisdom teeth removal is a surgical procedure to extract the third molars located at the back of the mouth. Often necessary when these teeth cause discomfort...",
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

    const dentalData = [
        {
            img: dentalblog1,
            title: "Understanding the Basics of General Dentistry",
            description:
                "Learn what general dentistry entails, from common procedures like fillings and cleanings to preventive treatments. Discover how routine dental care is crucial..",
        },
        {
            img: dentalblog2,
            title: "Your First Step to a Healthy Smile",
            description:
                "General dentistry is the foundation of a healthy smile. Find out why regular dental visits, cleanings, and preventive care are essential in maintaining strong teeth and gums...",
        },
        {
            img: dentalblog3,
            title: "Top 5 Foods for Stronger Teeth",
            description:
                "Rich in calcium and phosphates, milk, cheese, and yogurt help strengthen tooth enamel and promote healthy gums. Packed with vitamins and minerals like calcium, leafy greens..",
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

    const teethData = [
        {
            img: teethblog1,
            title: "What to Expect Before, During, & After Braces",
            description:
                "Braces can transform your smile, but the journey requires commitment. Learn what to expect at every stage of your braces treatment, from the initial consultation to aftercare...",
        },
        {
            img: teethblog2,
            title: "Clear Aligners vs. Traditional Braces",
            description:
                "With so many orthodontic options, choosing between clear aligners and traditional braces can be tough. Explore the pros and cons of each to help you decide the best treatment for...",
        },
        {
            img: teethblog3,
            title: "Braces: Better Oral Health, Greater Confidence",
            description:
                "Braces do more than straighten your teeth; they enhance your overall oral health. Discover how braces prevent cavities, gum disease, and bite issues, all while boosting your confidence...",
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

    /* reviews json  */
    const reviewData = [{
        name: "David Brown",
        image: user1,
        review: `I recently had my dental cleaning at Dentty, and it was a fantastic experience! 
                The staff was incredibly friendly and made me feel comfortable throughout the process. 
                My teeth feel cleaner than ever, and I appreciated the thorough examination. 
                I’ll definitely be back for my next cleaning!`
    }, {
        name: "Daniel Miller",
        image: user2,
        review: `I never thought getting braces as an adult would be so life-changing! The team made the entire process comfortable, and the results are incredible. My teeth are perfectly aligned, and I can smile confidently again. The braces were discreet, and the care I received throughout was exceptional. I highly recommend this treatment for anyone looking to improve both their appearance and oral health.`,
    }, {
        name: "Emily Jon ",
        image: user3,
        review: `I was really nervous about getting my wisdom teeth removed, but the entire process was much smoother than I expected. The dentist explained everything clearly and made sure I was comfortable throughout the procedure. The recovery was quicker than I anticipated, and the follow-up care was excellent.`,
    }];

    console.log(blogs)

    if (!service) return <div className="text-center py-10">Service Not Found</div>;

    return (
        <div className="px-4 2xl:px-0">
            <div className="w-full lg:max-w-[1500px] mx-auto md:my-[50px] lg:my-20 xl:my-[120px] mt-5 text-left text-secondary2">
                <h2 className="text-center text-[#00849A] text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight lg:leading-[75px] font-semibold ">
                    {service.title}
                </h2>
                <p className="text-center text-secondary2 text-base md:text-lg lg:text-[22px] leading-relaxed font-normal mt-1 md:mt-[10px] mx-auto">
                    {service?.desc}
                </p>
                <div className="w-full lg:max-w-[1500px] mx-auto mt-5 md:mt-[30px] 2xl:mt-[50px] text-[#333]">
                    {service.sections.map((section, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${section.reverse ? "xl:flex-row-reverse" : "xl:flex-row"} gap-4 md:gap-5 lg:gap-8 xl:gap-10 2xl:gap-[50px]  mb-5 md:mb-10 lg:mb-15 2xl:mb-20 items-center xl:items-start text-center xl:text-left`}
                        >
                            <div className="w-full order-2 xl:order-1 xl:w-1/2 flex justify-center xl:justify-start">
                                <img
                                    src={section.image}
                                    alt={section.heading}
                                    className={`rounded-xl w-full h-auto max-h-[350px] md:max-h-[435px] lg:max-h-[450px] max-w-[350px] md:max-w-[750px] lg:max-w-[950px] object-cover ${section.imageShadow || ""}`}
                                />
                            </div>
                            <div className="w-full xl:w-1/2 order-1 xl:order-2 flex flex-col items-center xl:items-start">
                                <h3 className="text-[#00849A] text-xl md:text-2xl lg:text-3xl 2xl:text-[38px] font-bold xl:leading-[48px] mt-0">
                                    {section.heading}
                                </h3>
                                {section.content && (
                                    <p className="w-full xl:max-w-[720px] text-secondary2 text-base md:text-lg lg:text-[18px] font-normal md:mt-2 lg:mt-3 2xl:mt-5 leading-relaxed whitespace-pre-line">
                                        {section.content}
                                    </p>
                                )}

                                {section.label && (
                                    <p className="text-[#00849A] text-lg md:text-[20px] font-bold lg:text-[22px] leading-relaxed whitespace-pre-line md:mt-2 lg:mt-3 xl:mt-3 2xl:mt-5">
                                        {section.label}
                                    </p>
                                )}
                                {section.secondlable && (
                                    <p className="text-secondary2 text-base md:text-lg mt-1 md:mt-2 lg:mt-3 xl:mt-4 2xl:mt-5 font-normal lg:text-[18px] leading-relaxed whitespace-pre-line">
                                        {section.secondlable}
                                    </p>
                                )}
                                {section.list && (
                                    <ul className="xl:max-w-[720px] text-secondary2 md:mt-3 pl-7 md:pl-10 xl:pl-7 gap-y-2 gap-x-10
                                        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1
                                        text-base sm:text-base lg:text-[18px] leading-relaxed text-left">
                                        {section.list.map((item, i) => (
                                            <li key={i} className="relative pl-5 text-left before:content-['•'] before:absolute before:left-0 before:text-secondary2">
                                                <span className="font-normal text-base md:text-lg text-secondary2">{item.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}


                                {section.extraHeading && (
                                    <>
                                        <h4 className="text-[#00849A] font-semibold text-lg sm:text-xl lg:text-[22px] mt-2 md:mt-3 xl:mt-5">
                                            {section.extraHeading}
                                        </h4>
                                        <p className="text-secondary2 md:mt-3 mt-1 text-base sm:text-lg lg:text-[18px] leading-relaxed whitespace-pre-line">
                                            {section.extraContent}
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="w-full lg:max-w-[1500px] mx-auto lg:px-4 2xl:px-0 mt-8 md:mb-[50px] lg:mb-[120px] relative">
                    <div className="text-left mx-auto">
                        <h2 className="text-center text-Primary text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-10 xl:leading-[75px] font-bold">
                            {service.title} Blog
                        </h2>
                        <p className="text-center font-normal text-lg leading-[27px] text-secondary2 mb-3 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-[50px]   mt-[10px]">
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
                            {blogs?.map((blog, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="rounded bg-white cursor-pointer" onClick={() => Navigate(`/blog/${blog.title}`)}>
                                        <img
                                            src={blog.img}
                                            alt={blog.title}
                                            className="w-full max-w-[450px] mx-auto md:mx-0 md:max-w-[487px] object-cover rounded-xl"
                                        />
                                        <div>
                                            <h3 className="text-secondary max-w-[500px] mx-auto text-left font-semibold mt-2 md:mt-3 text-lg md:text-[22px] leading-[32px]">
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

            {/* review section */}
            <div className="bg-[#f7fdfe] mt-5 md:mt-[50px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[120]">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                >
                    {reviewData.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="max-w-2xl mx-auto w-full py-10 md:pt-[50px] md:pb-[50px] lg:py-[70px] xl:py-20 2xl:py-[100px] p-4 xl:p-0 lg:max-w-[1143px]">
                                <div className="w-16 h-16 md:w-24 md:h-24 lg:h-[133px] lg:w-[133px] rounded-full mx-auto border-2 border-[#00849A] overflow-hidden">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-[#00849A] text-xl md:text-2xl lg:text-3xl font-semibold text-center mt-2 md:mt-5">
                                    {review.name}
                                </h3>
                                <div className="flex justify-center mt-3 md:mt-6 lg:mt-[30px]">
                                    <p className="text-center text-gray-700 text-base md:text-lg leading-6 md:leading-7 max-w-[950px] lg:max-w-[1088px] relative">
                                        <img
                                            src={quoteIcon}
                                            alt="quote"
                                            className="absolute left-[-25px] top-0 w-5 md:w-7 opacity-75"
                                        />
                                        {review.review}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* image compare */}
            <div className="w-full lg:max-w-[1500px] mx-auto my-5 md:mt-[50px] lg:mt-[120px]  md:mb-[50px] lg:mb-[120px] text-center px-4 2xl:px-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold xl:leading-[75px]  text-Primary">Transformations</h2>
                <p className="text-secondary2 md:mt-[10px] text-base font-normal leading-[27px] md:text-lg">
                    See the remarkable difference our treatments can make. Explore before-and-after images.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 md:mt-[30px] lg:mt-10 xl:mt-[50px] mt-5 items-center">
                    <div className="w-full max-w-[446px] mx-auto">
                        <CompareImage
                            leftImage={Doctor1}
                            rightImage={Doctor2}
                            sliderLineColor="#ccc"
                        />
                    </div>
                    <div className="w-full max-w-[568px] mx-auto hidden lg:inline-block">
                        <CompareImage
                            leftImage={Doctor1}
                            rightImage={Doctor2}
                            sliderLineColor="#ccc"
                        />
                    </div>
                    <div className="w-full max-w-[446px] mx-auto hidden lg:inline-block">
                        <CompareImage
                            leftImage={Doctor1}
                            rightImage={Doctor2}
                            sliderLineColor="#ccc"
                        />
                    </div>
                </div>
            </div>

            {/* Book Now */}
            <div className="w-full lg:max-w-[1500px] mx-auto md:my-[50px] lg:my-[120px] my-5 ">
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
                            Maintaining optimal oral health is essential, and regular dental cleanings play a crucial role in keeping your smile bright and healthy. At Dentty, we provide comprehensive dental cleaning services tailored to your individual needs.  Don't wait—secure your spot and start your journey toward better oral health! dental cleaning while outlining the benefits and steps involved in the process.</p>
                        <button onClick={() => Navigate("/schedule-appointment")} className="bg-secondary md:py-3 my-5 md:mb-0 py-1 px-4 md:px-10  md:mt-[40px] font-bold text-base md:text-[20px] leading-[30px] rounded-xl text-white ">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
