import { useState } from "react"
import Table from "../../utils/Common/Table"
import { managementButtonTitle } from "../../Constants/ButtonTitles"


const ManagementFees = () => {
    const [currentTab, setCurrentTab] = useState<number>(0)

    const pendingAmountTableData = {
        tname: "Repayment Pending Amount",
        theading: [
            "Bank ID",
            "Bank Name",
            "Outstanding Amount",
            "Management Fees"
        ],
        tData: [
            {
                bankId: "da5d45d4f5ad5f45",
                bankName: "State Bank Of India",
                outStandingAmount: 500000,
                managementFees: 63000,
            },
            {
                bankId: "da5d45d4f5ad5f45",
                bankName: "State Bank Of India",
                outStandingAmount: 500000,
                managementFees: 63000,
            },
            {
                bankId: "da5d45d4f5ad5f45",
                bankName: "State Bank Of India",
                outStandingAmount: 500000,
                managementFees: 63000,
            },
        ]
    }
    const rePaymentAmountTableData = {
        tname: "Repayment Table",
        tData: [{
            bankId: "da5d45d4f5ad5f45",
            bankName: "State Bank Of India",
            utrNO: "16532",
            repaymentDate: new Date().toISOString().substring(0, 10),
            repaymentAmount: 36000
        },
        {
            bankId: "da5d45d4f5ad5f45",
            bankName: "State Bank Of India",
            utrNO: "16532",
            repaymentDate: new Date().toISOString().substring(0, 10),
            repaymentAmount: 36000
        },
        {
            bankId: "da5d45d4f5ad5f45",
            utrNO: "16532",
            bankName: "State Bank Of India",
            repaymentDate: new Date().toISOString().substring(0, 10),
            repaymentAmount: 36000
        }],
        theading: ["Bank ID", "Bank Name", "Payment Date", "UTR No", "Management Fees"]
    }
    const handleTab = (ind: number) => {
        setCurrentTab(ind)
    }
    return (
        <main className="flex-col px-4 overflow-y-auto">
            <h3 className="text-primary font-semibold lg:text-2xl pb-3">Management Fees</h3>
    
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
                    currentTab === 0 && <Table tname={pendingAmountTableData.tname} theading={pendingAmountTableData.theading} tData={pendingAmountTableData.tData} show={false} />
                }
                {
                    currentTab === 1 && <Table tname={rePaymentAmountTableData.tname} theading={rePaymentAmountTableData?.theading} tData={rePaymentAmountTableData?.tData} show={false} />
                }
            </div>
        </main>
    )
}

export default ManagementFees