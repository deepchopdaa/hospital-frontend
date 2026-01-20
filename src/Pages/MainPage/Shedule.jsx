import { useContext, useEffect, useRef, useState } from 'react';
import SeduleForm from '../Forms/ExistingForm';
import NewSchedule from '../Forms/NewFrom';
import { AppContext } from '../../AppContext';
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import Message from '../../Utility/MesaageBox';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import DateIcon from "../../assets/image/comman/DateIcon.png";
import Icon from "../../assets/image/comman/done.png";

const NewCombinedConsultation = () => {

    const [patientType, setPatientType] = useState('new');
    const [activePopup, setActivePopup] = useState(null);
    const [inputDate, setInputDate] = useState(null);
    const [time, setTime] = useState(null);
    const [inputId, setInputId] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const datePickerRef = useRef(null);
    const [otp, setOtp] = useState(Array(6).fill(""));
    const { appData, caseData, setCaseData, setPhoneData } = useContext(AppContext);
    const { phoneData } = useContext(AppContext)
    const id = caseData?.PatientId?.PatientId;
    const [MasaageBox, setMasaageBox] = useState({ show: false, type: "", message: "" });

    /* popup close popup function */
    const closePopup = () => {
        setActivePopup(null);
    };

    /* format date function */
    function formatDateToDayMonth(isoString) {
        const date = new Date(isoString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        return `${day}-${month}`;
    }

    /* format time function */
    function formatTimeTo12Hour(time24) {
        const [hour, minute] = time24.split(':');
        const hourNum = parseInt(hour);
        const ampm = hourNum >= 12 ? 'PM' : 'AM';
        const hour12 = hourNum % 12 || 12;
        return `${hour12}:${minute} ${ampm}`;
    }

    /* check PhoneNumber value and format valid or not */
    const checkNumber = async () => {
        if (!phoneNo || phoneNo.length !== 10 || !/^\d{10}$/.test(phoneNo)) {
            setMasaageBox({ show: true, type: "error", message: "Please enter a valid 10-digit phone number." });
            return;
        }
        try {
            const response = await axios.get(`http://192.168.1.7:5000/patient/getphoneno/${phoneNo}`);
            if (response.status === 200) {
                setPhoneData(response.data.data);
                setActivePopup("otpVerify")
                setOtp(Array(6).fill(""));
            }
        } catch (error) {
            setPhoneNo(null)
            setMasaageBox({ show: true, type: "error", message: error?.response?.data?.message || "Phone number not registered " });
        }
    };

    /* reschedule appoitnment form submit */
    const reschedule = async () => {
        if (inputDate === null || time === null) {
            setMasaageBox({ show: true, type: "error", message: "Select The Date and Time !" });
            return;
        }
        try {
            const selectedDate = new Date(inputDate);
            const currentDate = new Date();
            const isToday = selectedDate.toDateString() === currentDate.toDateString();
            const [inputHour, inputMinute] = time.split(":").map(Number);
            const inputTime = new Date(selectedDate);
            inputTime.setHours(inputHour, inputMinute, 0, 0);
            if (isToday && inputTime <= currentDate) {
                setMasaageBox({ show: true, type: "error", message: "Please select a time greater than the current time." });
                return;
            }
            const payload = {
                Date: inputDate,
                Time: time,
            };

            const response = await axios.put(`http://192.168.1.7:5000/patient/Update/${id}`, payload);
            if (response.status === 200) {
                setCaseData(response.data.data);
                setActivePopup("rescheduleApprove");
                setInputDate(null)
                setTime(null)
            }
        } catch (error) {
            setMasaageBox({ show: true, type: "error", message: error?.response?.data?.message || "Reschedule Appointment Failed !" });
            setInputDate(null)
            setTime(null)
        }
    };

    /* otp function */
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

    // Handle appointment cancellation
    const handleCancel = async () => {
        const id = caseData?.PatientId?.PatientId;
        if (!id) {
            setMasaageBox({ show: true, type: "error", message: "PatientId Not Found For Reschedule Appointment !" });
            return;
        }
        try {
            const response = await axios.delete(`http://192.168.1.7:5000/patient/calcel/${id}`);
            if (response.status === 200) {
                setActivePopup("appointmentCancel")
            }
        } catch (error) {
            setMasaageBox({ show: true, type: "error", message: error?.response?.data?.message || "Reschedule Appointment Failed !" });
        }
    };

    // Handle case ID search
    const findCaseId = async () => {
        if (inputId === "") {
            setMasaageBox({ show: true, type: "error", message: "Please Fill PatientId !" });
            return;
        }
        try {
            const response = await axios.get(`http://192.168.1.7:5000/patient/Get/${inputId}`);
            if (response.status === 200) {
                setCaseData(response.data.data);
                setActivePopup("rescheduleCancel");
                setInputId(null)
            }
        } catch (error) {
            setMasaageBox({ show: true, type: "error", message: error?.response?.data?.message || 'Appointment Not Found !' });
            setInputId(null)
        }
    };

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


    useEffect(() => {
        setTime(null)
    }, [inputDate])

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
                <span className='underline cursor-pointer' onClick={() => setActivePopup("reschedule")}>Reschedule Or Cancel.</span>
            </p>
            <p className="font-normal text-left text-base md:text-lg  text-[#21A0B699] mt-1 md:mt-2">
                *The appointment will be rescheduled within 24 hours.
            </p>

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
                                Reschedule Appointment
                            </h2>
                            <p className="text-secondary2 font-normal leading-[28px] text-base md:text-lg mt-3 md:mt-[16px] lg:mt-[22px]">
                                Thank you, <span className="capitalize font-medium">{appData?.PatientId?.FullName}</span>, for rescheduling your appointment with Dentty!
                            </p>
                            <div className="text-secondary2 text-base font-normal leading-[28px] md:text-lg">
                                <p>
                                    PatientId: <span className="text-[#00849A] font-semibold">{appData?.PatientId?.PatientId}</span> |
                                    Patient number: <span className="text-[#00849A] font-semibold">+91 {appData?.PatientId?.PhoneNo}</span> |
                                    Date: <span className="text-[#00849A] font-semibold">{formatDateToDayMonth(appData?.Date)} - {formatTimeTo12Hour(appData?.Time)}</span>
                                </p>
                            </div>
                            <p className="text-secondary2 font-normal text-base md:text-lg md:mt-[14px] mt-1">
                                We have sent the reschedule details and confirmation to your mobile number.
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

            {activePopup === 'appointmentCancel' && (
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/40 px-4">
                    <div className="relative bg-white rounded-xl md:max-h-[307px] max-w-[400px] md:max-w-[500px] xl:max-w-[613px] w-full shadow-lg border-[2px] border-[#0097a7] overflow-visible">
                        <button
                            className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-base"
                            onClick={closePopup}
                        >
                            <IoMdClose />
                        </button>
                        <div className="mx-6 my-5 md:my-10 text-center">
                            <h2 className="text-2xl md:text-3xl xl:text-[38px] leading-[40px] font-semibold text-[#00849A] ">
                                Appointment Canceled !
                            </h2>
                            <p className="font-normal text-secondary2 text-base md:text-[18px] md:leading-[28px] mt-3 md:mt-[30px]">Your appointment has been successfully canceled.</p>
                            <p className="font-normal md:max-w-[450px] xl:max-w-[570px] text-secondary2 text-base md:text-[18px] capitalize md:leading-[28px]  md:mt-[10px]">We’re sorry to see you go, feel free to book a new appointment anytime. If you have any questions or need further assistance, please contact us.</p>
                            <p className="font-normal text-secondary2 text-base md:text-[18px] md:leading-[28px] mt-[7px]">Thank you for choosing us!</p>
                        </div>
                    </div>
                </div>
            )}

            {activePopup === 'cancelConfirmation' && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4">
                    <div className="relative bg-white rounded-xl w-full max-w-[350px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[616px] shadow-lg border-[2px] border-[#0097a7]">

                        <button
                            className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-base"
                            onClick={closePopup}
                        >
                            <IoMdClose />
                        </button>

                        <div className="m-4 md:m-6 lg:m-[40px] xl:m-[40px] 2xl:m-[50px] text-center">
                            <h2 className="text-xl md:text-2xl lg:text-[38px] lg:leading-[50px] font-bold text-[#00849A]">
                                Cancel Appointment
                            </h2>

                            <p className="text-secondary2 text-base md:text-lg lg:text-[22px] font-medium leading-5 mt-2 md:mt-4 lg:mt-5">
                                Are you sure you want to cancel your appointment?
                            </p>

                            <div className="flex justify-center flex-wrap gap-2 md:gap-4 lg:gap-5 mt-4 md:mt-6 lg:mt-[30px]">
                                <button
                                    onClick={handleCancel}
                                    className="border border-[#00849A] bg-white text-Primary  md:py-2 lg:py-3 px-4 md:px-8 lg:px-10 rounded-xl text-base md:text-lg lg:text-[20px] font-bold leading-[30px]"
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={closePopup}
                                    className="bg-[#00849A] text-white  md:py-2 lg:py-3 px-4 md:px-8 lg:px-10 rounded-xl text-base md:text-lg lg:text-[20px] font-bold leading-[30px]"
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activePopup === 'otpVerify' && (
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

            {activePopup === 'phoneNo' && (
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

            {activePopup === 'rescheduleAppointment' && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4">
                    <div className="relative bg-white rounded-xl w-full max-w-[400px] md:max-w-[550px] lg:max-w-[700px] xl:max-w-[750px] 2xl:max-w-[916px] shadow-lg border-[2px] border-[#0097a7]">
                        <button
                            className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-base"
                            onClick={closePopup}
                        >
                            <IoMdClose />
                        </button>
                        <div className="m-5 md:m-10 lg:m-14 xl:m-16 2xl:m-20 text-center">
                            <h2 className="text-2xl md:text-[32px] lg:text-[38px] leading-tight font-bold text-[#00849A]">
                                Reschedule Appointment
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-10 lg:mt-[56px]">

                                <div className="relative w-full text-left border-b border-[#cceef2]">
                                    <label
                                        htmlFor="date"
                                        className="block text-[#00849A] text-lg md:text-xl lg:text-[22px] font-medium"
                                    >
                                        Date:
                                    </label>
                                    <DatePicker
                                        ref={datePickerRef}
                                        selected={inputDate}
                                        onChange={(date) => setInputDate(date)}
                                        filterDate={(date) => {
                                            const today = new Date();
                                            return date >= today.setHours(0, 0, 0, 0) && date.getDay() !== 0;
                                        }}
                                        dateFormat="dd-MM-yyyy"
                                        placeholderText="dd-mm-yyyy"
                                        className="w-full bg-transparent text-Primary py-2 pr-10 placeholder:text-[#D1E9ED] focus:outline-none"
                                    />
                                    <div
                                        className="absolute right-2 inset-y-0 flex items-center cursor-pointer"
                                        onClick={() => datePickerRef.current.setOpen(true)}
                                    >
                                        <img src={DateIcon} alt="date icon" className="w-[18px] h-[18px] mx-2" />
                                    </div>
                                </div>
                                <div className="text-left border-b border-[#cceef2] ">
                                    <label
                                        htmlFor="time"
                                        className="block text-[#00849A] text-lg md:text-xl lg:text-[22px] font-medium"
                                    >
                                        Time:
                                    </label>
                                    <DatePicker
                                        selected={time ? new Date(`1970-01-01T${time}:00`) : null}
                                        onChange={(date) => {
                                            const hours = date.getHours().toString().padStart(2, '0');
                                            const minutes = date.getMinutes().toString().padStart(2, '0');
                                            setTime(`${hours}:${minutes}`);
                                        }}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        minTime={(() => {
                                            const now = new Date();
                                            const selectedDate = new Date(inputDate);
                                            if (selectedDate && selectedDate.toDateString() === now.toDateString()) {
                                                return now;
                                            }
                                            return new Date().setHours(9, 0, 0);
                                        })()}
                                        maxTime={new Date().setHours(17, 30, 0)}
                                        timeFormat="HH:mm"
                                        dateFormat="HH:mm"
                                        placeholderText="__:__"
                                        className="w-full bg-transparent text-Primary py-2 pr-10 placeholder:text-[#D1E9ED] focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center flex-wrap gap-3 lg:gap-[20px] mt-3 md:mt-6 lg:mt-10">
                                <button
                                    onClick={closePopup}
                                    className="border border-[#00849A] text-[#00849A] bg-white py-1 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-xl text-base md:text-lg lg:text-[20px] font-bold leading-[30px]"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={reschedule}
                                    className="bg-[#00849A] text-white py-1 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-xl text-base md:text-lg lg:text-[20px] font-bold leading-[30px]"
                                >
                                    Reschedule
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activePopup === 'reschedule' && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4">
                    <div className="relative bg-white rounded-xl max-h-[428px] max-w-[450px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[976px] w-full shadow-lg border-[2px] border-[#0097a7] overflow-visible">

                        <button
                            className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-base"
                            onClick={closePopup}
                        >
                            <IoMdClose />
                        </button>

                        <div className="m-6 md:m-10 lg:m-14 xl:m-16 2xl:m-20 text-center">
                            <h2 className="text-lg md:text-3xl xl:text-[38px] md:eading-[50px]  font-bold text-[#00849A]">
                                Reschedule / Cancel Appointment
                            </h2>
                            <div className="mt-3 md:mt-5 lg:mt-10 text-left">
                                <label
                                    htmlFor="PatientId"
                                    className="block text-[#00849A] font-medium leading-[20px] text-base md:text-[20px] lg:text-[22px] mb-1"
                                >
                                    Patient ID
                                </label>
                                <input
                                    type="text"
                                    id="PatientId"
                                    placeholder="DD-102"
                                    onChange={(e) => setInputId(e.target.value)}
                                    className="w-full border-b border-[#cceef2] font-normal bg-transparent text-Primary py-2 focus:outline-none placeholder:text-[#D1E9ED]"
                                />
                                <div className="flex justify-end">
                                    <button
                                        className="mt-1 text-base font-normal text-Primary underline"
                                        onClick={() => setActivePopup("phoneNo")}
                                    >
                                        Forget Patient ID
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={findCaseId}
                                className="bg-secondary text-white md:py-3 py-1 px-4 md:px-10 rounded-xl text-base md:text-[20px] leading-[30px] font-bold mt-3 md:mt-5 lg:mt-10"
                            >
                                Find
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {activePopup === 'rescheduleCancel' && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4">
                    <div className="relative bg-white rounded-xl w-full max-w-[400px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[792px] shadow-lg border-[2px] border-[#0097a7] overflow-visible">

                        <button
                            className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-base"
                            onClick={closePopup}
                        >
                            <IoMdClose />
                        </button>

                        <div className="m-6 md:m-10 lg:m-14 xl:m-16 2xl:m-20 text-center">
                            <h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-[38px] leading-7 md:leading-10 lg:leading-[50px] font-bold text-[#00849A]">
                                Reschedule / Cancel Appointment
                            </h2>

                            <div className="text-secondary2 font-medium text-base md:text-xl xl:text-[22px] leading-5 mt-3 md:mt-4 lg:mt-5 xl:mt-8 2xl:mt-10">
                                Appointment:{" "}
                                <span className="font-semibold">
                                    {formatDateToDayMonth(caseData?.Date)} - {formatTimeTo12Hour(caseData?.Time)}
                                </span>
                            </div>

                            <div className="text-secondary2 text-base md:text-xl xl:text-[22px] leading-5 mt-2 md:mt-3 lg:mt-4 2xl:mt-[19px]">
                                Patient ID: <span className="font-semibold">{caseData?.PatientId?.PatientId}</span> |
                                Patient Name: <span className="font-semibold">{caseData?.PatientId?.FullName}</span>
                            </div>

                            <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-5 mt-5 md:mt-[30px] lg:mt-[50px]">
                                <button
                                    onClick={() => setActivePopup("cancelConfirmation")}
                                    className="border border-[#00849A] bg-white text-Primary py-1 xl:py-3 px-4 md:px-10 rounded-xl text-base md:text-lg xl:text-[20px] lg:leading-[30px] font-bold"
                                >
                                    Cancel Appointment
                                </button>
                                <button
                                    onClick={() => setActivePopup("rescheduleAppointment")}
                                    className="bg-[#00849A] text-white py-1 xl:py-3 px-4 md:px-10 rounded-xl text-base md:text-lg xl:text-[20px] lg:leading-[30px] font-bold"
                                >
                                    Reschedule Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activePopup === 'rescheduleApprove' && (
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
                                Reschedule Appointment
                            </h2>
                            <p className="text-secondary2 font-normal leading-[28px] text-base md:text-lg mt-3 md:mt-[16px] lg:mt-[22px]">
                                Thank you, <span className="capitalize font-medium">{caseData?.PatientId?.FullName}</span>, for rescheduling your appointment with Dentty!
                            </p>
                            <div className="text-secondary2 text-base font-normal leading-[28px] md:text-lg">
                                <p>
                                    PatientId: <span className="text-[#00849A] font-semibold">{caseData?.PatientId?.PatientId}</span> |
                                    Patient number: <span className="text-[#00849A] font-semibold">+91 {caseData?.PatientId?.PhoneNo}</span> |
                                    Date: <span className="text-[#00849A] font-semibold">{formatDateToDayMonth(caseData?.Date)} - {formatTimeTo12Hour(caseData?.Time)}</span>
                                </p>
                            </div>
                            <p className="text-secondary2 font-normal text-base md:text-lg md:mt-[14px] mt-1">
                                We have sent the reschedule details and confirmation to your mobile number.
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

export default NewCombinedConsultation;
