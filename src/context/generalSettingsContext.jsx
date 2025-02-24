import { createContext, useContext } from "react";
import useSWR from "swr";
import envConfig from "../../envconfig";
import { fetcher } from "../utils/SWRFetcher/SWRFetcher";


const GeneralSettingsContext = createContext();

export const GeneralSettingsProvider = ({ children }) => {
    const {
        data: generalSettings,
        error: errorGeneralSettings,
        isLoading: isLoadingGeneralSettings,
    } = useSWR(`${envConfig.apiUrl}settings/general`, fetcher);

    return (
        <GeneralSettingsContext.Provider value={{ generalSettings, errorGeneralSettings, isLoadingGeneralSettings }}>
            {children}
        </GeneralSettingsContext.Provider>
    );
};

// Custom hook for consuming settings
export const useGeneralSettings = () => {
    return useContext(GeneralSettingsContext);
};
