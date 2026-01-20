import React from 'react'
import CompareImage from "react-compare-image";
import { Link, useNavigate } from 'react-router-dom';
import Img1 from "../../assets/image/about/about1.png";
import Img2 from "../../assets/image/about/about2.png";
import Img3 from "../../assets/image/about/about3.png";
import Img4 from "../../assets/image/about/about4.png";
import Img5 from "../../assets/image/about/about5.png";
import Img6 from "../../assets/image/about/about6.png";
import Line from "../../assets/image/comman/line.png";
import Doctor from "../../assets/image/about/homedoctor.png"
import org1 from "../../assets/image/about/org1.png"
import org2 from "../../assets/image/about/org2.png"
import org3 from "../../assets/image/about/org3.png"
import Location from "../../assets/image/comman/footerlocation.png"
import Time from "../../assets/image/comman/footertime.png"
import Doctor1 from "../../assets/image/comman/doctor1.png"
import Doctor2 from "../../assets/image/comman/doctor2.png"
import Doctor3 from "../../assets/image/comman/doctor3.png"
import Service1 from "../../assets/image/about/service1.png"
import Service2 from "../../assets/image/about/sevices2.png"
import Service3 from "../../assets/image/about/services3.png"
import Service4 from "../../assets/image/about/service4.png"
import space1 from "../../assets/image/about/aboutserve.png"
import space2 from "../../assets/image/about/aboutserve2.png"
import ToothBg from '../../assets/image/comman/teetth.png';

const images = [Img1, Img2, Img3, Img4, Img5, Img6];


/* doctor details */
const doctors = [
    {
        name: "Dr. Emily Carter",
        degree: "DMD",
        position: "Assistant Dentist",
        image: Doctor1
    },
    {
        name: "Dr. Denial Jon",
        degree: "DMD",
        position: "Junior Dental Surgeon",
        image: Doctor2
    },
    {
        name: "Dr. James Holden",
        degree: "DMD, BDS",
        position: "Senior Dental Surgeon",
        image: Doctor3
    }
];


/* services */
const services = [
    {
        icon: Service1,
        title: "Seamless Services",
        desc: "At our clinic, we prioritize a smooth and comfortable experience for every patient. From booking your appointment."
    },
    {
        icon: Service2,
        title: "Excellence",
        desc: "We are committed to excellence in everything we do. Our highly qualified team of dental professionals stays up to date."
    },
    {
        icon: Service3,
        title: "Mindful Ness",
        desc: "We believe in providing mindful care, ensuring that our approach is sensitive to your individual needs."
    },
    {
        icon: Service4,
        title: "Highest Quality Treatment",
        desc: "Our clinic is dedicated to offering the highest quality treatments using state-of-the-art equipment and the best materials."
    }
];


/* left column images  */
const leftColumnImages = [
    { src: images[0], height: "h-[327px]" },
    { src: images[2], height: "h-[192px]" },
    { src: images[4], height: "h-[380px]" }
];

/* right column images  */
const rightColumnImages = [
    { src: images[1], height: "h-[192px]" },
    { src: images[3], height: "h-[380px]" },
    { src: images[5], height: "h-[327px]" }
];



const Aboutus = () => {
    const Navigate = useNavigate("/")
    return (
        /* main section */
        <div>
            <div className="bg-white ">
                <div className="bg-Primary px-4 2xl:px-0">
                    <div className="w-full max-w-[1500px] mx-auto">
                        <div className="flex flex-col md:flex-row h-[600px] lg:h-[854px] items-center justify-between">
                            <div className="m-auto xl:w-[786px] text-left md:pr-5 min-h-[250px]">
                                <p className="text-Primary font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[64px] 2xl:text-[70px] mt-3 md:mt-0 leading-[38px] sm:leading-[44px] md:leading-[52px] lg:leading-[60px] xl:leading-[72px] 2xl:leading-[84px]">
                                    About Dentty Family Dentistry
                                </p>
                                <img src={Line} alt="not found" className="my-3" />
                                <p className="text-secondary2 xl:w-[737px] text-base md:text-lg font-normal md:mt-5 md:leading-7">
                                    At dentty, we are committed to providing high-quality dental care in a welcoming and friendly environment. Our experienced team of dental professionals is dedicated to ensuring your comfort while delivering personalized treatments tailored to your unique needs.
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


                {/* doctor details section */}
                <div className="px-4 2xl:px-0">
                    <div className="bg-white md:mt-[50px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[120px] mt-10 mx-auto w-full max-w-[1920px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-[30px] lg:gap-[50px]">
                            <div className="bg-gradient-to-b from-[#CEE8ED00] to-[#CEE8ED] order-2 lg:order-1 lg:mt-[30px] xl:mt-12 2xl:mt-16 flex justify-start items-center rounded-b-xl md:rounded-s-xl w-full">
                                <img
                                    src={Doctor}
                                    alt="Doctor Not Found!"
                                    className="object-contain w-full max-h-[350px] md:max-h-[400px] lg:max-h-[650px] xl:max-h-[737px]"
                                />
                            </div>
                            <div className="w-full flex items-center order-1 lg:order-2">
                                <div className=" max-w-[725px] w-full text-left mx-auto lg:mx-0 lg:mt-[30px] xl:mt-12 2xl:mt-16">
                                    <h2 className="text-Primary font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:mb-5">
                                        Dr. Neel Anderson
                                    </h2>
                                    <p className="hidden md:inline text-secondary2 text-lg font-normal">
                                        Dr. Neel Anderson is a dedicated dental professional with over a decade of experience in providing exceptional patient care. Passionate about helping individuals achieve optimal oral health, Dr. Anderson combines clinical expertise with a compassionate approach. He believes in creating a comfortable and welcoming environment, ensuring patients feel at ease during their visits. Committed to ongoing education, Dr. Anderson stays updated on the latest advancements in dentistry to offer the best treatments available. Whether it's a routine check-up or a complex procedure, Dr. Anderson is focused on delivering personalized care that meets each patient's unique needs. His goal is not just to treat, but to empower patients to maintain long-term dental health.
                                    </p>
                                    <h3 className="text-[22px] md:text-[28px] xl:text-[38px] text-Primary font-semibold md:leading-[48px] mt-1 md:mt-2 xl:mt-4">
                                        Education :
                                    </h3>
                                    <ul className="list-disc list-inside md:ml-5 lg:ml-10 mt-1 md:mt-2 text-left xl:mt-3">
                                        <li className="text-secondary2 text-base md:text-[20px] lg:text-[22px] leading-[30px]">
                                            DABP in Chemistry, University of Georgia
                                        </li>
                                        <li className="text-secondary2 md:mt-2 text-base md:text-[20px] lg:text-[22px] leading-[30px]">
                                            DMD, DDS, University of Florida
                                        </li>
                                    </ul>
                                    <h3 className="text-[22px] md:text-[28px] xl:text-[38px] text-Primary font-semibold leading-[48px] mt-2 md:mt-2 xl:mt-[43px] text-left">
                                        Organization :
                                    </h3>
                                    <ul className="flex flex-wrap gap-2 md:gap-6 xl:mt-[26px] justify-start">
                                        <li className="flex flex-col items-center m-1 md:mr-6 xl:mr-12">
                                            <img src={org1} alt="Health Alliance" className="h-10 md:h-12 xl:h-full" />
                                            <h4 className="font-semibold text-Primary text-sm md:text-[17px] text-center">
                                                Health Alliance
                                            </h4>
                                        </li>
                                        <li className="flex flex-col items-center m-1 md:mr-6 xl:mr-12">
                                            <img src={org2} alt="Smile Care" className="h-10 md:h-12 xl:h-full" />
                                            <h4 className="font-semibold text-Primary text-sm md:text-[17px] text-center">
                                                Smile Care
                                            </h4>
                                        </li>
                                        <li className="flex flex-col items-center m-1 md:mr-6 xl:mr-12">
                                            <img src={org3} alt="DentalCare" className="h-10 md:h-12 xl:h-full" />
                                            <h4 className="font-semibold text-Primary text-sm md:text-[17px] text-center">
                                                DentalCare
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full px-4 2xl:px-0 lg:max-w-[1500px] mx-auto mt-5 md:mt-5 lg:mt-10 xl:mt-[50px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {doctors.map((doc, idx) => (
                            <div key={idx} className="p-2 md:p-5 border-2 text-center  border-Primary rounded-xl mx-auto">
                                <img src={doc.image} alt={doc.name} />
                                <h1 className="text-Primary text-xl md:text-2xl xl:text-[32px] font-semibold text-center lg:text-left leading-[42px] mt-4">
                                    {doc.name} <span className="font-normal text-lg md:text-xl leading-[42px]">({doc.degree})</span>
                                </h1>
                                <p className="text-lg lg:text-xl font-normal leading-[30px] md:mt-2 text-secondary2 text-center lg:text-left">
                                    {doc.position}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* services */}
                <div className='container mx-auto mt-5 md:mt-[50px] px-4 2xl:px-0 lg:mt-[80px] xl:mt-[100px] 2xl:mt-[120px]'>
                    <div className="mx-auto">
                        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold  lg:leading-[75px] text-Primary">What We're Striving</h2>
                        <p className="text-center font-normal text-lg leading-[27px] text-secondary2 mt-[10px] md:mb-[50px]">
                            Dedicated to delivering exceptional care with seamless service, excellence, mindfulness.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-5 mt-5 md:mt-12 text-center">
                            {services.map((item, idx) => (
                                <div key={idx} className="flex flex-col lg:max-w-[360px] lg:m-auto items-center ">
                                    <img src={item.icon} alt=' not found' className='h-12 lg:h-20' />
                                    <h3 className="text-lg md:text-[22px] leading-[30px] md:mt-[18px] font-semibold text-Primary">{item.title}</h3>
                                    <p className="text-secondary2 text-base  md:text-lg leading-[27px] mt-1">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="w-full lg:max-w-[1500px] mx-auto md:mt-[50px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[120px] mt-5 px-4 2xl:px-0">
                    <div className="relative bg-[#f5fbfc] overflow-hidden w-full rounded-3xl mx-auto">
                        <img
                            src={ToothBg}
                            alt="tooth-shape"
                            className="absolute w-[180px] md:w-[250px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100"
                        />
                        <div className="relative text-center mt-5 md:my-[50px] lg:my-[100px]">
                            <h2 className="text-[22px] md:text-[40px] font-bold lg:text-6xl md:leading-[50px] xl:leading-[90px] text-Primary">
                                <span className="text-[#008297]">Let’s </span>
                                <span className="text-[#199cad] font-light">get Smiling!</span>
                            </h2>
                            <p className="text-secondary2 text-center w-full lg:max-w-[1212px] font-normal mx-auto mt-2 md:mt-4 text-base md:text-lg px-4 2xl:p-0">
                                Your perfect smile is just an appointment away. Whether it's a routine check-up or a specific treatment, our team is ready to help you achieve the best oral health and confidence. we’re committed to providing personalized care that meets your unique needs. Schedule your first visit today. Join us today for personalized, expert care!                            </p>
                            <button onClick={() => Navigate("/schedule-appointment")} className="bg-secondary md:py-3 my-5 md:mb-0 py-1 px-4 md:px-10  md:mt-[24px] xl:mt-[34px] font-bold text-base md:text-[20px] leading-[30px] rounded-xl text-white ">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[1500px] mx-auto md:mt-[50px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[120px] px-4 2xl:px-0">
                    <h2 className="text-center text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mt-5 md:leading-[30px] lg:leading-[50px] xl:leading-[75px] text-Primary">
                        Explore Our Spaces
                    </h2>
                    <p className="text-center text-secondary2 font-normal text-lg md:mt-[10px] md:mb-5 lg:mb-8 xl:mb-10 2xl:mb-[50px]">
                        Explore our welcoming office environment designed for your comfort and convenience.
                    </p>
                    <div className="flex flex-col lg:flex-row mt-2 gap-3 md:gap-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1">
                            <img
                                src={space1}
                                alt="Clinic Reception"
                                className="rounded-xl w-full max-w-[500px] h-[350px] md:h-[400px] lg:h-full object-cover"
                            />
                            <img
                                src={space2}
                                alt="Dental Room"
                                className="rounded-xl w-full object-cover md:h-[400px] lg:h-full hidden md:block"
                            />
                        </div>
                        <div className="w-full lg:w-2/5 flex flex-col text-left">
                            <h3 className="text-[24px] md:text-[32px] lg:text-[38px] md:leading-7 lg:leading-[50px] font-semibold text-Primary lg:mt-0">
                                Visit Us Today
                            </h3>
                            <p className="text-secondary2 font-normal hidden md:inline text-base md:text-lg xl:max-w-[613px] leading-[30px] md:mt-5">
                                Step into our state-of-the-art office and experience a welcoming environment where your dental health is our top priority. Our friendly team is here to provide exceptional care and personalized service tailored to your needs. Schedule your visit today and discover how our commitment to comfort and advanced treatment can enhance your smile.Our friendly team is here to provide exceptional care and personalized service tailored to your needs.
                            </p>
                            <div className="flex items-center gap-2 md:gap-5 mt-2 md:mt-6 justify-start">
                                <img src={Location} alt="Location" className="md:w-10 md:h-10 w-6 h-6" />
                                <p className="text-secondary2 text-left font-normal text-base md:text-[18px] leading-[27px]">
                                    123 Smile Avenue <br /> Brighton City, BC 54321
                                </p>
                            </div>
                            <div className="flex items-center gap-2 md:gap-5 mt-2 md:mt-6 justify-start">
                                <img src={Time} alt="Time" className="md:w-10 md:h-10 w-6 h-6" />
                                <p className="text-secondary2 text-left font-normal text-base md:text-[18px] leading-[27px]">
                                    Mon. - Sat. : 9:00AM to 6:00PM
                                </p>
                            </div>
                            <Link to="/schedule-appointment">
                                <button onClick={() => Navigate("/schedule-appointment")} className="bg-secondary md:py-3 py-1 px-4 md:px-10 mt-2 md:mt-5 lg:mt-[30px] font-bold text-base md:text-[20px] capitalize leading-[30px] rounded-xl text-white ">
                                    Book your visit with us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="w-full lg:max-w-[1500px] mx-auto my-5 md:mt-[50px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[120px]  md:mb-[50px] lg:mb-[80px] xl:mb-[100px] 2xl:mb-[120px] text-center px-4 2xl:px-0">
                    <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold md:leading-[40px] xl:leading-75 text-Primary">Transformations</h2>
                    <p className="text-secondary2 md:mt-[10px] text-base font-normal leading-[27px] md:text-lg">
                        See the remarkable difference our treatments can make. Explore before-and-after images.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 md:mt-[30px] xl:mt-[50px] mt-5 items-center">

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
            </div>
        </div>
    )
}

export default Aboutus
