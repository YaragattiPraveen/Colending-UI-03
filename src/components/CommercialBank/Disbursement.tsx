import { useState } from "react"
import GrantedTab from "../NBFC/Tabs/DisbursementTabs/GrantedTab"
import UnderProcessingTab from "../NBFC/Tabs/DisbursementTabs/UnderProcessingTab"
import useModal from "../../hooks/useModal"
import Button from "../../utils/Form-utils/Button"
import Table from "../../utils/Common/Table"
import CommonPopUp from "../../utils/Common/CommonPopUp"
import { buttonTitle } from "../../Constants/ButtonTitles"
import MultistepForm from "../../utils/Common/MultistepForm"

const Disbursement = () => {
    const { modal, updateModal, closeModal } = useModal()
    const [currentTab, setCurrentTab] = useState<number>(0)

    const handleTab = (ind: number) => {
        setCurrentTab(ind)
    }
    const rejectedTableData = {
        theading: ["Loan Disbursement Date", "Loan ID", "Name of the Borrower", "NBFC Name", "Loan Amount", "View Loan Application", "Compliance Check"],
        tData: [
            {
                loandisDate: new Date().toISOString().substring(0, 10),
                loanId: "a4f6a46d4",
                nameOfBorrower: "Raj Nanda",
                loanAmount: 30000,
                bankName: "State Bank Of India",
                viewApplication: <Button callBack={() => updateModal("View Application")} title="View" />,
                compliance: <Button callBack={() => { updateModal("View Compliance Rate") }} title="20%" />
            },
            {
                loandisDate: new Date().toISOString().substring(0, 10),
                loanId: "b8c7e2f1",
                nameOfBorrower: "Emily Smith",
                loanAmount: 30000,
                bankName: "State Bank Of India",
                viewApplication: <Button callBack={() => updateModal("View Application")} title="View" />,
                compliance: <Button callBack={() => { updateModal("View Compliance Rate") }} title="20%" />
            },
            {
                loandisDate: new Date().toISOString().substring(0, 10),
                loanId: "d9a8b7c6",
                nameOfBorrower: "John Doe",
                loanAmount: 30000,
                bankName: "State Bank Of India",
                viewApplication: <Button callBack={() => updateModal("View Application")} title="View" />,
                compliance: <Button callBack={() => { updateModal("View Compliance Rate") }} title="20%" />
            }
        ],
        tableData2: [
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
        theading: ["Loan Disbursement Date", "Loan ID", "Name of the Borrower", "NBFC Name", "Loan Amount", "View Loan Application", "Compliance Check", "Action"],
        tData: [
            {
                loandisDate: new Date().toISOString().substring(0, 10),
                loanId: "a4f6a46d4",
                nameOfBorrower: "Raj Nanda",
                loanAmount: 30000,
                bankName: "State Bank Of India",
                viewApplication: <Button callBack={() => updateModal("View Application")} title="View" />,
                compliance: <Button callBack={() => { updateModal("View Compliance Rate") }} title="30%" />,
                actions: [
                    "Approve",
                    "Reject"
                ]
            },
            {
                loandisDate: new Date().toISOString().substring(0, 10),
                loanId: "b8c7e2f1",
                nameOfBorrower: "Emily Smith",
                loanAmount: 30000,
                bankName: "State Bank Of India",
                viewApplication: <Button callBack={() => updateModal("View Application")} title="View" />,
                compliance: <Button callBack={() => { updateModal("View Compliance Rate") }} title="30%" />,
                actions: [
                    "Approve",
                    "Reject"
                ]
            },
            {
                loandisDate: new Date().toISOString().substring(0, 10),
                loanId: "d9a8b7c6",
                nameOfBorrower: "John Doe",
                loanAmount: 30000,
                bankName: "State Bank Of India",
                viewApplication: <Button callBack={() => updateModal("View Application")} title="View" />,
                compliance: <Button callBack={() => { updateModal("View Compliance Rate") }} title="30%" />,
                actions: [
                    "Approve",
                    "Reject"
                ]
            }
        ],
        tableData2: [
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
    }

    return (
        <main className="flex-col px-4 overflow-y-auto">
            <h3 className="text-primary font-semibold lg:text-2xl pb-3">Disbursement</h3>
            <div className="px-4 flex gap-3 flex-wrap items-center justify-end py-3">
                {
                    buttonTitle?.map((title: string, ind: number) => {
                        return <span key={ind} className={`bg-bgColor cursor-pointer shadow-md rounded-md px-10 py-1 ${currentTab === ind ? " border-b-2 border-primary" : ''}`} onClick={() => handleTab(ind)}>
                            <span className={`text-primary font-semibold text-base`}>{title}</span>
                        </span>
                    })
                }
            </div>
            <div className="px-4">
                {
                    currentTab === 0 && <GrantedTab theading={repaymentStructureTableData.theading} tData={repaymentStructureTableData.tData} show={false} />
                }
                {
                    currentTab === 1 && <UnderProcessingTab theading={rejectedTableData.theading} tData={rejectedTableData.tData} show={false} />
                }
                {
                    currentTab === 2 && <UnderProcessingTab theading={underProcessingTableData.theading} tData={underProcessingTableData.tData} show={false} />
                }
            </div>
            {
                modal?.state === "View Application" && <CommonPopUp title="View Loan Application" component={<MultistepForm />} closeModal={closeModal} />
            }
            {
                modal?.state === "View Compliance Rate" && (
                    <CommonPopUp title="Compliance Rate" component={<Table theading={["LABEL NAME", "PARAMETER TYPE ", "APPLICABILITY", "OPERATORS", "RULE", "Compliance"]} tData={underProcessingTableData?.tableData2} tname="Compliance Rate Table" show={false} />} closeModal={() => { updateModal("View Compliance") }} />
                )
            }
            {
                modal?.state === "View Repayment Structure" && <CommonPopUp title="Repayment Structure" closeModal={closeModal} component={<h2>Repayment Structure Pop Up</h2>} />
            }
        </main>
    )
}

export default Disbursement