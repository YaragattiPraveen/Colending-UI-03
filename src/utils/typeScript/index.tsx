import { Dispatch, ReactNode, SetStateAction } from "react";

// Common Interfaces
export interface InputFields {
    [x: string]: any;
    label?: string;
    type?: string;
    numberType?: string;
    options?: string[];
    disable?: boolean;
    applicability?: string;
    selectedOperator?: string;
    value?: string;
}

export type TData = {
    [key: string]: string | number | JSX.Element | undefined | string[];
};

export interface MinMaxValues {
    min: string | undefined;
    max: string | undefined;
}

export interface ChildCondition extends InputFields {
    label?: string;
    selectedOperator: string;
    minMaxValues?: MinMaxValues;
}

export interface ParentCondition extends InputFields {
    label: string;
    applicability: string;
    childCondition?: ChildCondition;
}

export interface Row extends ChildCondition {
    applicability?: string;
    minMaxValues?: MinMaxValues;
    addRule?: string;
}

export interface AddConditionProps {
    parentCondition: ParentCondition[];
    label?: string;
    role?: string;
    type?: string;
    applicability?: string;
    modal: {
        state: string;
        data: InputFields;
    };
    updateModal: (state: string, val?: {} | undefined) => void;
}

// Other Interfaces
export interface SideBarContentProp {
    title: string;
    icon: ReactNode;
    link: string;
}

export interface TableDataProps {
    tableData: {
        titles: string[];
        dataFields: InputFields[];
        title: string;
    };
}

export interface TableProps {
    theading: string[];
    tData: TData[];
    tname?: string;
}

export interface ContextProviderProps {
    parameterFields: InputFields[];
    setParameterFields: Dispatch<SetStateAction<InputFields[]>>;
    informationFields: InputFields[];
    setInformationFields: Dispatch<SetStateAction<InputFields[]>>;
    masterAgreementConditions: AddConditionProps[];
    setMasterAgreementConditions: Dispatch<SetStateAction<AddConditionProps[]>>;
}

export interface UserDetailsProps {
    details: {
        label: string;
        value: string;
    }[];
}

export interface ProtectedProps {
    loggedIn: string;
    role: string;
}

export interface AddFieldsProps {
    closeModal: () => void;
    updateModal?: (state: string, val?: {} | undefined) => void;
    data?: InputFields;
    title?: string;
    role?: string;
}

export interface buttonProp {
    title?: string,
    disabled?: boolean
    callBack: () => void
}
export interface UpdatedConditions {
    parentCondition: ParentCondition[]; // An array of ParentCondition objects
    updateModal: (state: string, val?: {} | undefined) => void; // A function that takes a string and an optional object or undefined and returns void
}
export interface AddConditionProps {
    parentCondition: ParentCondition[];
    label?: string;
    role?: string;
    type?: string;
    applicability?: string;
    modal: {
        state: string;
        data: InputFields;
    };
    updateModal: (state: string, val?: {} | undefined) => void;
}
export interface RowData {
    repaymentMode?: string;
    label: string;
    value: string;
    applicability: string;
}

// Form data types for the typescript 

export interface FormData {
    fullName: string;
    username: string;
    city: string;
    state: string;
    contactNumber: number;
    emailAddress: string;
    website: string;
    ciNumber: number;
    password: string;
    licenseKey: string;
    registeredOfficeAddress: string;
};

export interface setFormState {
    setFormState: React.Dispatch<React.SetStateAction<string>>
}
export interface ModalProp {
    title?: string;
    closeModal: () => void;
    component?: JSX.Element;
}
export interface inputFieldsProp {
    inputField: InputFields,
    disable: boolean
  }