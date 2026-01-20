import React, { useState } from "react";

const FaqSection = () => {
    const [openKey, setOpenKey] = useState(null);

    /* faq data json */
    const faqData = [
        {
            sectionTitle: "Dentistry FAQs",
            sectionDescription:
                "Have questions about dental treatments? Explore our FAQs for detailed answers about cosmetic, restorative, and general dentistry procedures. We cover everything from routine check-ups to advanced dental care to help you stay informed.",
            leftColumn: [
                {
                    question: "What is a routine dental check-up?",
                    answer:
                        "A routine dental check-up involves a thorough examination of your teeth, gums, and mouth to ensure your oral health is in good condition. It typically includes cleaning, X-rays if necessary, and discussions about any issues or treatment needs."
                },
                {
                    question: "How often should I visit the dentist?",
                    answer:
                        "It’s generally recommended to visit the dentist every six months for a check-up and cleaning. However, if you have specific dental issues or are at higher risk of oral problems, your dentist may advise more frequent visits."
                },
                {
                    question: "What are the signs I need a dental cleaning?",
                    answer:
                        "Common signs include plaque buildup, tartar, bad breath, bleeding gums, or staining. Regular cleanings help prevent gum disease, cavities, and other oral health issues."
                }
            ],
            rightColumn: [
                {
                    question: "How can I prevent cavities and tooth decay?",
                    answer:
                        "Brush your teeth twice daily with fluoride toothpaste, floss daily, limit sugary foods and drinks, and schedule regular dental check-ups. Drinking water and maintaining a healthy diet also support cavity prevention."
                },
                {
                    question: "How can I relieve tooth sensitivity at home?",
                    answer:
                        "Use a desensitizing toothpaste, avoid extremely hot or cold foods, and maintain good oral hygiene. If sensitivity persists, consult your dentist to rule out underlying issues such as cavities or gum recession."
                },
                {
                    question: "How do I know if I need a root canal?",
                    answer:
                        "Signs include persistent tooth pain, sensitivity to hot/cold, swelling, discoloration, or a pimple on the gum. A dentist will evaluate your symptoms and X-rays to determine if a root canal is necessary."
                }
            ]
        },
        {
            sectionTitle: "Preventive Care FAQs",
            sectionDescription:
                "Prevention is the key to a healthy smile! Learn about the importance of regular cleanings, fluoride treatments, and dental exams. Find out how preventive care can help you avoid more serious dental issues down the road.",
            leftColumn: [
                {
                    question: "What is preventive dental care?",
                    answer:
                        "Preventive dental care includes habits and professional services that help maintain oral health and avoid dental diseases. This includes brushing, flossing, regular dental cleanings, exams, fluoride treatments, and sealants."
                },
                {
                    question: "How often should I get a dental cleaning?",
                    answer:
                        "Most individuals should have a professional dental cleaning every 6 months. However, those with gum disease or other conditions may need more frequent cleanings, as recommended by their dentist."
                },
                {
                    question: "What foods should I avoid for better oral health?",
                    answer:
                        "Avoid sticky candies, sugary snacks, soda, and acidic foods that erode enamel. Instead, eat crunchy fruits and vegetables, dairy, and foods rich in calcium and phosphorus to support healthy teeth."
                }
            ],
            rightColumn: [
                {
                    question: "How can I prevent gum disease?",
                    answer:
                        "Practice good oral hygiene by brushing twice daily, flossing daily, avoiding tobacco use, and visiting your dentist regularly. A healthy diet and managing health conditions like diabetes also help prevent gum issues."
                },
                {
                    question: "Why are dental sealants important?",
                    answer:
                        "Dental sealants are a protective coating applied to the chewing surfaces of molars to prevent cavities. They are especially helpful for children and teens but can benefit adults too."
                },
                {
                    question: "At what age should I start preventive care for my child?",
                    answer:
                        "You should begin preventive dental care as soon as your child’s first tooth erupts. Their first dental visit should be around their first birthday to help monitor growth and instill good habits early."
                }
            ]
        },
        {
            sectionTitle: "Payment & Insurance FAQs",
            sectionDescription:
                "Understand your payment options and insurance coverage with ease. Our FAQs provide information on accepted insurance plans, financing options, and payment methods. We're committed to making your dental care affordable and stress-free.",
            leftColumn: [
                {
                    question: "What payment options are available at clinic?",
                    answer:
                        "We accept credit and debit cards, cash, UPI, and digital wallets. We also offer flexible payment plans and financing options to help make your treatment more manageable."
                },
                {
                    question: "Do you accept dental insurance?",
                    answer:
                        "Yes, we accept a wide range of dental insurance plans. Please bring your insurance card during your visit, and our team will help verify your coverage and explain the benefits."
                },
                {
                    question: "How do I know if my insurance covers a specific treatment?",
                    answer:
                        "Our staff will help you review your insurance policy and submit a pre-authorization if needed. We can also provide a cost estimate based on your treatment plan and coverage."
                }
            ],
            rightColumn: [
                {
                    question: "Can I use multiple forms of payment for my treatment?",
                    answer:
                        "Yes, you can split your payment between cash, card, or any combination of accepted payment methods. Just inform our staff during checkout."
                },
                {
                    question: "Do you offer financing options for dental treatments?",
                    answer:
                        "Yes, we offer financing plans that allow you to pay for treatments over time with minimal or no interest. Speak to our team to find the best option for your needs."
                },
                {
                    question: "What if my insurance doesn’t cover a procedure?",
                    answer:
                        "If your insurance doesn’t cover a procedure, we’ll provide you with affordable self-pay rates and available financing options. Our goal is to ensure you receive the care you need without financial stress."
                }
            ]
        }
    ];

    /* column render function for listin (mapping) column of left and right side of faq*/
    const renderColumn = (items, side, sectionIndex) =>
        items.map((item, idx) => {
            const key = `${sectionIndex}-${side}-${idx}`;
            return (
                <div
                    key={key}
                    className="border py-2 px-2 md:py-6 md:px-6 bg-Primary mt-2 md:mt-4 cursor-pointer rounded-2xl"
                    onClick={() => setOpenKey(openKey === key ? null : key)}
                >
                    <div className="flex justify-between items-center text-Primary text-lg md:text-[22px] md:leading-[28px] font-semibold">
                        <span>{item.question}</span>
                        <span>{openKey === key ? "–" : "+"}</span>
                    </div>
                    {openKey === key && item.answer && (
                        <p className="text-secondary2 text-base md:text-lg mt-1 md:mt-5 font-normal">{item.answer}</p>
                    )}
                </div>
            );
        });

    return (
        <div className="w-full lg:max-w-[1500px] mx-auto my-5 md:my-[50px] lg:my-[80px] xl:my-[100px] 2xl:my-[120px] px-4 2xl:px-0">
            <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-Primary font-semibold lg:leading-75">
                Frequently Asked Questions
            </div>
            <p className="text-secondary2 text-base text-center md:text-[22px] md:leading-[32px] mt-1 md:mt-[10px] mb-3 md:mb-[30px] lg:mb-[50px]">At Dentty, we believe in providing clear and transparent information to ensure that you feel confident.</p>

            {/* faq qustion mapping */}
            {faqData.map((section, index) => (
                <div key={index} className="mb-5 md:mb-[50px] lg:mb-[80px] xl:mb-[100px]">
                    <h2 className="text-[22px] md:text-3xl lg:text-4xl xl:text-[42px] lg:leading-[62px] font-bold text-Primary text-left">
                        {section.sectionTitle} :
                    </h2>
                    <p className="text-secondary2 text-base md:text-lg font-normal mt-1 md:mt-4 text-left">
                        {section.sectionDescription}
                    </p>
                    <div className="flex flex-col lg:flex-row mt-[10px] md:mt-[30px] lg:gap-5">
                        <div className="lg:w-1/2">{renderColumn(section.leftColumn, "left", index)}</div>
                        <div className="lg:w-1/2">{renderColumn(section.rightColumn, "right", index)}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqSection;
