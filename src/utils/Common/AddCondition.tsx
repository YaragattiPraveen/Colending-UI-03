import { useState, useEffect } from 'react';
import { operators } from "../../Constants/StateAndCity";
import { InputFields } from "../typeScript";
import Button from '../Form-utils/Button';
import { useAppContext } from '../../ContextApi/AppContext';

type Row = {
    label: string | undefined;
    type?: string;
    selectedOperator: string;
    value?: string;
    minMaxValues?: {
        min: string;
        max: string;
    };
    applicability?: string;
    addRule: string;
    childCondition?: ""
};

type AddConditionProps = {
    role?: string
    modal: {
        state: string;
        data: InputFields;
    };
    updateModal: (state: string, val?: {} | undefined) => void;
};

const AddCondition = ({ modal, updateModal, role = "" }: AddConditionProps) => {
    const { masterAgreementConditions, setMasterAgreementConditions } = useAppContext();
    const [rows, setRows] = useState<Row[]>([]);

    // Initialize rows state with existing parent condition data
    useEffect(() => {
        const modalData = modal.data;
        const existingRecord = masterAgreementConditions.find(
            (record) => record.label === modalData.label && record.type === modalData.type
        );

        if (existingRecord) {
            setRows(existingRecord.parentCondition || []);
        } else {
            setRows([
                {
                    label: modal.data.label,
                    type: modal.data.type,
                    selectedOperator: "",
                    value: "",
                    minMaxValues: { min: "", max: "" },
                    addRule: "",
                }
            ]);
        }
    }, [modal.data, masterAgreementConditions]);

    useEffect(() => {
        const modalData = modal.data;
        if (modal.state === "Show Add Condition") {
            const parentRecord = masterAgreementConditions.find(
                (record) => record.label === modalData.label
            );
            setRows(parentRecord?.parentCondition)
        }
    }, [modal.data, masterAgreementConditions]);

    const handleInputChange = (index: number, key: keyof Row, value: string) => {
        setRows((prevRows) => {
            const updatedRows = [...prevRows];
            updatedRows[index][key] = value;

            // If the key is 'selectedOperator' or 'value', set applicability to 'Yes'
            if (key === 'selectedOperator' || key === 'value') {
                updatedRows[index].applicability = 'Yes';
            }

            return updatedRows;
        });
    };

    const handleSelectChange = (index: number, value: string) => {
        setRows((prevRows) => {
            const updatedRows = [...prevRows];
            updatedRows[index].applicability = value;
            return updatedRows;
        });
    };

    // For handling changes in min and max values
    const handleMinMaxChange = (index: number, key: keyof typeof rows[number]['minMaxValues'], value: string) => {
        setRows((prevRows) => {
            const updatedRows = [...prevRows];
            updatedRows[index].minMaxValues = {
                ...updatedRows[index].minMaxValues,
                [key]: value,
            };

            // If the key is 'min' or 'max', set applicability to 'Yes'
            updatedRows[index].applicability = 'Yes';

            return updatedRows;
        });
    };

    // For handling adding a new row
    const handleAddRow = () => {
        setRows((prevRows) => [
            ...prevRows,
            {
                label: prevRows[0].label,
                selectedOperator: '',
                minMaxValues: { min: "", max: "" },
                addRule: '',
            },
        ]);
    };

    // Function to save the changes
    const saveChanges = () => {
        const modalData = modal.data;

        // Find the index of the record in masterAgreementConditions based on modalData
        const existingRecordIndex = masterAgreementConditions.findIndex(
            (record) => record.label === modalData.label && record.type === modalData.type
        );

        if (existingRecordIndex !== -1) {
            // If record exists, update its parentCondition with new rows data
            setMasterAgreementConditions((prevConditions) => {
                const updatedConditions = [...prevConditions];
                updatedConditions[existingRecordIndex].parentCondition = rows.map((row, rowIndex) => {
                    // Preserve existing child condition data if available
                    const existingChildCondition = updatedConditions[existingRecordIndex].parentCondition[rowIndex]?.childCondition;

                    return {
                        label: row.label || '', // Provide default value or handle undefined
                        type: row.type || '', // Provide default value or handle undefined
                        selectedOperator: row.selectedOperator,
                        value: row.value || '', // Provide default value or handle undefined
                        applicability: row.applicability || 'No',
                        minMaxValues: row.minMaxValues || { min: '', max: '' }, // Provide default values or handle undefined
                        childCondition: existingChildCondition || undefined // Ensure childCondition is of type ChildCondition or undefined
                    };
                });
                return updatedConditions;
            });
        }
    };



    return (
        <>
            <table className="min-w-full text-start bg-white ">
                <thead className="text-xs text-start text-whiteColor bg-primary uppercase z-40 ">
                    <tr>
                        <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Parameter Name</th>
                        <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Select Operator</th>
                        <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Value</th>
                        <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Applicability</th>
                        <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Add If Condition</th>
                        {
                            role === "nbfc" && <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Add Rule</th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => {

                        console.log(row?.childCondition)

                        return <tr key={index} className="border-b capitalize text-sm hover:bg-gray-50">
                            <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                {row.label}
                            </td>
                            <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                <select
                                    value={row.selectedOperator}
                                    onChange={(e) => handleInputChange(index, 'selectedOperator', e.target.value)}
                                    className="block appearance-none w-full border text-primary py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-borderColor"
                                    disabled={role === ""}
                                >
                                    <option>Select Operator</option>
                                    {operators.map((operator, opIndex) => (
                                        <option key={opIndex} value={operator}>
                                            {operator}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                {row?.selectedOperator === 'Min & Max' ? (
                                    <>
                                        <input
                                            value={row.minMaxValues?.min || ''}
                                            onChange={(e) => handleMinMaxChange(index, 'min', e.target.value)}
                                            name="minValue"
                                            className="appearance-none block w-full text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor focus:border-borderColor"
                                            placeholder="Min Value"
                                            type="number"
                                            disabled={role === ""}
                                        />
                                        <input
                                            value={row.minMaxValues?.max || ''}
                                            onChange={(e) => handleMinMaxChange(index, 'max', e.target.value)}
                                            name="maxValue"
                                            className="appearance-none block w-full text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor focus:border-borderColor"
                                            placeholder="Max Value"
                                            type="number"
                                            disabled={role === ""}
                                        />
                                    </>
                                ) : (
                                    <input
                                        value={row?.value || ''}
                                        onChange={(e) => handleInputChange(index, 'value', e.target.value)}
                                        name="value"
                                        className="appearance-none block w-full text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor focus:border-borderColor"
                                        placeholder="Value"
                                        type="number"
                                        disabled={role === ""}
                                    />
                                )}
                            </td>
                            <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                <select
                                    value={row.applicability || 'Not-Applicable'}
                                    disabled={role === ""}
                                    onChange={(e) => handleSelectChange(index, e.target.value)}
                                    name="type"
                                    className="block appearance-none w-full border text-primary py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-borderColor"
                                >
                                    <option value="Applicable-to-all">Applicable To All</option>
                                    <option value="Applicable-to-tl">Applicable To TL</option>
                                    <option value="Applicable-to-dl">Applicable To DL</option>
                                    <option value="Not-Applicable">Not-Applicable</option>
                                </select>
                            </td>
                            <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                <div className="flex items-center justify-start">
                                    {
                                        (row?.childCondition === "" || row?.childCondition === undefined) ?

                                            <Button callBack={() => {
                                                saveChanges();
                                                updateModal?.('Add Condition', row);
                                            }} title="+" />
                                            :
                                            <Button callBack={() => {
                                                updateModal("Add Condition", row);
                                            }} title="View" />
                                    }



                                </div>
                            </td>
                            {
                                role === 'nbfc' && <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                    <div className="flex items-center justify-start">
                                        <Button callBack={handleAddRow} title="+" />
                                    </div>
                                </td>
                            }
                        </tr>
                    }
                    )}
                </tbody>
            </table>
            {/* Button to save changes */}
            <div className="flex items-center justify-end">
                {
                    role === "nbfc" &&
                    <Button callBack={() => {
                        updateModal("showCreateMasterAgreement")
                        saveChanges()
                    }} title="Save" />
                }
            </div>
        </>
    );
};

export default AddCondition;
