import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const Message = ({ type = "error", message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 4000); // auto close after 4 seconds
        return () => clearTimeout(timer);
    }, [onClose]);

    const bgColor = {
        error: "bg-red-100 border-red-500 text-red-700",
        success: "bg-green-100 border-green-500 text-green-700",
        info: "bg-blue-100 border-blue-500 text-blue-700",
    };
    return (
        <div className={`fixed bottom-5 right-5 z-50 p-4 rounded-lg border-l-4 shadow-lg w-[300px] ${bgColor[type]}`}>
            <div className="flex justify-between items-start">
                <p className="text-sm font-medium">{message}</p>
                <button onClick={onClose} className="ml-3 text-lg hover:text-black">
                    <IoMdClose />
                </button>
            </div>
        </div>
    );
};

export default Message;
