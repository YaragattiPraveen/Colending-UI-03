import { useState } from "react"
import PendingAmount from "../NBFC/Tabs/ReimbursementTabs/PendingAmount"
import ReimbursementHistory from "../NBFC/Tabs/ReimbursementTabs/ReimbursementHistory"
import useModal from "../../hooks/useModal"
import GrantedTab from "../NBFC/Tabs/DisbursementTabs/GrantedTab"
import CommonPopUp from "../../utils/Common/CommonPopUp"
import Button from "../../utils/Form-utils/Button"
import { managementButtonTitle } from "../../Constants/ButtonTitles"
import MultistepForm from "../../utils/Common/MultistepForm"

const Reimbursement = () => {
    const [currentTab, setCurrentTab] = useState<number>(0)
    const { modal, updateModal, closeModal } = useModal()
    let show
    if (currentTab === 0) {
        show = true
    } else {
        show = false
    }

    const handleTab = (ind: number) => {
        setCurrentTab(ind)
    }

    const pendingAmountTableData = {
        theading: ["NBFC ID", "NBFC Name", "Pending Amount"],
        tData: [{
            bankId: "da5d45d4f5ad5f45",
            bankName: "State Bank Of India",
            pendingAmount: <span className="underline cursor-pointer" onClick={() => { updateModal("Reimbursement History") }}>30000</span>,
        },
        {
            bankId: "da5d45d4f5ad5f45",
            bankName: "State Bank Of India",
            pendingAmount: <span className="underline cursor-pointer" onClick={() => { updateModal("Reimbursement History") }}>40000</span>,
        },
        {
            bankId: "da5d45d4f5ad5f45",
            bankName: "State Bank Of India",
            pendingAmount: <span className="underline cursor-pointer" onClick={() => { updateModal("Reimbursement History") }}>40000</span>,
        }]
    }

    const approvedTableData = {
        theading: currentTab === 0 ? ["Select Loan Application", "Loan Disbursement Date", "Loan ID", "Name of the Borrower", "NBFC Name", "Loan Approval Date", "Loan Amount", "View Loan Application"] : ["Loan Disbursement Date", "Loan ID", "Name of the Borrower", "NBFC Name", "Loan Approval Date", "Loan Amount", "View Loan Application"],
        tData: [
            {
                loandisDate: new Date().toISOString().substring(0, 10),
                loanId: "a4f6a46d4",
                nameOfBorrower: "Raj Nanda",
                bankName: "State Bank Of India",
                loanAmount: 30000,
                viewApplication: <Button callBack={() => { updateModal("View Application") }} title="View" />,
                loanApprovalDate: new Date().toISOString().substring(0, 10),
            },
            {
                loandisDate: new Date().toISOString().substring(0, 10),
                loanId: "b8c7e2f1",
                nameOfBorrower: "Emily Smith",
                loanAmount: 30000,
                bankName: "State Bank Of India",
                viewApplication: <Button callBack={() => { updateModal("View Application") }} title="View" />,
                loanApprovalDate: new Date().toISOString().substring(0, 10),
            },
            {
                loandisDate: new Date().toISOString().substring(0, 10),
                loanId: "d9a8b7c6",
                nameOfBorrower: "John Doe",
                loanAmount: 30000,
                bankName: "State Bank Of India",
                viewApplication: <Button callBack={() => { updateModal("View Application") }} title="View" />, loanApprovalDate: new Date().toISOString().substring(0, 10),
            }
        ]
    }

    const rePaymentAmountTableData = {
        tData: [{
            bankId: "da5d45d4f5ad5f45",
            bankName: "State Bank Of India",
            utrNO: "16532",
            repaymentDate: new Date().toISOString().substring(0, 10),
            repaymentAmount: 36000,
            viewApplication: <Button callBack={() => { updateModal("Reimbursement History") }} title="View" />
        },
        {
            bankId: "da5d45d4f5ad5f45",
            bankName: "State Bank Of India",
            utrNO: "16532",
            repaymentDate: new Date().toISOString().substring(0, 10),
            repaymentAmount: 36000,
            viewApplication: <Button callBack={() => { updateModal("Reimbursement History") }} title="View" />
        },
        {
            bankId: "da5d45d4f5ad5f45",
            utrNO: "16532",
            bankName: "State Bank Of India",
            repaymentDate: new Date().toISOString().substring(0, 10),
            repaymentAmount: 36000,
            viewApplication: <Button callBack={() => { updateModal("Reimbursement History") }} title="View" />
        }],
        theading: ["NBFC ID", "NBFC Name", "Repayment Date", "UTR No", "Repayment Amount", "View Loan Applications"]
    }

    return (
        <main className="flex-col px-4 overflow-y-auto">
            <h3 className="text-primary font-semibold lg:text-2xl pb-3">Reimbursement</h3>
            <div className="px-4 flex gap-3 flex-wrap items-center justify-end py-3">
                {
                    managementButtonTitle?.map((title: string, ind: number) => {
                        return <span key={ind} className={`bg-bgColor cursor-pointer shadow-md rounded-md px-10 py-1 ${currentTab === ind ? " border-b-2 border-primary" : ''}`} onClick={() => handleTab(ind)}>
                            <span className={`text-primary font-semibold text-base`}>{title}</span>
                        </span>
                    })
                }
            </div>
            <div className="px-4">
                {
                    currentTab === 0 && <PendingAmount tData={pendingAmountTableData?.tData} theading={pendingAmountTableData?.theading} show={false} />
                }
                {
                    currentTab === 1 && <ReimbursementHistory tData={rePaymentAmountTableData?.tData} theading={rePaymentAmountTableData?.theading} show={false} />
                }

            </div>
            {
                modal.state === "Reimbursement History" && <CommonPopUp title="Reimbursement History" closeModal={closeModal} component={<GrantedTab theading={approvedTableData.theading} tData={approvedTableData.tData} show={show} />} />
            }
            {
                modal?.state === "View Application" && <CommonPopUp title="View Loan Application" component={<MultistepForm />} closeModal={() => { updateModal("Reimbursement History") }} />
            }
        </main>
    )
}

export default Reimbursement