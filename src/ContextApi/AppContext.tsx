import React, { ReactNode, createContext, useState, useContext } from "react";
import { ContextProviderProps, InputFields, AddConditionProps } from "../utils/typeScript";

const AppContext = createContext<ContextProviderProps | undefined>(undefined)

interface AppContextPropsProvider {
    children: ReactNode;
}

const AppContextProvider: React.FC<AppContextPropsProvider> = ({ children }) => {
    const [parameterFields, setParameterFields] = useState<InputFields[]>([]);
    const [informationFields, setInformationFields] = useState<InputFields[]>([]);
    const [masterAgreementConditions, setMasterAgreementConditions] = useState<AddConditionProps[]>([]);

    const contextValues: ContextProviderProps = {
        parameterFields,
        setParameterFields,
        informationFields,
        setInformationFields,
        masterAgreementConditions,
        setMasterAgreementConditions
    };

    return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
    const appContext = useContext(AppContext)
    if (!appContext) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return appContext
}

export { useAppContext, AppContextProvider };
