import { HiMiniTrash } from "react-icons/hi2";
import { HiMiniPencilSquare } from "react-icons/hi2";
import SelectBox from "../Form-utils/selectBox";
import RadioButton from "../Form-utils/radioButton";
import CheckBox from "../Form-utils/checkBox";
import InputBox from "../Form-utils/inputBox";
import useModal from "../../hooks/useModal";
import AddFields from "../popups/addFields";
import { TableDataProps } from "../typeScript";
import { useState } from "react";

const FormTable = ({ tableData }: TableDataProps) => {
    console.log(tableData)
    const { modal, updateModal, closeModal } = useModal()
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = tableData.dataFields?.slice(indexOfFirstRecord, indexOfLastRecord);
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-whiteColor bg-primary uppercase ">
                        <tr>
                            {
                                tableData?.titles?.map((th, ind) => {
                                    return <th key={ind} scope="col" className="px-6 py-3">
                                        {th}
                                    </th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData?.title === "Product" ? currentRecords?.map((inputField, ind: number) => {

                                return <tr key={ind} className=" border-b capitalize hover:bg-gray-50 ">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{inputField?.label}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        <div onClick={() => {
                                            updateModal('editModal', inputField)
                                        }}>
                                            <HiMiniPencilSquare color="green" size={24} />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        <HiMiniTrash color="red" size={24} />
                                    </td>
                                </tr>

                            }) : currentRecords?.map((inputField, ind: number) => {
                                if (inputField?.type === "select") {
                                    return <tr key={ind} className=" border-b capitalize hover:bg-gray-50 ">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{inputField?.label}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{inputField?.type}</td>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                        >
                                            <SelectBox inputField={inputField} disable={true} />
                                        </th>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            <div onClick={() => {
                                                updateModal('editModal', inputField)
                                            }}>
                                                <HiMiniPencilSquare color="green" size={24} />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            <HiMiniTrash color="red" size={24} />
                                        </td>
                                    </tr>
                                } else if (inputField?.type === "radio") {
                                    return <tr key={ind} className=" border-b capitalize  hover:bg-gray-50 ">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{inputField?.label}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{inputField?.type}</td>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                        >
                                            <RadioButton disable={true} inputField={inputField} />
                                        </th>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            <HiMiniPencilSquare onClick={() => updateModal('editModal', inputField)} color="green" size={24} />
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            <HiMiniTrash color="red" size={24} />
                                        </td>
                                    </tr>
                                } else if (inputField?.type === "checkbox") {
                                    return <tr key={ind} className=" border-b capitalize hover:bg-gray-50 ">

                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{inputField?.label}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{inputField?.type}</td>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                        >
                                            <CheckBox disable={true} inputField={inputField} />
                                        </th>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            <HiMiniPencilSquare onClick={() => updateModal('editModal', inputField)} color="green" size={24} />
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            <HiMiniTrash color="red" size={24} />
                                        </td>
                                    </tr>
                                } else {
                                    return <tr key={ind} className=" border-b capitalize hover:bg-gray-50 ">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{inputField?.label}</td>

                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{
                                            inputField?.type === 'number' ? inputField?.numberType : inputField?.type
                                        }</td>

                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                        >
                                            <InputBox disable={true} inputField={inputField} />
                                        </th>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            <HiMiniPencilSquare onClick={() => updateModal('editModal', inputField)} color="green" size={24} />
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            <HiMiniTrash color="red" size={24} />
                                        </td>
                                    </tr>
                                }
                            })
                        }
                    </tbody>
                </table>
                {
                    modal?.state === "editModal" && <AddFields closeModal={closeModal} title={tableData?.title} data={modal?.data} />
                }
            </div>
            <div className="flex justify-end mt-2">
                <ul className="flex items-center">
                    {Array.from({ length: Math.ceil(tableData.dataFields?.length / recordsPerPage) }, (_, i) => (
                        <li key={i}>
                            <button
                                className={`px-3 py-1 mx-1 rounded-md ${currentPage === i + 1 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-700'
                                    }`}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default FormTable