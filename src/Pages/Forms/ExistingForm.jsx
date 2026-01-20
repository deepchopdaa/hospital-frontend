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


const Schedule = () => {
    const datePickerRef = useRef(null);
    const [activePopup, setActivePopup] = useState(null);
    const { setappData } = useContext(AppContext);
    const todayDate = new Date().toISOString().split('T')[0];
    const [phoneNo, setPhoneNo] = useState("");
    const [PatientId, setPatientId] = useState(null)
    const [otp, setOtp] = useState(Array(6).fill(""));
    const { appData, setPhoneData } = useContext(AppContext);
    const { phoneData } = useContext(AppContext);
    const [MasaageBox, setMasaageBox] = useState({ show: false, type: "", message: "" });

    /* close popup function */
    const closePopup = () => {
        setActivePopup(null);
    };

    /* from feild initialvalues */
    const initialValues = {
        PatientId: '',
        Date: '',
        Time: '',
        Message: '',
    };

    /* form validation schema */
    const validationSchema = Yup.object({
        PatientId: Yup.string().required("PatientId. is required"),
        Date: Yup.date().required("Date is required").min(todayDate, "Date cannot be in the past"),
        Time: Yup.string().required("Time is required"),
        Message: Yup.string(),
    });

    /* handle change on OTP input */
    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value && index < 5) {
                document.getElementById(`otp-${index + 1}`)?.focus();
            }
        }
    };

    /* check validate PhoneNumber for get Patient Detail */
    const checkNumber = async () => {
        if (!phoneNo || phoneNo.length !== 10 || !/^\d{10}$/.test(phoneNo)) {
            setMasaageBox({ show: true, type: "error", message: "Please enter a valid 10-digit phone number." });
            return;
        }
        try {
            const response = await axios.get(`http://192.168.1.7:5000/patient/getphoneno/${phoneNo}`);
            if (response.status === 200) {
                setPhoneData(response.data.data);
                setOtp(Array(6).fill(""))
                setActivePopup("otpVerify")
            }
        } catch (error) {
            setPhoneNo(null)
            setMasaageBox({ show: true, type: "error", message: error?.response?.data?.message || "Phone number not registered " });
        }
    };

    /* submit From For Appointment */
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

            const response = await axios.post("http://192.168.1.7:5000/patient/ExistPatient", payload);
            if (response.status === 200) {
                setappData(response.data.data);
                resetForm();
                setActivePopup("appointmentApprove");
            } else {
                setMasaageBox({ show: true, type: "error", message: "Unexpected server response." });
            }
        } catch (error) {
            setMasaageBox({ show: true, type: "error", message: error?.response?.data?.message || "Patient Application Not Submitted!" });
        }
    };

    /* Check Patient Avaible or Not On feild change */
    const CheckPatientId = async (val) => {
        try {
            const response = await axios.post("http://192.168.1.7:5000/patient/ExistPatientCheck", { PatientId: val });
            if (response.status === 200) {
                setMasaageBox({ show: true, type: "success", message: "Patient Avaiable" });
            } else {
                setMasaageBox({ show: true, type: "error", message: "Patient Not Found" });
            }
        } catch (error) {
            setMasaageBox({ show: true, type: "error", message: error?.response?.data?.message || "Patient Not Found!" });
        }
    }

    /* formate Date and Day */
    function formatDateToDayMonth(isoString) {
        const date = new Date(isoString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        return `${day}-${month}`;
    }

    /* format Time */
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
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} validateOnChange={true} validateOnBlur={true}>
                {() => (
                    <Form className="mt-5 md:mt-10 lg:min-h-[355px] px-2 md:px-[126px]">
                        <div className="">
                            <label htmlFor="PatientId" className="block text-Primary font-medium text-base md:text-[22px]">
                                Patient ID
                            </label>
                            <Field
                                name="PatientId"
                                placeholder="d-102"
                                onBlur={(e) => {
                                    const val = e.target.value;
                                    setPatientId(val);
                                    CheckPatientId(val);
                                }}
                                className="w-full border-b border-[#cceef2] bg-transparent text-Primary py-2 md:py-[10px] focus:outline-none placeholder:text-[#D1E9ED]"
                            />
                            <button
                                type="button"
                                onClick={() => setActivePopup("phoneNo")}
                                className="w-full flex text-base justify-end text-Primary underline mt-1"
                            >
                                Forget Patient ID
                            </button>
                            <ErrorMessage name="PatientId" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-5 mt-2 md:mt-6">
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
                                                    form.setFieldValue("Time", null);
                                                }}
                                                filterDate={(date) => {
                                                    const today = new Date();
                                                    return date >= today.setHours(0, 0, 0, 0) && date.getDay() !== 0;
                                                }}
                                                dateFormat="dd-MM-yyyy"
                                                placeholderText="dd-mm-yyyy"
                                                className="block w-full bg-transparent text-Primary py-2 md:py-[10px] pr-10 appearance-none placeholder:text-[#D1E9ED] focus:outline-none"
                                            />
                                            <div
                                                className="absolute right-2 inset-y-0 flex items-center rounded-md cursor-pointer"
                                                onClick={() => datePickerRef.current.setOpen(true)}
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
                                                onChange={(date) => form.setFieldValue("Time", date)}
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
                                                className="block w-full  bg-transparent text-Primary py-2 md:py-[10px] pr-10 appearance-none placeholder:text-[#D1E9ED] focus:outline-none"
                                            />
                                        );
                                    }}
                                </Field>
                                <ErrorMessage name="Time" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                        </div>
                        <div className="mt-2 md:mt-6">
                            <label htmlFor="Message" className="block text-Primary font-medium text-base md:text-[22px]">
                                Message (Optional) :
                            </label>
                            <Field
                                name="Message"
                                as="textarea"
                                rows={2}
                                placeholder="Enter your message"
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
                )}
            </Formik>
            {/* Retrieve Case Number Popup */}
            {activePopup === 'retrieveCaseNumber' && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4">
                    <div className="relative bg-white rounded-xl w-full max-w-[450px] md:max-w-[613px] shadow-lg border-[2px] border-[#0097a7] overflow-visible">
                        <button
                            className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-base"
                            onClick={() => { setOtp([]); setPhoneNo(null); closePopup(); }}
                        >
                            <IoMdClose />
                        </button>
                        <div className="m-2 md:m-5 lg:my-7 xl:my-10 lg:mx-[35px] xl:mx-10 2xl:my-10 2xl:mx-[51px] text-center">
                            <h2 className="text-xl md:text-3xl lg:text-[38px] leading-[50px] font-bold text-[#00849A]">
                                Case Number Retrieved!
                            </h2>
                            <p className="font-semibold text-lg md:text-[20px] leading-[28px] mt-1 md:mt-5 lg:mt-[30px]">
                                Your case number: {phoneData?.PatientId}
                            </p>
                            <p className="font-normal text-base md:text-lg leading-[28px] mt-1 md:mt-2 lg:mt-[10px]">
                                Please use it to access your appointment details or manage your booking. If you need further assistance, feel free to reach out to us anytime.
                            </p>
                            <p className="font-normal text-base md:text-lg leading-[28px] mt-1 md:mt-[7px]">
                                Thank you!
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Otp Verify Popup */}
            {
                activePopup === 'otpVerify' && (
                    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4">
                        <div className="relative bg-white rounded-xl w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[792px] border-[2px] border-[#0097a7] shadow-lg overflow-visible">
                            <button
                                className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-base"
                                onClick={() => { setOtp(Array(6).fill("")); setPhoneNo(null); closePopup(); }}
                            >
                                <IoMdClose />
                            </button>
                            <div className="m-5 md:my-10 md:mx-[50px] lg:my-14 lg:mx-[70px] xl:my-16 xl:mx-[80px] 2xl:mx-[100px] 2xl:my-20 text-center">
                                <h2 className="text-xl md:text-3xl lg:text-[38px] md:leading-[50px] font-bold text-[#00849A]">
                                    Enter OTP
                                </h2>
                                <p className="text-[#00849A] font-medium text-lg md:text-[22px] md:leading-7 lg:leading-8 xl:leading-5 mt-3 md:mt-6 lg:mt-[30px]">
                                    A verification code has been sent to +91 {phoneData?.PhoneNo} |{' '}
                                    <button
                                        onClick={() => { setActivePopup("phoneNo"); setOtp(Array(6).fill("")); }}
                                        className="cursor-pointer"
                                    >
                                        Edit
                                    </button>
                                </p>
                                {/* OTP Input Fields */}
                                <div className="flex justify-center gap-3 mt-4 md:mt-8">
                                    {otp.map((digit, idx) => (
                                        <input
                                            key={idx}
                                            id={`otp-${idx}`}
                                            type="text"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(e) => handleChange(e, idx)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Backspace" && !otp[idx] && idx > 0) {
                                                    document.getElementById(`otp-${idx - 1}`)?.focus();
                                                }
                                            }}
                                            className="w-8 h-8 md:w-[66px] md:h-[54px] text-center border border-[#99dbe4] rounded-xl text-xl bg-[#00849A1A] text-[#00849A] focus:outline-none"
                                        />
                                    ))}
                                </div>
                                <button
                                    onClick={() => {
                                        const isAllFilled = otp.every((digit) => digit !== "");
                                        if (!isAllFilled) {
                                            MasaageBox.error("Please enter all 6 digits of the OTP.");
                                            return;
                                        } else {
                                            setOtp(Array(6).fill(""))
                                        }
                                        setActivePopup("retrieveCaseNumber");
                                    }}
                                    className="bg-secondary text-white md:py-3 py-1 px-4 md:px-10 rounded-xl text-base md:text-[20px] leading-[30px] font-bold mt-5 md:mt-10"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            {/* Phone No Popup */}
            {
                activePopup === 'phoneNo' && (
                    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4">
                        <div className="relative bg-white rounded-xl max-h-[404px] lg:h-[404px] max-w-[450px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[976px] w-full shadow-lg border-[2px]  border-[#0097a7] overflow-visible">
                            <button
                                className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-base"
                                onClick={() => { setPhoneNo(null); closePopup(); }}
                            >
                                <IoMdClose />
                            </button>
                            <div className="mx-6 md:my-10 md:mx-10  md:mt-14 lg:mx-20 lg:my-20 text-center">
                                <h2 className="text-2xl md:text-3xl lg:text-[32px] xl:text-[38px] leading-[50px] font-bold text-[#00849A]">
                                    Enter Your Phone No.
                                </h2>
                                <div className="text-left mt-2 md:mt-5 lg:mt-10">
                                    <label
                                        htmlFor="PatientId"
                                        className="block text-[#00849A] font-medium leading-[20px] text-lg md:text-[22px] mb-1"
                                    >
                                        Phone No.
                                    </label>
                                    <input
                                        type="text"
                                        id="PatientId"
                                        maxLength="10"
                                        value={phoneNo}
                                        onChange={(e) => setPhoneNo(e.target.value.replace(/\D/g, ""))}
                                        placeholder="1234567890"
                                        className="w-full border-b border-[#cceef2] font-normal bg-transparent text-Primary py-2 focus:outline-none placeholder:text-[#D1E9ED]"
                                    />
                                </div>
                                <div>
                                    <button
                                        onClick={checkNumber}
                                        className="bg-secondary text-white md:py-3 py-1 px-4 md:px-10 rounded-xl text-lg md:text-[20px] leading-[30px] font-bold mb-5 md:mb-0 mt-5 md:mt-10 lg:mt-10"
                                    >
                                        Get OTP
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            {/* Appointment Aproove */}
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

            {/* message */}
            {
                MasaageBox.show && (
                    <Message
                        type={MasaageBox.type}
                        message={MasaageBox.message}
                        onClose={() => setMasaageBox({ ...MasaageBox, show: false })}
                    />
                )}

        </div >
    );
};

export default Schedule;
