import { createContext, useState, useContext } from "react";

export const CaptainDataContext = createContext();

// export const useCaptain = () => {
//     const context = useContext(CaptainContext);  
//     if (!captain) {
//         throw new Error("useCaptain must be used within a CaptainProvider");
//     }
//     return captain;
// };

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null); // if it's initially nothing

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    }
    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    };
    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
}
export default CaptainContext;