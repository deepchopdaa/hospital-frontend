import React from 'react'
import { Link } from 'react-router-dom';

/* image import */

import Img1 from "../../assets/image/services/serviceimg1.png";
import Img2 from "../../assets/image/services/serviceimg2.png";
import Img3 from "../../assets/image/services/serviceimg3.png";
import Img4 from "../../assets/image/services/serviceimg4.png";
import Img5 from "../../assets/image/services/serviceimg5.png";
import Img6 from "../../assets/image/services/serviceimg6.png";
import Line from "../../assets/image/comman/line.png";
import Cavity from "../../assets/image/services/caviti.png"
import Clining from "../../assets/image/services/clining.png"
import Canal from "../../assets/image/services/canal.png"
import Extration from "../../assets/image/services/extration.png"
import Gum from "../../assets/image/services/gum.png"
import Icon from "../../assets/image/services/serviceicon.png"
import C1 from '../../assets/image/services/c1.png';
import C2 from '../../assets/image/services/c2.png';
import C3 from '../../assets/image/services/c3.png';
import C4 from '../../assets/image/services/c4.png';
import C5 from '../../assets/image/services/c5.png';
import S1 from '../../assets/image/services/s1.png';
import S2 from '../../assets/image/services/s2.png';
import S3 from '../../assets/image/services/s3.png';
import S4 from '../../assets/image/services/s4.png';
import S5 from '../../assets/image/services/s5.png';
import step1 from '../../assets/image/services/step1.png';
import step2 from '../../assets/image/services/step2.png';
import step3 from '../../assets/image/services/step3.png';

/* image scrolling images */
const images = [Img1, Img2, Img3, Img4, Img5, Img6];

/* General services json */
const General = [
    {
        section: "General Dentistry",
        description:
            "General dentistry focuses on preventive care, routine check-ups, and basic dental treatments to maintain overall oral health. Services include cleanings, fillings, and exams to ensure your teeth and gums remain healthy and free of disease."
        ,
        services: [
            {
                title: "Dental Cleaning",
                slug: "dental-cleaning",
                image: Clining,
                description:
                    "Refresh your smile with a professional clean. Regular dental cleanings remove plaque, tartar, and surface stains, keeping your teeth and gums healthy.",
            },
            {
                title: "Cavity Fillings",
                "slug": "cavity-fillings",
                image: Cavity,
                description:
                    "Quick and painless protection for your teeth. Restore your tooth’s strength and appearance with a cavity filling. Our durable, natural-looking fillings protect.",
            },
            {
                title: "Root Canal Therapy",
                "slug": "root-canal-therapy",
                image: Canal,
                description:
                    "Relieve pain and save your tooth. Root canal therapy eliminates infection and pain from deep within the tooth, preserving your natural tooth structure.",
            },
            {
                title: "Tooth Extraction",
                "slug": "tooth-extraction",
                image: Extration,
                description:
                    "Safe, gentle extractions for a healthier smile. When a tooth needs to be removed, our team provides careful and minimally invasive extractions.",
            },
            {
                title: "Gum Disease Treatment",
                "slug": "gum-disease-treatment",
                image: Gum,
                description:
                    "Protect your gums and restore oral health. Our gum disease treatments address infection and inflammation, helping to restore healthy gums.",
            },
        ],
    },
];

/* cosmetic services json */
const cosmetic = [
    {
        "section": "Cosmetic Dentistry",
        "description": "Cosmetic dentistry enhances the appearance of your smile through various procedures, including teeth whitening, veneers, and bonding. These treatments aim to improve aesthetics, boost confidence, and create a more radiant, attractive smile tailored to your desires.",
        "services": [
            {
                "title": "Teeth Braces",
                "slug": "teeth-braces",
                "description": "Teeth braces effectively correct misalignment, crowding, and bite issues, offering long-term benefits for both oral health and appearance. Whether you opt for traditional...",
                "image": C1
            },
            {
                "title": "Dental Bonding",
                "slug": "dental-bonding",
                "description": "Dental bonding is a cost-effective way to repair chipped, cracked, or discolored teeth. Using a tooth-colored resin, we sculpt and bond the material to your natural tooth.",
                "image": C2
            },
            {
                "title": "Invisalign & Clear Aligners",
                "slug": "invisalign-clear-aligners",
                "description": "Straighten your teeth discreetly with Invisalign or clear aligners. These nearly invisible, removable trays gradually shift teeth into place without the need for metal braces.",
                "image": C3
            },
            {
                "title": "Smile Makeovers",
                "slug": "smile-makeovers",
                "description": "A smile makeover is a personalized cosmetic dental plan that combines various treatments to achieve your dream smile. From teeth whitening and veneers to braces and bonding.",
                "image": C4
            },
            {
                "title": "Teeth Whitening & Veneers",
                "slug": "teeth-whitening-veneers",
                "description": "Brighten your smile with our professional teeth whitening treatments or enhance it with veneers. Teeth whitening removes stains and discoloration.",
                "image": C5
            }
        ]
    }
]

/* surgical services json */
const surgical = [
    {
        "section": "Surgical Dentistry",
        "description": "Surgical dentistry encompasses more complex procedures, such as tooth extractions, dental implants, and jaw surgery. Our skilled oral surgeons utilize advanced techniques to ensure a comfortable experience while effectively addressing serious dental issues and restoring oral function.",
        "services": [
            {
                "title": "Wisdom Teeth Removal",
                "slug": "wisdom-teeth-removal",
                "description": "Wisdom teeth removal is a common procedure to prevent overcrowding, infection, or damage to surrounding teeth. Our gentle extraction methods ensure a smooth...",
                "image": S1
            },
            {
                "title": "Dental Implants",
                "slug": "dental-implants",
                "description": "Dental implants are a permanent solution for missing teeth, providing a natural look and feel. They involve surgically placing titanium posts into the jawbone.",
                "image": S2
            },
            {
                "title": "Bone Grafting",
                "slug": "bone-grafting",
                "description": "Bone grafting strengthens and rebuilds the jawbone, preparing it for implants or restoring bone lost from disease. It provides a stable foundation for successful implant.",
                "image": S3
            },
            {
                "title": "Jaw Correction",
                "slug": "jaw-correction",
                "description": "Jaw correction surgery addresses issues with jaw alignment and improving both function and appearance. It helps bite problems, imbalances, and speech issues.",
                "image": S4
            },
            {
                "title": "Sinus Lifts",
                "slug": "sinus-lifts",
                "description": "A sinus lift is a surgical procedure that adds bone to the upper jaw in the area of the molars and premolars. It’s commonly performed to prepare for dental implants.",
                "image": S5
            }
        ]
    }
]


/* steps services json */
const steps = [
    {
        icon: step1,
        title: "Schedule An Appointment",
        description: "Easily book your visit with our team for a convenient time, ensuring your dental needs.",
    },
    {
        icon: step2,
        title: "Discuss Your Problems With A Dentist",
        description: "Share your dental concerns with our expert dentists, and receive personalized advice.",
    },
    {
        icon: step3,
        title: "Create Your Personalized Smile Plan",
        description: "Work with our specialists to develop a custom treatment plan designed to help you achieve.",
    },
];

// Left column images (scrolling down)
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

function Services() {
    return (
        <>
            {/* main section */}
            <div className="bg-Primary px-4 2xl:px-0">
                <div className="w-full max-w-[1500px] mx-auto">
                    <div className="flex flex-col md:flex-row h-[600px] lg:h-[854px] items-center justify-between">
                        <div className="m-auto xl:w-[786px] text-left md:pr-5 min-h-[250px]">
                            <p className="text-Primary font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[64px] 2xl:text-[70px] mt-3 md:mt-0 leading-[38px] sm:leading-[44px] md:leading-[52px] lg:leading-[60px] xl:leading-[72px] 2xl:leading-[84px]">
                                Our Dental Services
                            </p>
                            <img src={Line} alt="not found" className="my-2 " />
                            <p className="text-secondary2 xl:w-[737px] text-base md:text-lg lg:text-lg font-normal md:mt-5 md:leading-7">
                                Discover a comprehensive range of dental services designed to meet all your oral health needs. From routine check-ups and preventive care to advanced cosmetic procedures and surgical treatments, our experienced team is dedicated to providing personalized care in a comfortable environment. Let us help you achieve a healthy, beautiful smile!
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

            <div className='bg-white px-4 2xl:px-0'>
                <div className="w-full lg:max-w-[1500px] mx-auto my-5 md:my-[50px] lg:my-[80px] xl:my-[100px] 2xl:my-[120px] ">
                    {General.map((section, i) => (
                        <div key={i} className="w-full">
                            <div className="flex flex-col items-start">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold lg:leading-[62px] text-left text-Primary flex items-center justify-center lg:justify-start gap-3 md:gap-4 2xl:gap-[30px]">
                                    <img src={Icon} alt="icon" className="w-[30px] h-[30px] md:size-10 xl:size-12 2xl:size-[58px]" />
                                    {section.section} :
                                </h2>
                                <p className="text-secondary2 text-left font-normal mt-2 md:mt-5 text-base md:text-lg ">
                                    {section.description}
                                </p>
                                <p className="text-secondary2 text-left text-base md:text-lg ">
                                    Cosmetics dentistry services include...
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-3 md:mt-5 gap-4 place-items-center lg:place-items-start">
                                {section.services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="bg-white text-left rounded-lg overflow-hidden max-w-[450px] w-full"
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full object-cover"
                                        />
                                        <div className="mt-2 md:mt-[12px]">
                                            <h3 className="text-Primary leading-[30px] font-semibold text-lg md:text-[22px]">
                                                {service.title} :
                                            </h3>
                                            <p className="text-base text-secondary2 md:text-lg mt-1 md:mt-[8px] text-justify 2xl:min-h-[140px]">
                                                {service.description}
                                            </p>
                                            <Link
                                                to={`/services/${service.slug}`}
                                                className="text-Primary underline text-base md:text-xl font-semibold mt-1 md:mt-[6px] justify-start items-center"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cosmetic Dentistry */}
                <div className="w-full lg:max-w-[1500px] mx-auto mt-5 md:mt-[50px] lg:mt-[80px]">
                    {cosmetic.map((section, i) => (
                        <div key={i} className="w-full">
                            <div className="flex flex-col items-start">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold lg:leading-[62px] text-left text-Primary flex items-center justify-center lg:justify-start gap-3 md:gap-4 2xl:gap-[30px]">
                                    <img src={Icon} alt="icon" className="w-[30px] h-[30px] md:size-10 xl:size-12 2xl:size-[58px]" />
                                    {section.section} :
                                </h2>
                                <p className="text-secondary2 text-left font-normal mt-2 md:mt-5 text-base md:text-lg ">
                                    {section.description}
                                </p>
                                <p className="text-secondary2 text-left text-base md:text-lg ">
                                    Cosmetics dentistry services include...
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-3 md:mt-5 gap-4 place-items-center lg:place-items-start">
                                {section.services.map((service, index) => (
                                    <div key={index} className="bg-white text-left rounded-lg overflow-hidden max-w-[450px] w-full">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full object-cover"
                                        />
                                        <div className="mt-2 md:mt-[12px]">
                                            <h3 className="text-Primary leading-[30px] font-semibold text-lg md:text-[22px]">
                                                {service.title} :
                                            </h3>
                                            <p className="text-base text-secondary2 md:text-lg mt-1 md:mt-[8px] text-justify 2xl:min-h-[140px]">
                                                {service.description}
                                            </p>
                                            <Link
                                                to={`/services/${service.slug}`}
                                                className="text-Primary underline text-lg md:text-xl font-semibold mt-1 md:mt-[6px] flex justify-start items-center hover:underline"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Surgical Dentistry */}
                <div className="w-full lg:max-w-[1500px] mx-auto mt-5 md:mt-[50px] lg:mt-[80px] ">
                    {surgical.map((section, i) => (
                        <div key={i} className="w-full">
                            <div className="flex flex-col items-start">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold lg:leading-[62px] text-center lg:text-left text-Primary flex items-center justify-center lg:justify-start gap-3 md:gap-4 2xl:gap-[30px]">
                                    <img src={Icon} alt="icon" className="w-[30px] h-[30px] md:size-10 xl:size-12 2xl:size-[58px]" />
                                    {section.section} :
                                </h2>
                                <p className="text-secondary2 text-left font-normal mt-2 md:mt-5 text-base md:text-lg">
                                    {section.description}
                                </p>
                                <p className="text-secondary2 text-left text-base md:text-lg ">
                                    Cosmetics dentistry services include...
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-3 md:mt-5 gap-4 place-items-center lg:place-items-start">
                                {section.services.map((service, index) => (
                                    <div key={index} className="bg-white text-left rounded-lg overflow-hidden max-w-[450px] w-full">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full object-cover"
                                        />
                                        <div className="mt-2 md:mt-[12px]">
                                            <h3 className="text-Primary leading-[30px] font-semibold text-lg md:text-[22px]">
                                                {service.title} :
                                            </h3>
                                            <p className="text-base text-secondary2 md:text-lg mt-1 md:mt-[8px] text-justify 2xl:min-h-[140px]">
                                                {service.description}
                                            </p>
                                            <Link
                                                to={`/services/${service.slug}`}
                                                className="text-Primary underline text-base md:text-xl font-semibold mt-1 md:mt-[6px] flex justify-start items-center hover:underline"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full lg:max-w-[1386px] mx-auto my-5 md:my-[50px] lg:my-[80px] xl:my-[100px] 2xl:my-[120px]">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center md:leading-10 xl:leading-[75px] text-Primary">
                        Your Smile In 3 Steps
                    </h2>
                    <p className="text-center text-secondary2 text-base leading-[27px] md:text-lg mt-[10px]">
                        Follow our simple process to transform your smile with personalized care, expert guidance.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-center relative md:mt-[30px] lg:mt-10 xl:mt-[50px] md:gap-10 lg:gap-[90px]">
                        {/* Dotted connecting line (desktop only) */}
                        <div className="hidden xl:block absolute top-[65px] left-[18%] right-[18%] border-t-[1px] border-dashed border-[#21A0B6] z-0"></div>

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="rounded-full border-2 border-[#55A9B4] flex items-center justify-center relative lg:text-justify">
                                    {/* Background circle to hide the dotted line */}
                                    {index === 0 && (
                                        <div className="absolute w-[130px] h-[130px] rounded-full bg-white xl:block hidden z-[1]"></div>
                                    )}
                                    {index === 1 && (
                                        <div className="absolute w-[130px] h-[130px] rounded-full bg-white xl:block hidden z-[1]"></div>
                                    )}
                                    {index === 2 && (
                                        <div className="absolute w-[130px] h-[130px] rounded-full bg-white xl:block hidden z-[1]"></div>
                                    )}

                                    <img
                                        src={step.icon}
                                        alt="step icon"
                                        className="w-14 h-14 md:w-18 md:h-18 lg:h-20 lg:w-20 xl:w-[130px] xl:h-[130px] xl:z-[2]"
                                    />
                                </div>
                                <div className='mt-2 md:mt-5'>
                                    <h3 className="text-Primary font-semibold leading-[32px] text-lg  md:text-lg lg:text-xl xl:text-[22px] ">
                                        {step.title}
                                    </h3>
                                    <p className="text-secondary2 lg:max-w-[372px] font-normal text-base  md:text-base lg:text-lg md:mt-2 leading-[27px]">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services
