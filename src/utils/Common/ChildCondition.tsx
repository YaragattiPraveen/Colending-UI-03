import { useState } from 'react';
import Button from '../Form-utils/Button';
import { operators } from '../../Constants/StateAndCity';
import { useAppContext } from '../../ContextApi/AppContext';
import { AddConditionProps, ParentCondition } from '../typeScript';
import type { ChildCondition } from '../typeScript';



const ChildCondition = ({ modal, updateModal, role = "" }: AddConditionProps) => {
    const { masterAgreementConditions, setMasterAgreementConditions } = useAppContext();

    const [rows, setRows] = useState<ParentCondition[]>([
        {
            label: modal?.data?.childCondition?.label! || modal?.data?.label,
            selectedOperator: modal?.data?.childCondition?.selectedOperator! || "",
            value: modal?.data?.childCondition?.value! || "",
            applicability: modal?.data?.childCondition?.applicability! || "",
            minMaxValues: { min: modal?.data?.childCondition?.minMaxValues?.min || "", max: modal?.data?.childCondition?.minMaxValues?.max || "" },
        },
    ]);

    const handleInputChange = (index: number, key: string, value: string) => {
        setRows((prevRows) => {
            const updatedRows = [...prevRows];
            updatedRows[index][key as keyof ParentCondition] = value;
            return updatedRows;
        });
    };

    const handleMinMaxChange = (index: number, key: keyof typeof rows[number]['minMaxValues'], value: string) => {
        setRows((prevRows) => {
            const updatedRows = [...prevRows];
            updatedRows[index].minMaxValues = {
                ...updatedRows[index].minMaxValues,
                [key]: value,
            };
            return updatedRows;
        });
    };

    const handleSave = () => {

        const updatedChildCondition: ChildCondition = {
            label: modal.data.label!,
            type: modal.data.type,
            selectedOperator: rows[0].selectedOperator!,
            value: rows[0].value,
            minMaxValues: {
                min: rows[0].minMaxValues?.min,
                max: rows[0].minMaxValues?.max,
            }
        };

        const updatedMasterAgreementConditions = masterAgreementConditions.map((record) => {

            if (record.parentCondition) {
                const updatedParentConditions = record.parentCondition.map((parent) => {
                    if (parent.label === modal.data.label && parent.type === modal.data.type) {
                        return {
                            ...parent,
                            childCondition: updatedChildCondition,
                        };
                    }
                    return parent;
                });
                return {
                    ...record,
                    parentCondition: updatedParentConditions,
                };
            }
            return record; // Return record without modification if parentCondition array is not present
        });

        // Call function to update masterAgreementConditions in context
        setMasterAgreementConditions(updatedMasterAgreementConditions);
    };


    return (
        <>
            <table className="min-w-full text-start bg-white ">
                <thead className="text-xs text-start text-whiteColor bg-primary uppercase z-40 ">
                    <tr>
                        <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Parameter Name</th>
                        <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Parameter Type</th>
                        <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Select Operator</th>
                        <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr
                            key={index}
                            className="border-b capitalize text-sm hover:bg-gray-50"
                        >
                            <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                {row.label}
                            </td>
                            <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                Number
                            </td>
                            <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                <select
                                    value={row.selectedOperator}
                                    onChange={(e) =>
                                        handleInputChange(index, 'selectedOperator', e.target.value)
                                    }
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
                                {row.selectedOperator === "Min & Max" ? (
                                    <>
                                        <input
                                            value={row.minMaxValues?.min || ""}
                                            onChange={(e) =>
                                                handleMinMaxChange(index, 'min', e.target.value)
                                            }
                                            name="minValue"
                                            className="appearance-none block w-full text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor focus:border-borderColor"
                                            placeholder="Min Value"
                                            type="number"
                                            disabled={role === ""}
                                        />
                                        <input
                                            value={row.minMaxValues?.max || ""}
                                            onChange={(e) =>
                                                handleMinMaxChange(index, 'max', e.target.value)
                                            }
                                            name="maxValue"
                                            className="appearance-none block w-full text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor focus:border-borderColor"
                                            placeholder="Max Value"
                                            type="number"
                                            disabled={role === ""}
                                        />
                                    </>
                                ) : (
                                    <input
                                        value={row.value || ""}
                                        onChange={(e) =>
                                            handleInputChange(index, 'value', e.target.value)
                                        }
                                        name="value"
                                        className="appearance-none block w-full text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor focus:border-borderColor"
                                        placeholder="Value"
                                        type="number"
                                        disabled={role === ""}
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex items-center justify-end'>
                {
                    role === "nbfc" &&
                    <Button callBack={() => {
                        updateModal("Show Add Condition", modal.data)
                        handleSave()
                    }} title='Save' />
                }
            </div>
        </>
    );
}

export default ChildCondition;
