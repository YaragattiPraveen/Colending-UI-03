import GrantedTab from "./Tabs/DisbursementTabs/GrantedTab"
import ReviewTab from "./Tabs/DisbursementTabs/ReviewTab"
import UnderProcessingTab from "./Tabs/DisbursementTabs/UnderProcessingTab"
import PendingTab from "./Tabs/DisbursementTabs/PendingTab"
import useModal from "../../hooks/useModal"
import Button from "../../utils/Form-utils/Button"
import CommonPopUp from "../../utils/Common/CommonPopUp"
import { disbursementButtonTitle } from "../../Constants/ButtonTitles"
import MultistepForm from "../../utils/Common/MultistepForm"
import Table from "../../utils/Common/Table"
import { ChangeEvent, useState } from "react"
import * as XLSX from 'xlsx';

const Disbursement = () => {
    const { modal, closeModal, updateModal } = useModal()
    const [currentTab, setCurrentTab] = useState<number>(0)
    const [showComplianceRateModal, setShowComplianceRateModal] = useState(false);
    const [pendingTableData, setPendingTableData] = useState([
        {
            bankId: "da5d45d4f5ad5f45",
            bankName: "State Bank Of India",
            outStandingAmount: 500000,
            managementFees: 63000,
            status: "Pending"
        },
        {
            bankId: "da5d45d4f5ad5f46",
            bankName: "State Bank Of India",
            outStandingAmount: 500000,
            managementFees: 63000,
            status: "Paid"
        },
        {
            bankId: "da5d45d4f5ad5f47",
            bankName: "State Bank Of India",
            outStandingAmount: 500000,
            managementFees: 63000,
            status: "Pending"
        },
    ]);

    const [secondArrayData, setSecondArrayData] = useState([{
        loanId: "da5d45d4f5ad5f45",
        loanApprovalDate: "30-04-2023",
        loanApplicationDate: "05-05-2023",
        disbursementDate: "14-05-2023",
        loanAmount: 568923,
        repayment: 3652
    }])

    console.log(pendingTableData, "First Array of Data", secondArrayData, "Second Array of Data")
    const handleTab = (ind: number) => {
        setCurrentTab(ind)
    }
    const repaymentStructureTableData = {
        theading: ["Loan Disbursement Date", "Loan ID", "Name of the Borrower", "NBFC Name", "Repayment Date", "Loan Approval Date", "Loan Amount", "View Loan Application", "Repayment Structure", "Payment Status"],
        tData: [
            {
                loandisDate: new Date().toISOString().substring(0, 10),
                repaymentDate: new Date().toISOString().substring(0, 10),
                loanId: "a4f6a46d4",
                nameOfBorrower: "Raj Nanda",
                bankName: "State Bank Of India",
                loanAmount: 30000,
                viewApplication: <Button callBack={() => updateModal("View Application")} title="View" />,
                viewRepaymentStructure: <Button callBack={() => updateModal("View Repayment Structure")} title="View" />,
                loanApprovalDate: new Date().toISOString().substring(0, 10),
                paymentStatus: "Paid"
            },
            {
                loandisDate: new Date().toISOString().substring(0, 10),
                repaymentDate: new Date().toISOString().substring(0, 10),
                loanId: "b8c7e2f1",
                nameOfBorrower: "Emily Smith",
                loanAmount: 30000,
                bankName: "State Bank Of India",
                viewApplication: <Button callBack={() => updateModal("View Application")} title="View" />,
                viewRepaymentStructure: <Button callBack={() => updateModal("View Repayment Structure")} title="View" />,
                loanApprovalDate: new Date().toISOString().substring(0, 10),
                paymentStatus: "Pending"
            },
            {
                loandisDate: new Date().toISOString().substring(0, 10),
                repaymentDate: new Date().toISOString().substring(0, 10),
                loanId: "d9a8b7c6",
                nameOfBorrower: "John Doe",
                loanAmount: 30000,
                bankName: "State Bank Of India",
                viewApplication: <Button callBack={() => updateModal("View Application")} title="View" />,
                viewRepaymentStructure: <Button callBack={() => updateModal("View Repayment Structure")} title="View" />,
                loanApprovalDate: new Date().toISOString().substring(0, 10),
                paymentStatus: "Paid"
            }
        ]
    }
    const underProcessingTableData = {
        theading: ["Loan Disbursement Date", "Loan ID", "Name of the Borrower", "Bank Name", "Loan Amount", "View Loan Application", "	COMPLIANCE CHECK"],
        tData: [
            {
                loandisDate: new Date().toISOString().substring(0, 10),
                loanId: "a4f6a46d4",
                nameOfBorrower: "Raj Nanda",
                loanAmount: 30000,
                bankName: "State Bank Of India",
                viewApplication: <Button callBack={() => updateModal("View Application")} title="View" />,
                compliance: <Button title="View" callBack={() => updateModal("View Compliance")} />
            },
            {
                loandisDate: new Date().toISOString().substring(0, 10),
                loanId: "b8c7e2f1",
                nameOfBorrower: "Emily Smith",
                loanAmount: 30000,
                bankName: "State Bank Of India",
                viewApplication: <Button callBack={() => updateModal("View Application")} title="View" />,
                compliance: <Button title="View" callBack={() => updateModal("View Compliance")} />
            },
            {
                loandisDate: new Date().toISOString().substring(0, 10),
                loanId: "d9a8b7c6",
                nameOfBorrower: "John Doe",
                loanAmount: 30000,
                bankName: "State Bank Of India",
                viewApplication: <Button callBack={() => updateModal("View Application")} title="View" />,
                compliance: <Button title="View" callBack={() => updateModal("View Compliance")} />
            }
        ]
    }
    const tableData1 = [
        {
            selectBank: <input type="radio" />,
            bankId: "a34d654d1",
            bankName: "State bank on India",
            compliance: <Button callBack={() => { updateModal("View Compliance Rate"); setShowComplianceRateModal(true); }} title="33%" />
        },
        {
            selectBank: <input type="radio" />,
            bankId: "a34d654d1",
            bankName: "State bank on India",
            compliance: <Button callBack={() => { updateModal("View Compliance Rate"); setShowComplianceRateModal(true); }} title="39%" />
        },
        {
            selectBank: <input type="radio" />,
            bankId: "a34d654d1",
            bankName: "State bank on India",
            compliance: <Button callBack={() => { updateModal("View Compliance Rate"); setShowComplianceRateModal(true); }} title="63%" />
        },
        {
            selectBank: <input type="radio" />,
            bankId: "a34d654d1",
            bankName: "State bank on India",
            compliance: <Button callBack={() => { updateModal("View Compliance Rate"); setShowComplianceRateModal(true); }} title="93%" />
        }
    ];

    const tableData2 = [
        {
            lableName: "No of Members",
            parameterType: "Number",
            applicability: "Yes",
            operators: "Greater Than",
            rule: "300",
            compliance: "Yes"
        },
        {
            lableName: "No of Members",
            parameterType: "Number",
            applicability: "Yes",
            operators: "Greater Than",
            rule: "300",
            compliance: "No"
        },
        {
            lableName: "No of Members",
            parameterType: "Number",
            applicability: "Yes",
            operators: "Greater Than",
            rule: "300",
            compliance: "Yes"
        }
    ]
    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const binaryString = event.target?.result as string;
                const workbook = XLSX.read(binaryString, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData: string[][] = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as string[][];

                console.log('jsonData:', jsonData);

                if (jsonData.length > 1) { // Check if there's data beyond the header row
                    const firstArray: {
                        bankId: string;
                        bankName: string;
                        outStandingAmount: number;
                        managementFees: number;
                        status: string;
                    }[] = [];

                    const secondArray: {
                        loanId: string;
                        loanApprovalDate: string;
                        loanApplicationDate: string;
                        disbursementDate: string;
                        loanAmount: number;
                        repayment: number;
                    }[] = [];

                    // Start iteration from the second row (index 1)
                    for (let i = 1; i < jsonData.length; i++) {
                        const row = jsonData[i];
                        if (row.length >= 5) {
                            const rowData = {
                                bankId: row[0],
                                bankName: row[1],
                                outStandingAmount: parseInt(row[2]),
                                managementFees: parseInt(row[3]),
                                status: row[4]
                            };
                            firstArray.push(rowData);
                        }

                        if (row.length >= 11) {
                            const loanData = {
                                loanId: row[5],
                                loanApprovalDate: row[6],
                                loanApplicationDate: row[7],
                                disbursementDate: row[8],
                                loanAmount: parseFloat(row[9]),
                                repayment: parseFloat(row[10])
                            };
                            secondArray.push(loanData);
                        }
                    }

                    setPendingTableData([...pendingTableData, ...firstArray]);
                    setSecondArrayData([...secondArrayData, ...secondArray]);
                }
            };
            reader.readAsBinaryString(file);
        }
    };




    return (
        <main className="flex-col px-4 overflow-y-auto">
            <h3 className="text-primary font-semibold lg:text-2xl pb-3">Disbursement</h3>
            <input className="bg-primary text-whiteColor py-1 px-2 rounded-md" type="file" onChange={handleFileUpload} />
            <div className="px-4 flex gap-3 flex-wrap items-center justify-end py-3">
                {
                    disbursementButtonTitle?.map((title: string, ind: number) => {
                        return <span key={ind} className={`bg-bgColor cursor-pointer shadow-md rounded-md px-10 py-1 ${currentTab === ind ? " border-b-2 border-primary" : ''}`} onClick={() => handleTab(ind)}>
                            <span className={`text-primary font-semibold text-base`}>{title}</span>
                        </span>
                    })
                }
            </div>
            <div className="px-4">
                {
                    currentTab === 0 && <GrantedTab tData={repaymentStructureTableData.tData} theading={repaymentStructureTableData.theading} show={false} />
                }
                {
                    currentTab === 1 && <ReviewTab />
                }
                {
                    currentTab === 2 && <UnderProcessingTab theading={underProcessingTableData.theading} tData={underProcessingTableData.tData} show={false} />
                }
                {
                    currentTab === 3 && <PendingTab />
                }   
            </div>
            {
                modal?.state === "View Application" && <CommonPopUp title="View Loan Application" closeModal={closeModal} component={<MultistepForm />} />
            }
            {
                modal?.state === "View Compliance" && (
                    <>
                        <CommonPopUp title="Compliance Check" component={<Table theading={["Select Bank", "Bank ID", "Bank Name", "Compliance Rate"]} tData={tableData1} tname="Compliance Table" show={false} />} closeModal={closeModal} />
                    </>
                )
            }
            {
                modal?.state === "View Compliance Rate" && showComplianceRateModal && (
                    <CommonPopUp title="Compliance Rate" component={<Table theading={["LABEL NAME", "PARAMETER TYPE ", "APPLICABILITY", "OPERATORS", "RULE", "Compliance"]} tData={tableData2} tname="Compliance Rate Table" show={false} />} closeModal={() => { updateModal("View Compliance"); setShowComplianceRateModal(false); }} />
                )
            }
            {
                modal?.state === "View Repayment Structure" && <CommonPopUp title="Repayment Structure" closeModal={closeModal} component={<h2>Repayment Structure Pop Up</h2>} />
            }
        </main>
    )
}

export default Disbursement