import useModal from "../../hooks/useModal"
import CommonPopUp from "../../utils/Common/CommonPopUp"
import MultistepForm from "../../utils/Common/MultistepForm"
import Table from "../../utils/Common/Table"
import Button from "../../utils/Form-utils/Button"

const RepaymentStructure = () => {
    const { modal, closeModal, updateModal } = useModal()
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
    return (
        <main className="flex-col px-4 overflow-y-auto">
            <h3 className="text-primary font-semibold lg:text-2xl pb-3">Repayment</h3>
            <Table tname="Repayment Structure" theading={repaymentStructureTableData.theading} tData={repaymentStructureTableData.tData} show={false} />
            {
                modal?.state === "View Application" && <CommonPopUp title="View Loan Application" closeModal={closeModal} component={<MultistepForm />} />
            }
            {
                modal?.state === "View Repayment Structure" && <CommonPopUp title="Repayment Structure" closeModal={closeModal} component={<h2>Repayment Structure Pop Up</h2>} />
            }
        </main>
    )
}

export default RepaymentStructure