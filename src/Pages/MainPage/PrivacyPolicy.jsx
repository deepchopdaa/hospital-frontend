import React from 'react';

const privacypolicy = () => {
    return (
        <div className='mx-auto w-full lg:max-w-[1500px]'>

            <div className="text-left px-4 2xl:px-0 my-5 md:my-[50px] lg:my-[80px] xl:my-[100px] 2xl:my-[120px] text-[#333] mx-auto">
                <h2 className="text-center text-[#00849A] text-3xl md:text-[40px] lg:text-[50px] xl:text-6xl lg:leading-[75px] font-semibold ">
                    Privacy Policy
                </h2>
                <p className="text-center text-secondary2 mt-1 md:mt-[10px] text-[18px] md:text-xl lg:text-[22px] md:leading-[32px] font-normal mx-auto">
                    Your Personal Information Is Securely Protected, And We Adhere To Strict Confidentiality.
                </p>
                <p className="text-secondary2 text-[16px] md:text-[18px] leading-[27px] mt-2 md:mt-[20px] lg:mt-[40px] xl:mt-[50px]">
                    At Dentty, we value your trust and are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our clinic, website, or interact with our services. We are dedicated to maintaining the confidentiality of your health data and ensuring compliance with relevant laws and regulations.
                </p>

                {/* Section 1 */}
                <h3 className="text-[#00849A] font-semibold text-[20px] lg:leading-[48px] md:text-[24px] lg:text-[32px] xl:text-[38px] md:mt-5 lg:mt-7 xl:mt-[32px]">1. Information We Collect :</h3>
                <p className='font-normal text-secondary2 text-[18px] leading-[27px] mt-1 md:mt-[10px]'>We may collect the following types of personal information from you :</p>
                <ul className="list-disc list-inside pl-3 md:pl-6 space-y-3 text-[16px] md:text-[18px] text-secondary2 mt-1 md:mt-[10px]">
                    <li>Contact Information: Name, email address, phone number, and mailing address.</li>
                    <li>Health Information: Medical history, dental records, and treatment information.</li>
                    <li>Payment Details: Billing address, payment method, and other financial details for processing payments.</li>
                    <li>Website Data: IP address, browser type, and other technical information collected through cookies and tracking technologies.</li>
                </ul>

                {/* Section 2 */}
                <h3 className="text-[#00849A] font-semibold text-[20px] lg:leading-[48px] md:text-[24px] lg:text-[32px] xl:text-[38px] md:mt-5 lg:mt-7 xl:mt-[32px]">2. How We Use Your Information :</h3>
                <p className='font-normal text-secondary2 text-[18px] md:leading-[27px] mt-1 md:mt-[10px]'>Your personal information is used to :</p>
                <ul className="list-disc list-inside pl-3 md:pl-6 space-y-3 text-[16px]  md:leading-[27px] md:text-[18px] text-secondary2 mt-1 md:mt-[10px]">
                    <li>Provide Services: Schedule appointments, manage dental records, and deliver treatments based on your health needs.</li>
                    <li>Billing and Payments: Process payments, insurance claims, and other financial transactions.</li>
                    <li>Communication: Send reminders, notifications, and updates related to your treatments and appointments.</li>
                    <li>Improve Services: Analyze website traffic, improve user experience, and enhance our offerings based on your feedback.</li>
                </ul>

                {/* Section 3 */}
                <h3 className="text-[#00849A] font-semibold text-[20px] lg:leading-[48px] md:text-[24px] lg:text-[32px] xl:text-[38px] md:mt-5 lg:mt-7 xl:mt-[32px]">3. Data Security :</h3>
                <p className="text-secondary2 text-[16px] md:text-[18px] md:leading-[27px] mt-1 md:mt-[10px]">
                    We take the security of your personal information seriously and employ industry-standard measures to protect it. This includes:
                </p>
                <ul className="list-disc list-inside pl-3 md:pl-6 space-y-2 text-[16px] md:text-[18px] md:leading-[27px] text-secondary2 mt-1 md:mt-[10px]">
                    <li>Encryption: Securing sensitive data, such as health and financial information, using encryption technologies.</li>
                    <li>Access Control: Limiting access to personal data to authorized personnel only.</li>
                    <li>Data Retention: Retaining your information only for as long as necessary to fulfill our services and legal obligations.</li>
                </ul>

                {/* Section 4 */}
                <h3 className="text-[#00849A] font-semibold text-[20px] lg:leading-[48px] md:text-[24px] lg:text-[32px] xl:text-[38px] md:mt-5 lg:mt-7 xl:mt-[32px]">4. Sharing Your Information :</h3>
                <p className="text-secondary2 text-[16px] md:text-[18px] md:leading-[27px] mt-1 md:mt-[10px]">
                    We may share your personal data in limited circumstances:
                </p>
                <ul className="list-disc list-inside pl-3 md:pl-6 space-y-2 text-[16px] leading-[27px] md:text-[18px] text-secondary2 mt-1 md:mt-[10px]">
                    <li>With Your Consent: We’ll seek your explicit consent before sharing your information with third parties for purposes outside of treatment, payment, or healthcare operations.</li>
                    <li>Third-Party Providers: We may share information with service providers, such as labs or payment processors, who assist in delivering dental care.</li>
                    <li>Legal Obligations: If required by law or a court order, we may disclose your information to comply with legal regulations.</li>
                </ul>

                {/* Section 5 */}
                <h3 className="text-[#00849A] font-semibold text-[20px] lg:leading-[48px] md:text-[24px] lg:text-[32px] xl:text-[38px] md:mt-5 lg:mt-7 xl:mt-[32px]">5. Your Rights :</h3>
                <p className='font-normal text-secondary2 text-[18px] md:leading-[27px]'> <span className='font-normal text-secondary2 text-[18px] leading-[27px] mt-1 md:mt-[10px]'>As a patient, you have the following rights :</span></p>
                <ul className="list-disc list-inside pl-3 md:pl-6 space-y-2 text-[16px] md:leading-[27px] md:text-[18px] text-secondary2 mt-1 md:mt-[10px]">
                    <li>Access: You can request copies of your dental records and personal information.</li>
                    <li>Correction: If any of your information is inaccurate, you have the right to request corrections.</li>
                    <li>Deletion: In certain cases, you may request that your personal data be deleted, subject to legal and medical record-keeping requirements.</li>
                    <li>Restrictions: You may restrict certain uses of your personal data, particularly in marketing communications.</li>
                </ul>

                {/* Section 6 */}
                <h3 className="text-[#00849A] font-semibold text-[20px] lg:leading-[48px] md:text-[24px] lg:text-[32px] xl:text-[38px] md:mt-5 lg:mt-7 xl:mt-[32px]">6. Cookies And Website Data :</h3>
                <p className="text-secondary2 text-[16px] md:text-[18px] md:leading-[27px] mt-1 md:mt-[10px]">
                    Our website uses cookies to improve your browsing experience and analyze site traffic. You may opt out of non-essential cookies or adjust your browser settings to block cookies. By continuing to use our website, you consent to our use of cookies as described in this policy.
                </p>

                {/* Section 7 */}
                <h3 className="text-[#00849A] font-semibold text-[20px] lg:leading-[48px] md:text-[24px] lg:text-[32px] xl:text-[38px] md:mt-5 lg:mt-7 xl:mt-[32px]">7. Changes To This Policy :</h3>
                <p className="text-secondary2 text-[16px] md:text-[18px] md:leading-[27px] mt-1 md:mt-[10px]">
                    We may update this Privacy Policy to reflect changes in our practices or legal requirements. Any modifications will be posted on this page, and we encourage you to review it periodically.
                </p>

                {/* Section 8 */}
                <h3 className="text-[#00849A] font-semibold text-[20px] lg:leading-[48px] md:text-[24px] lg:text-[32px] xl:text-[38px] md:mt-5 lg:mt-7 xl:mt-[32px]">8. Contact Us :</h3>
                <p className="text-secondary2 text-[16px] md:text-[18px] md:leading-[27px] mt-1 md:mt-[10px]">
                    If you have any questions about this Privacy Policy or your personal data, please contact us at:
                </p>
                <div className="text-secondary2 text-[16px] md:text-[18px] md:leading-[27px] mt-1 md:mt-[10px]">
                    <p>Dentty Dental Clinic,<br />123 Smile Avenue, City, ZIP</p>
                    <p>Phone: +91-1234 67890 | 01234 56789</p>
                    <p>Email: denttyclinic@gmail.com</p>
                </div>
                <p className="text-secondary2 text-[16px] md:text-[18px] md:leading-[27px] mt-1 md:mt-3">
                    We are committed to protecting your privacy and ensuring a transparent and secure experience at Dentty.
                </p>
            </div>
        </div>
    );
};

export default privacypolicy;
