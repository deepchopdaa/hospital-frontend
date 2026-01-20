import React, { useState } from 'react';
import SeduleForm from '../Forms/ExistingForm';
import NewSchedule from '../Forms/NewFrom';
import { Link, Outlet } from 'react-router-dom';

const CombinedConsultation = () => {
    const [patientType, setPatientType] = useState('new');

    return (
        <div className="w-full lg:max-w-[1500px] px-4 2xl:px-0 my-5 md:my-[50px] lg:my-[80px] xl:my-[100px] 2xl:my-[120px] mx-auto">
            <div className="bg-[#eaf7f9]  rounded-xl  mx-auto  border pt-5 md:pt-10 lg:pt-14 xl:pt-20 border-[#0097a7] ">
                <h2 className="text-base md:text-[38px] lg:leading-[50px] font-bold text-center text-Primary ">
                    Schedule Your Consultation
                </h2>
                <div className="flex justify-center gap-4 mt-5 md:mt-7 lg:mt-10">
                    <button
                        type="button"
                        onClick={() => setPatientType('new')}
                        className={`px-6 py-2 rounded-xl border 
                        ${patientType === 'new'
                                ? 'bg-[#CEE8ED] border-[#00849A] text-[#00849A] py-[5px] px-[15px] text-base md:py-[19px]  md:px-[55px] leading-[30px] md:text-[22px] font-bold'
                                : 'bg-[#CEE8ED] border-[#00849A] text-[#00849A] py-[5px] px-[15px] text-base md:py-[19px]  md:px-[55px] leading-[30px] md:text-[22px] font-normal'}
                        `}
                    >
                        New Patient
                    </button>
                    <button
                        type="button" 
                        onClick={() => setPatientType('existing')}
                        className={`px-6 py-2 rounded-xl border 
                            ${patientType === 'existing'
                                ? 'bg-[#CEE8ED] border-[#00849A]  text-[#00849A] py-[5px] px-[15px] text-base md:py-[19px]  md:px-[55px] leading-[30px] md:text-[22px] font-bold'
                                : 'bg-[#CEE8ED] border-[#00849A]  text-[#00849A] py-[5px] px-[15px] text-base md:py-[19px]  md:px-[55px] leading-[30px] md:text-[22px] font-normal'}
                            `}
                    >
                        Existing Patient
                    </button>
                </div>

                {/* Conditional Rendering */}
                {patientType === 'new' ? <NewSchedule /> : <SeduleForm />}
            </div>
            <p className="mt-3 md:mt-5 lg:mt-[30px] text-base text-left text-[#21A0B6] md:text-[22px] font-medium">
                If You Need To Change Your Appointment, We’ve Got You Covered! Please Click The Link For Appointment{' '}
                <Link to="ResheduleCancle" className='underline'>Reschedule Or Cancel.</Link>
            </p>
            <p className="font-normal text-left text-base md:text-lg  text-[#21A0B699] mt-1 md:mt-2">
                *The appointment will be rescheduled within 24 hours.
            </p>
            <Outlet />
        </div>
    );
};

export default CombinedConsultation;
