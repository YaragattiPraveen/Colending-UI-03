import { ChangeEvent, useState } from "react"
import Table from "../../utils/Common/Table"
import { managementButtonTitle } from "../../Constants/ButtonTitles"
import * as XLSX from 'xlsx';

const ManagementFees = () => {
    const [currentTab, setCurrentTab] = useState<number>(0)
    const [pendingTableData, setPendingTableData] = useState([
        {
            bankId: "da5d45d4f5ad5f45",
            bankName: "State Bank Of India",
            outStandingAmount: 500000,
            managementFees: 63000,
            status: "Pending"
        },
        {
            bankId: "da5d45d4f5ad5f45",
            bankName: "State Bank Of India",
            outStandingAmount: 500000,
            managementFees: 63000,
            status: "Paid"
        },
        {
            bankId: "da5d45d4f5ad5f45",
            bankName: "State Bank Of India",
            outStandingAmount: 500000,
            managementFees: 63000,
            status: "Pending"
        },
    ])
    // const [tableHeadings, setTableHeadings] = useState<string[]>([]);
    const pendingAmountTableData = {
        tname: "Repayment Pending Amount",
        theading: [
            "Bank ID",
            "Bank Name",
            "Outstanding Amount",
            "Management Fees",
            "Status"
        ],
        tData: pendingTableData
    }


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
                if (jsonData.length > 0) {
                    const data: {
                        bankId: string;
                        bankName: string;
                        outStandingAmount: number;
                        managementFees: number;
                        status: string;
                    }[] = jsonData.slice(1).map(row => {
                        const rowData = {
                            bankId: row[0],
                            bankName: row[1],
                            outStandingAmount: parseInt(row[2]),
                            managementFees: parseInt(row[3]),
                            status: row[4],
                        };
                        return rowData;
                    });

                    setPendingTableData(prevData => [...prevData, ...data]);
                }
            };
            reader.readAsBinaryString(file);
        }
    };
    const rePaymentAmountTableData = {
        tname: "Repayment Table",
        tData: [{
            bankId: "da5d45d4f5ad5f45",
            bankName: "State Bank Of India",
            repaymentDate: new Date().toISOString().substring(0, 10),
            repaymentAmount: 36000
        },
        {
            bankId: "da5d45d4f5ad5f45",
            bankName: "State Bank Of India",
            repaymentDate: new Date().toISOString().substring(0, 10),
            repaymentAmount: 36000
        },
        {
            bankId: "da5d45d4f5ad5f45",
            bankName: "State Bank Of India",
            repaymentDate: new Date().toISOString().substring(0, 10),
            repaymentAmount: 36000
        }],
        theading: ["Bank ID", "Bank Name", "Repayment Date", "Repayment Amount"]
    }
    const handleTab = (ind: number) => {
        setCurrentTab(ind)
    }

    return (
        <main className="flex-col px-4 overflow-y-auto">
            <h3 className="text-primary font-semibold lg:text-2xl pb-3">Management Fees</h3>
            <input className="bg-primary text-whiteColor py-1 px-2 rounded-md" type="file" onChange={handleFileUpload} />
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
                    currentTab === 0 && <Table tname={pendingAmountTableData.tname} theading={pendingAmountTableData.theading} tData={pendingAmountTableData.tData} />
                }
                {
                    currentTab === 1 && <Table tname={rePaymentAmountTableData.tname} theading={rePaymentAmountTableData?.theading} tData={rePaymentAmountTableData?.tData} />
                }

            </div>
        </main>
    )
}

export default ManagementFees