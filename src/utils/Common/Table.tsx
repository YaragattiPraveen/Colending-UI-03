import { useEffect, useState } from 'react';
import { TableProps } from '../typeScript';
import useModal from '../../hooks/useModal';
import CommonPopUp from './CommonPopUp';
import UploadFile from '../Form-utils/uploadFile';

const Table = ({ theading, tData, tname }: TableProps) => {
    const [selectedStatus, setSelectedStatus] = useState("")
    const { modal, closeModal, updateModal } = useModal()

    useEffect(() => {
        if (selectedStatus === "Approve&Upload") {
            updateModal("Upload file")
        }
    }, [selectedStatus])
    return (
        <>
            <div className="overflow-x-auto shadow-lg rounded-md mb-3">
                <table className="min-w-full w-full text-left text-sm font-light table-auto">
                    <thead className="text-xs text-medium bg-primary border-b uppercase text-whiteColor">
                        <tr>
                            {theading?.map((heading, index) => (
                                <th
                                    key={index}
                                    scope="col"
                                    className="px-6 py-4 text-medium font-Roboto text-left"
                                >
                                    {heading}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-300">
                        {
                            (tname === "Pending Table" || tname === "Review Table") && tData?.map((row, index) => <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.loandisDate}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.loanId}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.nameOfBorrower}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.loanAmount}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.viewApplication}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.compliance}
                                </td>
                            </tr>)
                        }
                        {
                            tname === "Under Processing Table" && tData?.map((row, index) => {
                                console.log(row.actions)
                                return <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                                    <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                        {row?.loandisDate}
                                    </td>
                                    <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                        {row?.loanId}
                                    </td>
                                    <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                        {row?.nameOfBorrower}
                                    </td>
                                    <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                        {row?.bankName}
                                    </td>
                                    <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                        {row?.loanAmount}
                                    </td>
                                    <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                        {row?.viewApplication}
                                    </td>
                                    {
                                        row?.compliance && <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                            {row?.compliance}
                                        </td>
                                    }
                                    {
                                        row?.actions && <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                            <select
                                                value={selectedStatus}
                                                onChange={(e) => {
                                                    setSelectedStatus(e.target.value)
                                                }}
                                                className="block appearance-none w-full border text-primary py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-borderColor"
                                            >
                                                <option value={"--"}>--</option>
                                                <option value={"Approve&Upload"}>Approve & Upload</option>
                                                <option value={"Reject"}>Reject</option>
                                            </select>

                                        </td>
                                    }

                                </tr>
                            })
                        }
                        {
                            tname === "Pending Amount Table" && tData?.map((row, index) => <tr key={index} className="border-bt ransition duration-300 ease-in-out">
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.bankId}
                                </td>
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.bankName}
                                </td>
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.pendingAmount}
                                </td>
                            </tr>)
                        }
                        {
                            tname === "Repayment Pending Amount" && tData?.map((row, index) => <tr key={index} className="border-bt ransition duration-300 ease-in-out">
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.bankId}
                                </td>
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.bankName}
                                </td>
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.outStandingAmount}
                                </td>
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.managementFees}
                                </td>
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.status}
                                </td>
                            </tr>)
                        }
                        {
                            tname === "Repayment Table" && tData?.map((row, index) => <tr key={index} className="border-bt ransition duration-300 ease-in-out">
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.bankId}
                                </td>
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.bankName}
                                </td>
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.repaymentDate}
                                </td>
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.repaymentAmount}
                                </td>
                            </tr>)
                        }
                        {
                            tname === "Granted Table" && tData?.map((row, index) => <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.loandisDate}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.loanId}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.nameOfBorrower}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.bankName}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.loanApprovalDate}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.loanAmount}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.viewApplication}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.paymentStatus}
                                </td>
                            </tr>)
                        }
                        {
                            tname === "Repayment Structure" && tData?.map((row, index) => <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.loandisDate}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.loanId}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.nameOfBorrower}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.bankName}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.repaymentDate}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.loanApprovalDate}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.loanAmount}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.viewApplication}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.viewRepaymentStructure}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.paymentStatus}
                                </td>
                            </tr>)
                        }
                        {(tname === "Rejected Master Agreement Table" || tname === "Pending Master Agreement Table") && tData?.map((row, index) => (
                            <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.id}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.bankName}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.sanctionedLimit}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.viewApplication}
                                </td>
                                {
                                    row?.actions && <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                        <select
                                            className="block appearance-none w-full border text-primary py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-borderColor"
                                        >
                                            <option>Select Operator</option>
                                            <option>Approve</option>
                                            <option>Reject</option>
                                        </select>

                                    </td>
                                }
                            </tr>
                        ))}
                        {(tname === "Approved Master Agreement Table") && tData?.map((row, index) => (
                            <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.id}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.bankName}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.sanctionedLimit}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.utilizedLimit}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.viewApplication}
                                </td>
                            </tr>
                        ))}
                        {
                            tname === "Compliance Table" && tData?.map((row, index) => <tr key={index} className="border-b py-3 transition duration-300 ease-in-out hover:bg-green-2">
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.selectBank}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.bankId}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.bankName}
                                </td>
                                <td className="whitespace-nowrap px-6 text-left font-medium font-Roboto text-silver__color">
                                    {row?.compliance}
                                </td>
                            </tr>)
                        }
                        {
                            tname === "Compliance Rate Table" && tData?.map((row, index) => <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.lableName}
                                </td>
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.parameterType}
                                </td>
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.applicability}
                                </td>
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.operators}
                                </td>
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.rule}
                                </td>
                                <td className="whitespace-nowrap px-6 py-3 text-left font-medium font-Roboto text-silver__color">
                                    {row?.compliance}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                modal.state === "Upload file" && <CommonPopUp title='Upload File and Approve' component={<UploadFile />} closeModal={closeModal} />
            }
        </>

    );
};

export default Table;