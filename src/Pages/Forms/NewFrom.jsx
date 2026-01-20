import React, { useContext, useEffect, useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { AppContext } from '../../AppContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoMdClose } from "react-icons/io";
import Message from '../../Utility/MesaageBox';
import DateIcon from "../../assets/image/comman/DateIcon.png";
import Icon from "../../assets/image/comman/done.png";


const NewScheduleForm = () => {
    const [activePopup, setActivePopup] = useState(null);
    const { appData } = useContext(AppContext);
    const datePickerRef = useRef(null);
    const { setappData } = useContext(AppContext);
    const [MasaageBox, setMasaageBox] = useState({ show: false, type: "", message: "" });

    /* form feild init */
    const initialValues = {
        FullName: '',
        PhoneNo: '',
        Date: '',
        Time: '',
        Message: '',
    };

    /* form feild validation */

    const validationSchema = Yup.object({
        FullName: Yup.string().required("Full Name is required"),
        PhoneNo: Yup.string()
            .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
            .required("Phone number is required"),
        Date: Yup.date().required("Date is required"),
        Time: Yup.string().required("Time is required"),
        Message: Yup.string(),
    });

    /* New Patient Appoitment From Submit Function */
    const handleSubmit = async (values, { resetForm }) => {
        try {
            const timeString = values.Time;
            const dateStr = timeString
            const dateObj = new Date(dateStr);
            const hours = dateObj.getHours().toString().padStart(2, '0');
            const minutes = dateObj.getMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes}`;
            const payload = {
                ...values,
                Time: formattedTime,
            };

            /* New Patient Appointment Api Called */
            const response = await axios.post("https://hospital-management-dq7p.onrender.com/patient/NewPatient", payload);
            if (response.status === 200) {
                setappData(response.data.data);
                resetForm();
                setActivePopup("appointmentApprove");
            } else {
                setMasaageBox({ show: true, type: "error", message: "Unexpected server response." });
            }
        } catch (error) {
            console.error("New Patient Error:", error);
            setMasaageBox({ show: true, type: "error", message: error?.response?.data?.message || "Patient Application Not Submitted!" });
        }
    };

    /* closepop function */

    const closePopup = () => {
        setActivePopup(null);
    };


    /* date and Time format function */

    function formatDateToDayMonth(isoString) {
        const date = new Date(isoString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        return `${day}-${month}`;
    }


    function formatTimeTo12Hour(time24) {
        const [hour, minute] = time24.split(':');
        const hourNum = parseInt(hour);
        const ampm = hourNum >= 12 ? 'PM' : 'AM';
        const hour12 = hourNum % 12 || 12;
        return `${hour12}:${minute} ${ampm}`;
    }

    /* active popup useEffect */
    useEffect(() => {
        if (activePopup) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [activePopup]);

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ values }) => {
                    return (
                        <Form className="mt-5 md:mt-10 lg:min-h-[355px] px-2 sm:px-5 md:px-[40px] lg:px-20 xl:px-24 2xl:px-[126px]">
                            <div className=''>
                                <label htmlFor="FullName" className="block text-Primary font-medium text-base md:text-[22px]">
                                    Full Name :
                                </label>
                                <Field
                                    name="FullName"
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full border-b border-[#cceef2] bg-transparent text-Primary py-2 md:py-[10px] focus:outline-none placeholder:text-[#D1E9ED]"
                                />
                                <ErrorMessage name="FullName" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className='mt-2 md:mt-6'>
                                <label htmlFor="PhoneNo" className="block text-Primary font-medium text-base md:text-[22px]">
                                    Phone No. :
                                </label>
                                <Field name="PhoneNo">
                                    {({ field, form }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={10}
                                            pattern="[0-9]*"
                                            placeholder="1234567890"
                                            className="w-full border-b border-[#cceef2] bg-transparent text-Primary py-2 md:py-[10px] focus:outline-none placeholder:text-[#D1E9ED]"
                                            onChange={(e) => {
                                                const value = e.target.value.replace(/\D/g, "");
                                                if (value.length <= 10) {
                                                    form.setFieldValue("PhoneNo", value);
                                                }
                                            }}
                                        />
                                    )}
                                </Field>
                                <ErrorMessage name="PhoneNo" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-6 mt-2 md:mt-6">
                                <div className="flex-1 relative border-b border-[#cceef2]">
                                    <label htmlFor="Date" className="block text-Primary font-medium text-base md:text-[22px]">
                                        Date :
                                    </label>
                                    <Field name="Date">
                                        {({ field, form }) => (
                                            <div className="relative w-full">
                                                <DatePicker
                                                    ref={datePickerRef}
                                                    selected={field.value}
                                                    onChange={(date) => {
                                                        form.setFieldValue("Date", date);
                                                        form.setFieldValue("Time", null); // reset time
                                                    }}
                                                    filterDate={(date) => {
                                                        const today = new Date();
                                                        return date >= today.setHours(0, 0, 0, 0) && date.getDay() !== 0;
                                                    }}
                                                    dateFormat="dd-MM-yyyy"
                                                    placeholderText="DD/MM/YYYY"
                                                    className="block w-full bg-transparent text-Primary py-2 pr-10 md:py-[10px] appearance-none placeholder:text-[#D1E9ED] focus:outline-none"
                                                />
                                                <div
                                                    className="absolute right-2 inset-y-0 flex items-center rounded-md cursor-pointer"
                                                    onClick={() => datePickerRef.current.setOpen(true)} // Open date picker on icon click
                                                >
                                                    <img src={DateIcon} alt="date icon" className="w-5 h-5 mx-2" />
                                                </div>
                                            </div>
                                        )}
                                    </Field>
                                    <ErrorMessage name="Date" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div className="flex-1 relative border-b border-[#cceef2]">
                                    <label htmlFor="Time" className="block text-Primary font-medium text-base md:text-[22px]">
                                        Time :
                                    </label>
                                    <Field name="Time">
                                        {({ field, form }) => {
                                            const now = new Date();
                                            const selectedDate = form.values.Date;
                                            const isToday = selectedDate && new Date(selectedDate).toDateString() === now.toDateString();
                                            const times = [];
                                            const start = new Date();
                                            start.setHours(9, 0, 0, 0);
                                            for (let d = new Date(start); d.getHours() < 17 || (d.getHours() === 17 && d.getMinutes() <= 30); d.setMinutes(d.getMinutes() + 15)) {
                                                times.push(new Date(d));
                                            }
                                            const filtered = times.filter((t) => {
                                                if (isToday) {
                                                    return t > now;
                                                }
                                                return true;
                                            });

                                            return (
                                                <DatePicker
                                                    selected={field.value}
                                                    onChange={(date) => {
                                                        const localTime = new Date(date).toLocaleString("en-US", { timeZone: "Asia/Kolkata" }); // Adjust time zone as needed
                                                        form.setFieldValue("Time", new Date(localTime));
                                                    }}
                                                    showTimeSelect
                                                    showTimeSelectOnly
                                                    timeIntervals={15}
                                                    timeCaption="Time"
                                                    minTime={filtered[0] || start}
                                                    maxTime={new Date(start.setHours(17, 30, 0, 0))}
                                                    timeFormat="HH:mm"
                                                    dateFormat="HH:mm"
                                                    includeTimes={filtered}
                                                    placeholderText="__:__"
                                                    className="block w-full bg-transparent text-Primary py-2 pr-10 md:py-[10px] appearance-none placeholder:text-[#D1E9ED] focus:outline-none"
                                                />
                                            );
                                        }}
                                    </Field>
                                    <ErrorMessage name="Time" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                            </div>
                            <div className='mt-2 md:mt-6'>
                                <label htmlFor="Message" className="block text-Primary font-medium text-base md:text-[22px]">
                                    Message (Optional) :
                                </label>
                                <Field
                                    name="Message"
                                    as="textarea"
                                    rows={2}
                                    placeholder="Enter your Message"
                                    className="w-full border-b border-[#cceef2] bg-transparent text-Primary py-2 md:py-[10px] focus:outline-none placeholder:text-[#D1E9ED]"
                                />
                            </div>
                            <div className="flex justify-center  mt-2 mb-5 md:mt-5 lg:mt-10 md:mb-10 lg:mb-16 xl:mt-10 xl:mb-20">
                                <button
                                    type="submit"
                                    className="bg-secondary md:py-3 py-1 px-4 md:px-10 ] font-bold text-base md:text-[20px] leading-[30px] rounded-xl text-white"
                                >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>

            {/* appoitment approove popup */}
            {activePopup === 'appointmentApprove' && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4">
                    <div className="relative bg-white rounded-2xl max-w-[450px] md:max-w-[550px] lg:max-w-[600px] xl:max-w-[711px] w-full shadow-lg border-[2px] border-[#0097a7]">
                        <div className="relative md:h-[62px]">
                            <img
                                src={Icon}
                                alt="Success"
                                className="absolute -top-10 md:-top-14 lg:-top-16 xl:-top-20 left-1/2 transform -translate-x-1/2 z-30 w-20 h-20  md:w-28 md:h-28 lg:h-[135px] lg:w-[135px] xl:w-[152px] xl:h-[152px] mb-5 bg-white rounded-full shadow-lg"
                            />
                        </div>
                        <button
                            className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-base"
                            onClick={closePopup}
                        >
                            <IoMdClose />
                        </button>
                        <div className="mx-auto md:max-w-[646px] text-center md:mx-[32px] mt-10 md:mt-2 lg:mt-[28px] mb-2 md:mb-6 lg:mb-[32px]">
                            <h2 className="text-xl md:text-3xl lg:text-[38px] md:leading-[40px] font-semibold text-[#00849A]">
                                Appointment confirmed!
                            </h2>
                            <p className="text-secondary2 font-normal leading-[28px] text-base md:text-lg mt-3 md:mt-[16px] lg:mt-[22px]">
                                Thank you, <span className="capitalize font-medium">{appData?.PatientId?.FullName}</span>, for booking an appointment with Dentty!
                            </p>
                            <div className="text-secondary2 text-base font-normal leading-[28px] md:text-lg">
                                <p>
                                    PatientId: <span className="text-[#00849A] font-semibold">{appData?.PatientId?.PatientId}</span> |
                                    Patient number: <span className="text-[#00849A] font-semibold">+91 {appData?.PatientId?.PhoneNo}</span> |
                                    Date: <span className="text-[#00849A] font-semibold">{formatDateToDayMonth(appData?.Date)} - {formatTimeTo12Hour(appData?.Time)}</span>
                                </p>
                            </div>
                            <p className="text-secondary2 font-normal text-base md:text-lg md:mt-[14px] mt-1">
                                We have given the details & appointment confirmation in your Mobile number
                            </p>
                            <h2 className="text-secondary2 font-normal text-base md:text-lg md:mt-[14px]">
                                We look forward to helping you achieve healthy teeth. If you have any questions in the meantime, feel free to contact us at<br />
                                <p className="text-[#00849A] mt-1 md:mt-0">
                                    +91 01234 56789  |  Denttydental@gmail.com
                                </p>
                            </h2>
                        </div>
                    </div>
                </div>
            )}

            {/* Message */}
            {MasaageBox.show && (
                <Message
                    type={MasaageBox.type}
                    message={MasaageBox.message}
                    onClose={() => setMasaageBox({ ...MasaageBox, show: false })}
                />
            )}
        </div>
    );
};

export default NewScheduleForm;
