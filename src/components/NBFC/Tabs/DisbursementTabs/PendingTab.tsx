import { useState } from "react";
import useModal from "../../../../hooks/useModal";
import Button from "../../../../utils/Form-utils/Button";
import Table from "../../../../utils/Common/Table";
import CommonPopUp from "../../../../utils/Common/CommonPopUp";
import MultistepForm from "../../../../utils/Common/MultistepForm";

const PendingTab = () => {
  const { modal, updateModal, closeModal } = useModal();
  const [showComplianceRateModal, setShowComplianceRateModal] = useState(false);

  const tableData = [
    {
      loandisDate: new Date().toISOString().substring(0, 10),
      loanId: "a4f6a46d4",
      nameOfBorrower: "Raj Nanda",
      loanAmount: 30000,
      viewApplication: <Button callBack={() => updateModal("View Application")} title="View" />,
      compliance: <Button title="View" callBack={() => updateModal("View Compliance")} />
    },
    {
      loandisDate: new Date().toISOString().substring(0, 10),
      loanId: "b8c7e2f1",
      nameOfBorrower: "Emily Smith",
      loanAmount: 30000,
      viewApplication: <Button callBack={() => updateModal("View Application")} title="View" />,
      compliance: <Button title="View" callBack={() => updateModal("View Compliance")} />
    },
    {
      loandisDate: new Date().toISOString().substring(0, 10),
      loanId: "d9a8b7c6",
      nameOfBorrower: "John Doe",
      loanAmount: 30000,
      viewApplication: <Button callBack={() => updateModal("View Application")} title="View" />,
      compliance: <Button title="View" callBack={() => updateModal("View Compliance")} />
    }
  ];

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

  return (
    <>
      <div className="container flex justify-start items-center mb-3">
        <div className="relative flex items-center">
          <div className="absolute top-4 left-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
          </div>
          <input
            type="text"
            className="h-12 w-50 md:w-96 pl-6 pr-16 shadow-md rounded-lg z-0 focus:outline-none"
            placeholder="Enter Loan ID ..."
          />
          <div className="absolute right-2">
            <Button title="Fetch Loan Application" callBack={() => true} />
          </div>
        </div>
      </div>
      <Table tname="Pending Table" theading={["Loan Disbursement Date", "Loan ID", "Name of the Borrower", "Loan Amount", "View Loan Application", "Compliance Check"]} tData={tableData} show={false} />
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
    </>
  );
}

export default PendingTab