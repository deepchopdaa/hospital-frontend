import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [phoneData, setPhoneData] = useState(null);
    const [caseData, setCaseData] = useState(null);
    const [appData, setappData] = useState([]);
    const [patientData, setPatientData] = useState([]);
    const [casepetientdata, setcasepetientdata] = useState([]);

    return (
        <AppContext.Provider value={{
            phoneData,
            setPhoneData,
            casepetientdata,
            setcasepetientdata,
            caseData,
            setCaseData,
            patientData,
            setPatientData,
            appData,
            setappData
        }}>
            {children}
        </AppContext.Provider>
    );
};
