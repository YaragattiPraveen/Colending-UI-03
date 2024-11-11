import GrantedTab from "./Tabs/DisbursementTabs/GrantedTab";
import ReviewTab from "./Tabs/DisbursementTabs/ReviewTab";
import UnderProcessingTab from "./Tabs/DisbursementTabs/UnderProcessingTab";
import PendingTab from "./Tabs/DisbursementTabs/PendingTab";
import useModal from "../../hooks/useModal";
import Button from "../../utils/Form-utils/Button";
import CommonPopUp from "../../utils/Common/CommonPopUp";
import { disbursementButtonTitle } from "../../Constants/ButtonTitles";
import MultistepForm from "../../utils/Common/MultistepForm";
import Table from "../../utils/Common/Table";
import { useState } from "react";

const Disbursement = () => {
  const { modal, closeModal, updateModal } = useModal();
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [showComplianceRateModal, setShowComplianceRateModal] = useState(false);

  const handleTab = (ind: number) => {
    setCurrentTab(ind);
  };
  const repaymentStructureTableData = {
    theading: [
      "Loan Disbursement Date",
      "Loan ID",
      "Name of the Borrower",
      "Bank Name",
      "Repayment Date",
      "Loan Approval Date",
      "Loan Amount",
      "Bank Share",
      "View Loan Application",
      "Repayment Structure",
      "Payment Status",
    ],
    tData: [
      {
        loandisDate: new Date().toISOString().substring(0, 10),
        repaymentDate: new Date().toISOString().substring(0, 10),
        loanId: "a4f6a46d4",
        nameOfBorrower: "Raj Nanda",
        bankName: "State Bank Of India",
        loanAmount: 30001,
        bankShare: 25000,
        viewApplication: (
          <Button
            callBack={() => updateModal("View Application")}
            title="View"
          />
        ),
        viewRepaymentStructure: (
          <Button
            callBack={() => updateModal("View Repayment Structure")}
            title="View"
          />
        ),
        loanApprovalDate: new Date().toISOString().substring(0, 10),
        paymentStatus: "Default",
      },
      {
        loandisDate: new Date().toISOString().substring(0, 10),
        repaymentDate: new Date().toISOString().substring(0, 10),
        loanId: "b8c7e2f1",
        nameOfBorrower: "Emily Smith",
        loanAmount: 30000,
        bankShare: 25000,
        bankName: "State Bank Of India",
        viewApplication: (
          <Button
            callBack={() => updateModal("View Application")}
            title="View"
          />
        ),
        viewRepaymentStructure: (
          <Button
            callBack={() => updateModal("View Repayment Structure")}
            title="View"
          />
        ),
        loanApprovalDate: new Date().toISOString().substring(0, 10),
        paymentStatus: "Standard",
      },
      {
        loandisDate: new Date().toISOString().substring(0, 10),
        repaymentDate: new Date().toISOString().substring(0, 10),
        loanId: "d9a8b7c6",
        nameOfBorrower: "John Doe",
        loanAmount: 30000,
        bankShare: 25000,
        bankName: "State Bank Of India",
        viewApplication: (
          <Button
            callBack={() => updateModal("View Application")}
            title="View"
          />
        ),
        viewRepaymentStructure: (
          <Button
            callBack={() => updateModal("View Repayment Structure")}
            title="View"
          />
        ),
        loanApprovalDate: new Date().toISOString().substring(0, 10),
        paymentStatus: "NPA",
      },
    ],
  };
  const underProcessingTableData = {
    theading: [
      "Loan Disbursement Date",
      "Loan ID",
      "Name of the Borrower",
      "Bank Name",
      "Loan Amount",
      "View Loan Application",
      "COMPLIANCE CHECK",
    ],
    tData: [
      {
        loandisDate: new Date().toISOString().substring(0, 10),
        loanId: "a4f6a46d4",
        nameOfBorrower: "Raj Nanda",
        loanAmount: 30000,
        bankName: "State Bank Of India",
        viewApplication: (
          <Button
            callBack={() => updateModal("View Application")}
            title="View"
          />
        ),
        compliance: (
          <Button
            title="View"
            callBack={() => updateModal("View Compliance")}
          />
        ),
      },
      {
        loandisDate: new Date().toISOString().substring(0, 10),
        loanId: "b8c7e2f1",
        nameOfBorrower: "Emily Smith",
        loanAmount: 30000,
        bankName: "State Bank Of India",
        viewApplication: (
          <Button
            callBack={() => updateModal("View Application")}
            title="View"
          />
        ),
        compliance: (
          <Button
            title="View"
            callBack={() => updateModal("View Compliance")}
          />
        ),
      },
      {
        loandisDate: new Date().toISOString().substring(0, 10),
        loanId: "d9a8b7c6",
        nameOfBorrower: "John Doe",
        loanAmount: 30000,
        bankName: "State Bank Of India",
        viewApplication: (
          <Button
            callBack={() => updateModal("View Application")}
            title="View"
          />
        ),
        compliance: (
          <Button
            title="View"
            callBack={() => updateModal("View Compliance")}
          />
        ),
      },
    ],
  };
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
    <main className="flex-col px-4 overflow-y-auto">
      <h3 className="text-primary font-semibold lg:text-2xl pb-3">
        Disbursement
      </h3>

      <div className="px-4 flex gap-3 flex-wrap items-center justify-end py-3">
        {disbursementButtonTitle?.map((title: string, ind: number) => {
          return (
            <span
              key={ind}
              className={`bg-bgColor cursor-pointer shadow-md rounded-md px-10 py-1 ${
                currentTab === ind ? " border-b-2 border-primary" : ""
              }`}
              onClick={() => handleTab(ind)}
            >
              <span className={`text-primary font-semibold text-base`}>
                {title}
              </span>
            </span>
          );
        })}
      </div>
      <div className="px-4">
        {currentTab === 0 && (
          <GrantedTab
            tData={repaymentStructureTableData.tData}
            theading={repaymentStructureTableData.theading}
            show={false}
          />
        )}
        {currentTab === 1 && <ReviewTab />}
        {currentTab === 2 && (
          <UnderProcessingTab
            theading={underProcessingTableData.theading}
            tData={underProcessingTableData.tData}
            show={false}
          />
        )}
        {currentTab === 3 && <PendingTab />}
      </div>
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
      {modal?.state === "View Repayment Structure" && (
        <CommonPopUp
          title="Repayment Structure"
          closeModal={closeModal}
          component={<h2>Repayment Structure Pop Up</h2>}
        />
      )}
    </main>
  );
};

export default Disbursement;
