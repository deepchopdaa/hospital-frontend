import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="w-full lg:max-w-[1500px] mx-auto">

            <div className="px-4 2xl:px-0 text-left my-5 md:pt-0 md:my-[50px] lg:my-[80px] xl:my-[100px] 2xl:my-[120px] text-secondary2 mx-auto">
                <h2 className="text-center text-[#00849A] text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-10 xl:leading-[75px] font-semibold ">
                    Terms & Conditions
                </h2>
                <p className="text-center text-secondary2  text-[18px] md:text-[20px] lg:text-[22px] md:leading-[32px] mt-1 md:mt-[8px] lg:mt-[10px] font-normal">
                    By Using Our Services, You Agree To Our Terms, Ensuring A Smooth And Transparent Experience.
                </p>
                <p className="text-secondary2 font-normal text-left text-[16px] md:text-[18px] leading-[27px] md:mt-[20px] lg:mt-[36px] xl:mt-[50px]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Dentty dental clinic. By accessing or using our website and services, you agree to comply with and be bound by the following Terms and Conditions. Please read these carefully as they outline the rules and guidelines governing the use of our website, services, and your relationship with us as a patient.
                </p>

                {/* Sections */}
                <Section number="1" title="Acceptance Of Terms">
                    By visiting our website or scheduling an appointment at Dentty, you agree to abide by these terms & conditions. If you do not accept these terms, please refrain from using our services. By accessing or using our website, you agree to comply with and be bound by these terms and conditions. These terms govern your use of the services and products.
                </Section>

                <Section number="2" title="Dental Services">
                    Dentty provides a range of dental services including but not limited to routine checkups, cosmetic dentistry, surgical treatments, and emergency care. The information on our website is for general knowledge purposes and does not constitute medical advice. Always consult directly with our qualified dentists for personalized advice and treatment.
                </Section>

                <Section number="3" title="Appointment Scheduling And Cancellations">
                    <ul className="list-disc list-inside pl-6 mt-1 md:mt-[10px]">
                        <li>Scheduling Appointments: Patients can book appointments through our website, by phone, or in person. We will confirm all bookings via email or phone.</li>
                        <li>Cancellations: We require a 24-hour notice for appointment cancellations or rescheduling. Failure to provide this notice may result in a cancellation fee.</li>
                        <li>Late Arrivals: If you arrive late for your appointment, we may need to reschedule or shorten your session to accommodate other patients.</li>
                    </ul>

                </Section>

                <Section number="4" title="Use Of The Website">
                    <ul className="list-disc list-inside pl-6 mt-1 md:mt-[10px]">
                        <li>Content: All information provided on our website, including text, graphics, images, and other material, is for informational purposes only. Dentty does not warrant the accuracy, completeness, or usefulness of this information and will not be liable for any errors or omissions.</li>
                        <li>Third-Party Links: Our website may contain links to third-party websites for your convenience. Dentty is not responsible for the content or practices of these third-party sites.</li>
                        <li>Website Availability: We strive to keep our website functional and accessible at all times. However, we do not guarantee that the website will be available continuously, without interruptions, or free from errors.</li>
                    </ul>
                </Section>

                <Section number="5" title="Privacy And Data Protection">
                    Your use of our website and services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By agreeing to these Terms, you also consent to our privacy practices.
                </Section>

                <Section number="6" title="Patient Responsibilities">
                    As a patient, you are responsible for:
                    <ul className="list-disc list-inside pl-6 mt-1 md:mt-[10px]">
                        <li>Providing accurate and complete health information for treatment purposes.</li>
                        <li>Following the advice and instructions of your dentist for post-treatment care.</li>
                        <li>Keeping scheduled appointments and notifying us in a timely manner if you are unable to attend.</li>
                        <li>Prompt payment for services rendered, including any balance not covered by insurance.</li>
                    </ul>
                </Section>

                <Section number="7" title="Limitation Of Liability">
                    Dentty is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services or website. While we strive to provide high-quality care, outcomes of dental treatments may vary based on individual health conditions and treatment plans.
                </Section>

                <Section number="8" title="Intellectual Property">
                    All content on our website, including text, images, logos, and design, is the intellectual property of Dentty. You may not reproduce, distribute, or use this content without our express written permission.
                </Section>

                <Section number="9" title="Modifications To Terms">
                    We reserve the right to update or modify these Terms & Conditions at any time. Any changes will be effective immediately upon posting on our website. It is your responsibility to review these terms periodically for updates.
                </Section>

                <Section number="10" title="Governing Law">
                    These terms & conditions are governed by and construed in accordance with the laws of the state in which Dentty operates. Any disputes arising under these terms will be subject to the exclusive jurisdiction of the courts in that state.
                </Section>

                <Section number="11" title="Contact Information">
                    If you have any questions or concerns about these Terms & Conditions, or if you need assistance regarding our services, please contact us at:
                    <div className="mt-1 md:mt-[10px] text-secondary2 text-[16px] md:text-[18px] leading-[27px]">
                        <p>Dentty Dental Clinic<br />
                            123 Smile Avenue, City ZIP<br />
                            Phone: +91-1234 67890 | 01234 56789<br />
                            Email: Denttyclinic@gmail.com
                        </p>
                        <p className="mt-4">
                            By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
                        </p>
                    </div>
                </Section>
            </div>
        </div>
    );
};

const Section = ({ number, title, children }) => (
    <div className="text-left">
        <h3 className="text-[#00849A] font-semibold text-[20px] leading-5 md:leading-7 lg:leading-[48px] md:text-[24px] lg:text-[32px] xl:text-[38px] mt-1 md:mt-[16px] lg:mt-[24px] xl:mt-[32px]">
            {number}. {title} :
        </h3>
        <div className="text-secondary2 font-normal text-[16px] md:text-[18px] md:leading-[30px] mt-1 md:mt-[8px] lg:mt-[10px]">
            {children}
        </div>
    </div>
);

export default TermsAndConditions;
