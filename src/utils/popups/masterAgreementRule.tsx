import { useRef, MouseEvent, useState, useEffect } from "react";
import { useAppContext } from "../../ContextApi/AppContext";
import Button from "../Form-utils/Button";
import { v4 as uuidv4 } from 'uuid'
import { AddFieldsProps, InputFields, AddConditionProps, RowData } from "../typeScript";
import { bankNames } from "../../Constants/StateAndCity";
import { HiDocumentDuplicate, HiMiniXMark } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import MultiSelector from "../Form-utils/MultiSelector";

type ApplicabilityState = { [key: string]: { applicability: string | null } };

const MasterAgreementRule: React.FC<AddFieldsProps> = ({ closeModal, updateModal, role }) => {
    const { parameterFields, masterAgreementConditions, setMasterAgreementConditions, informationFields } = useAppContext();
    const [applicabilityState, setApplicabilityState] = useState<ApplicabilityState>({});
    const [mergedArray, setMergedArray] = useState<InputFields[]>([]);
    const modalRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedBank, setSelectedBank] = useState<string>("");
    const [rowsOFData, setRowsOFdata] = useState<RowData[]>([]);

    const { register, handleSubmit, watch } = useForm<{
        masterAgreementId: string;
        selectedBank: string;
        values: {
            label: string;
            value: string;
            applicability: string;
        }[];
    }>({
        defaultValues: {
            masterAgreementId: generateRandomId(),
            selectedBank: "Select --",
            values: [
                { label: "Sanctioned Limit", value: "", applicability: "Applicable-to-all" },
                { label: "Bank Contribution", value: "", applicability: "Applicable-to-all" },
                { label: "Blended intrest rate", value: "", applicability: "Applicable-to-all" },
                { label: "Bank intrest rate", value: "", applicability: "Applicable-to-all" },
                { label: "Management Fees", value: "", applicability: "Applicable-to-all" },
                { label: "Penalty - Bank", value: "", applicability: "Applicable-to-all" },
                { label: "Penalty - NBFC", value: "", applicability: "Applicable-to-all" }
            ]
        }
    });

    useEffect(() => {
        const merged = [...parameterFields];
        masterAgreementConditions.forEach((item) => {
            const existingIndex = merged.findIndex((existingItem) => existingItem.label === item.label);
            if (existingIndex !== -1) {
                merged[existingIndex] = { ...merged[existingIndex], ...item };
            } else {
                merged.push(item);
            }
        });
        setMergedArray(merged);
    }, [parameterFields, masterAgreementConditions]);

    useEffect(() => {
        if (parameterFields.length > 0) {
            const initialState: ApplicabilityState = {};
            parameterFields.forEach((_, ind) => {
                initialState[ind.toString()] = { applicability: "No" };
            });
            setApplicabilityState(initialState);
        }
    }, [parameterFields]);

    useEffect(() => {
        const labels = [
            "Sanctioned Limit",
            "Bank Contribution",
            "Blended intrest rate",
            "Bank intrest rate",
            "Management Fees",
            "Penalty - Bank",
            "Penalty - NBFC",
            "Repayment Mode"
        ];

        const rowsOfData = labels.map(label => ({
            label,
            value: "",
            applicability: ""
        }));
        setRowsOFdata(rowsOfData);
    }, []);

    function generateRandomId() {
        return uuidv4()
    }

    const handleInputChange = (index: number, fieldName: keyof RowData, value: string) => {
        const updatedRows = [...rowsOFData];
        updatedRows[index][fieldName] = value;
        setRowsOFdata(updatedRows);
    };

    const handleDuplicateRow = (index: number) => {
        const rowToDuplicate = rowsOFData[index];
        const updatedRows = [...rowsOFData];
        updatedRows.splice(index + 1, 0, { ...rowToDuplicate });
        setRowsOFdata(updatedRows);
    };

    const onSave = () => {
        const formData = {
            masterAgreementId: watch("masterAgreementId"),
            selectedBank: watch("selectedBank"),
            values: watch("values")
        };
        console.log(formData);
    };

    const handleSelectChangeAndApply = (e: React.ChangeEvent<HTMLSelectElement>, index: string) => {
        const selectedValue = e.target.value;
        setApplicabilityState((prev) => ({
            ...prev,
            [index]: { applicability: selectedValue },
        }));
    };

    const handleClose = (e: MouseEvent<HTMLInputElement>) => {
        if (modalRef.current === e.target) {
            closeModal();
        }
    };

    const handleNext = () => {
        handleSubmit(onSave)();
        setCurrentPage((prevPage: number) => prevPage + 1);
    };

    const handlePrev = () => {
        setCurrentPage((prevPage: number) => prevPage - 1);
    };

    const handleMasterAgreementRules = (inputField: InputFields, index: number) => {
        // Check if a condition with the same label already exists
        const existingConditionIndex = masterAgreementConditions.findIndex(condition => condition.label === inputField.label);

        if (existingConditionIndex !== -1) {
            // If a condition with the same label exists, update it
            setMasterAgreementConditions(prevConditions => {
                const updatedConditions = [...prevConditions];
                updatedConditions[existingConditionIndex]?.parentCondition?.push({
                    label: inputField.label!,
                    type: inputField.type!,
                    selectedOperator: '',
                    value: '',
                    applicability: "",
                    minMaxValues: { min: '', max: '' },
                    childCondition: {
                        label: "",
                        type: "",
                        selectedOperator: '',
                        value: '',
                        minMaxValues: { min: '', max: '' },
                    }
                });
                return updatedConditions;
            });
        } else {
            // If a condition with the same label doesn't exist, add a new one
            const newParentCondition: AddConditionProps = {
                label: inputField.label!,
                type: inputField.type!,
                applicability: applicabilityState[index.toString()]?.applicability || "No",
                parentCondition: [{
                    label: inputField.label!,
                    type: inputField.type,
                    selectedOperator: '',
                    value: '',
                    applicability: "",
                    minMaxValues: { min: '', max: '' },
                    childCondition: {
                        label: "",
                        type: "",
                        selectedOperator: '',
                        value: '',
                        minMaxValues: { min: '', max: '' },
                    }
                }],
                modal: {
                    state: "",
                    data: inputField
                },
                updateModal: function (_state: string, _val?: {} | undefined): void {
                    throw new Error("Function not implemented.");
                }
            };
            setMasterAgreementConditions(prevConditions => [...prevConditions, newParentCondition]);
        }
    };

    return (
        <div
            ref={modalRef}
            onClick={handleClose}
            className="overflow-y-auto flex bg-black inset-0 bg-opacity-60 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center w-full md:inset-0 h-[calc(100%)]"
        >
            <div className="relative p-4 w-full max-w-6xl max-h-full ">
                <div className="relative bg-whiteColor rounded-lg shadow">
                    <div className="flex items-center justify-between py-3 px-4 md:px-5 border-b rounded-t ">
                        <h3 className="text-xl font-semibold text-primary">
                            Create Master Agreement
                        </h3>
                        <button
                            onClick={() => closeModal()}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:text-white"
                            data-modal-hide="default-modal"
                        >
                            <HiMiniXMark color="#283943" size={30} />
                        </button>
                    </div>
                    <div className=" mx-auto mt-8 px-4 mb-6">
                        <div className="overflow-y-scroll h-[40vh]">
                            {
                                currentPage === 1 && <form className="w-full py-3">
                                    <div className="flex gap-2 justify-between w-full items-center">
                                    </div>
                                    <table className="min-w-full text-start bg-white">
                                        <thead className="text-xs text-start text-whiteColor bg-primary uppercase z-40">
                                            <tr>
                                                <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Label name</th>
                                                <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Value</th>
                                                <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Applicability</th>
                                                <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Duplicate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b capitalize text-sm hover:bg-gray-50">
                                                <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                    Select Bank
                                                </td>
                                                <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                    <select
                                                        {...register("selectedBank")}
                                                        className="block appearance-none w-full flex-1 border text-primary py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-borderColor"
                                                        value={selectedBank}
                                                        onChange={(e) => setSelectedBank(e.target.value)}
                                                    >
                                                        <option>Select --</option>
                                                        {bankNames?.map((name: string, ind: number) => (
                                                            <option key={ind} value={name.toLowerCase()}>
                                                                {name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </td>
                                            </tr>
                                            {rowsOFData.map((labelObj, index) => (
                                                <tr key={index} className="border-b capitalize text-sm hover:bg-gray-50">
                                                    <input
                                                        type="hidden"
                                                        {...register(`values[${index}].label` as `values.${number}.label`)}
                                                        value={labelObj?.label}
                                                    />
                                                    <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                        {labelObj?.label}
                                                    </td>
                                                    <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">

                                                        {
                                                            labelObj.label === "Repayment Mode" ? <select
                                                                {...register(`values[${index}].value` as `values.${number}.value`)}
                                                                className="block appearance-none w-full border text-primary py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-borderColor"
                                                                value={labelObj?.value}
                                                                onChange={(e) => handleInputChange(index, 'value', e.target.value)}
                                                                name={`values[${index}].value`}
                                                                disabled={role === ""}
                                                            >
                                                                <option value="EMI">EMI</option>
                                                                <option value="Interest-monthly-principal-bullet">Interest: Monthly; Principal: Bullet</option>
                                                                <option value="Bullet Repayment">Bullet Repayment</option>
                                                            </select>
                                                                : <input
                                                                    {...register(`values[${index}].value` as `values.${number}.value`)}
                                                                    value={labelObj?.value}
                                                                    onChange={(e) => handleInputChange(index, 'value', e.target.value)}
                                                                    name={`values[${index}].value`}
                                                                    className="appearance-none block w-full text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor focus:border-borderColor"
                                                                    placeholder="Value"
                                                                    type="text"
                                                                    disabled={role === ""}
                                                                />
                                                        }

                                                    </td>
                                                    <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                        <select
                                                            {...register(`values[${index}].applicability` as `values.${number}.applicability`)}
                                                            className="block appearance-none w-full border text-primary py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-borderColor"
                                                            value={labelObj?.applicability}
                                                            onChange={(e) => handleInputChange(index, 'applicability', e.target.value)}
                                                            disabled={role === ""}
                                                        >
                                                            <option value="Applicable-to-all">Applicable To All</option>
                                                            <option value="Applicable-to-tl">Applicable To TL</option>
                                                            <option value="Applicable-to-dl">Applicable To DL</option>
                                                            <option value="Not-Applicable">Not-Applicable</option>
                                                        </select>
                                                    </td>
                                                    <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                        <span onClick={() => handleDuplicateRow(index)}>
                                                            <HiDocumentDuplicate size={25} color="#283943" />
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </form>
                            }
                            {
                                currentPage === 2 &&
                                <table className="min-w-full text-start bg-white">
                                    <thead className="text-xs text-start text-whiteColor bg-primary uppercase z-40">
                                        <tr>
                                            <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Label name</th>
                                            <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Parameter Type</th>
                                            <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Applicability</th>
                                            <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">{role === "nbfc" ? "Add" : "View"} Condition</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mergedArray?.map((inputField, ind: number) => (
                                            <tr key={ind} className="border-b capitalize text-sm hover:bg-gray-50">
                                                <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                    {inputField?.label}
                                                </td>
                                                <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                    {inputField?.type === 'number' ? inputField?.numberType : inputField?.type}
                                                </td>
                                                <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                    <select
                                                        name="type"
                                                        className="block appearance-none w-full border text-primary py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-borderColor"
                                                        id={`grid-type-${ind}`}
                                                        onChange={(e) => handleSelectChangeAndApply(e, ind.toString())} value={inputField?.applicability}
                                                        data-row-index={ind}
                                                        required
                                                        disabled={inputField.applicability === 'Yes'}
                                                    >
                                                        <option value="No">No</option>
                                                        <option value="Yes">Yes</option>
                                                    </select>
                                                </td>
                                                <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                    {inputField.applicability === 'Yes' ? (

                                                        <Button callBack={() => { updateModal?.("Show Parent Condition", inputField) }} title="View" />

                                                    ) : (
                                                        <Button callBack={() => {
                                                            handleMasterAgreementRules(inputField, ind);
                                                            updateModal?.("Show Add Condition", inputField);
                                                        }} disabled={inputField.applicability === 'No'} title="Add" />
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            }
                            {
                                currentPage === 3 &&
                                <table className="min-w-full text-start bg-white">
                                    <thead className="text-xs text-start text-whiteColor bg-primary uppercase ">
                                        <tr>
                                            <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Label name</th>
                                            <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Information Field Type</th>
                                            <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Applicability</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {informationFields?.map((inputField, ind: number) => (
                                            <tr key={ind} className="border-b capitalize text-sm hover:bg-gray-50">
                                                <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                                    {inputField?.label}
                                                </td>
                                                <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                                    {inputField?.type === 'number' ? inputField?.numberType : inputField?.type}
                                                </td>

                                                <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                                    <MultiSelector />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            }
                        </div>
                    </div>

                    <div className="flex items-center justify-end px-4">
                        {currentPage > 1 && <Button callBack={handlePrev} title="Previous" />}
                        {currentPage < 3 ? <Button callBack={handleNext} title="Save & Next" /> : <Button callBack={() => true} title="Submit" />}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MasterAgreementRule;
