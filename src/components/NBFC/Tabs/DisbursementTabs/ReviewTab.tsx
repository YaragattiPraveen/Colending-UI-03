import { useState } from "react";
import useModal from "../../../../hooks/useModal";
import Button from "../../../../utils/Form-utils/Button";
import Table from "../../../../utils/Common/Table";
import CommonPopUp from "../../../../utils/Common/CommonPopUp";
import MultistepForm from "../../../../utils/Common/MultistepForm";

const ReviewTab = () => {
  const { modal, updateModal, closeModal } = useModal();
  const [showComplianceRateModal, setShowComplianceRateModal] = useState(false);

  const tableData = [
    {
      loandisDate: new Date().toISOString().substring(0, 10),
      loanId: "a4f6a46d4",
      nameOfBorrower: "Raj Nanda",
      loanAmount: 30000,
      viewApplication: (
        <Button callBack={() => updateModal("View Application")} title="View" />
      ),
      compliance: (
        <Button callBack={() => updateModal("View Compliance")} title="View" />
      ),
    },
    {
      loandisDate: new Date().toISOString().substring(0, 10),
      loanId: "b8c7e2f1",
      nameOfBorrower: "Emily Smith",
      loanAmount: 30000,
      viewApplication: (
        <Button callBack={() => updateModal("View Application")} title="View" />
      ),
      compliance: (
        <Button callBack={() => updateModal("View Compliance")} title="View" />
      ),
    },
    {
      loandisDate: new Date().toISOString().substring(0, 10),
      loanId: "d9a8b7c6",
      nameOfBorrower: "John Doe",
      loanAmount: 30000,
      viewApplication: (
        <Button callBack={() => updateModal("View Application")} title="View" />
      ),
      compliance: (
        <Button callBack={() => updateModal("View Compliance")} title="View" />
      ),
    },
  ];

  const tableData1 = [
    {
      selectBank: <input type="radio" />,
      bankId: "a34d654d1",
      bankName: "State bank on India",
      compliance: (
        <Button
          callBack={() => {
            updateModal("View Compliance Rate");
            setShowComplianceRateModal(true);
          }}
          title="33%"
        />
      ),
    },
    {
      selectBank: <input type="radio" />,
      bankId: "a34d654d1",
      bankName: "State bank on India",
      compliance: (
        <Button
          callBack={() => {
            updateModal("View Compliance Rate");
            setShowComplianceRateModal(true);
          }}
          title="39%"
        />
      ),
    },
    {
      selectBank: <input type="radio" />,
      bankId: "a34d654d1",
      bankName: "State bank on India",
      compliance: (
        <Button
          callBack={() => {
            updateModal("View Compliance Rate");
            setShowComplianceRateModal(true);
          }}
          title="63%"
        />
      ),
    },
    {
      selectBank: <input type="radio" />,
      bankId: "a34d654d1",
      bankName: "State bank on India",
      compliance: (
        <Button
          callBack={() => {
            updateModal("View Compliance Rate");
            setShowComplianceRateModal(true);
          }}
          title="93%"
        />
      ),
    },
  ];

  const tableData2 = [
    {
      lableName: "No of Members",
      parameterType: "Number",
      applicability: "Yes",
      operators: "Greater Than",
      rule: "300",
      compliance: "Yes",
    },
    {
      lableName: "No of Members",
      parameterType: "Number",
      applicability: "Yes",
      operators: "Greater Than",
      rule: "300",
      compliance: "No",
    },
    {
      lableName: "No of Members",
      parameterType: "Number",
      applicability: "Yes",
      operators: "Greater Than",
      rule: "300",
      compliance: "Yes",
    },
  ];

  return (
    <>
      <Table
        tname="Review Table"
        theading={[
          "Loan Disbursement Date",
          "Loan ID",
          "Name of the Borrower",
          "Loan Amount",
          "View Loan Application",
          "Compliance Check",
        ]}
        tData={tableData}
        show={false}
      />
      {modal?.state === "View Application" && (
        <CommonPopUp
          title="View Loan Application"
          closeModal={closeModal}
          component={<MultistepForm />}
        />
      )}
      {modal?.state === "View Compliance" && (
        <>
          <CommonPopUp
            title="Compliance Check"
            component={
              <Table
                theading={[
                  "Select Bank",
                  "Bank ID",
                  "Bank Name",
                  "Compliance Rate",
                ]}
                tData={tableData1}
                tname="Compliance Table"
                show={false}
              />
            }
            closeModal={closeModal}
          />
        </>
      )}
      {modal?.state === "View Compliance Rate" && showComplianceRateModal && (
        <CommonPopUp
          title="Compliance Rate"
          component={
            <Table
              theading={[
                "LABEL NAME",
                "PARAMETER TYPE ",
                "APPLICABILITY",
                "OPERATORS",
                "RULE",
                "Compliance",
              ]}
              tData={tableData2}
              tname="Compliance Rate Table"
              show={false}
            />
          }
          closeModal={() => {
            updateModal("View Compliance");
            setShowComplianceRateModal(false);
          }}
        />
      )}
    </>
  );
};

export default ReviewTab;
