import { useState } from "react";
import useModal from "../../hooks/useModal";
import Button from "../../utils/Form-utils/Button";
import Approved from "./Tabs/MasterAgreementTabs/Approved";
import Pending from "./Tabs/MasterAgreementTabs/Pending";
import Rejected from "./Tabs/MasterAgreementTabs/Rejected";
import MasterAgreementRule from "../../utils/popups/masterAgreementRule";
import { buttonTitle } from "../../Constants/ButtonTitles";
import CommonPopUp from "../../utils/Common/CommonPopUp";
import AddCondition from "../../utils/Common/AddCondition";
import ChildCondition from "../../utils/Common/ChildCondition";
import AddProductComp from "./FormBuilder/AddProductComp";
import { addProduct } from "../../utils/typeScript";

const MasterAgreement = () => {
  const { modal, updateModal, closeModal } = useModal();
  const [currentTab, setCurrentTab] = useState<number>(0);

  const handleTab = (ind: number) => {
    setCurrentTab(ind);
  };

  const approvedTableData = {
    theading: [
      "Master Agreement ID",
      "Bank Name",
      "Sanctioned Limit",
      "Utilized Limit",
      "View Masteragreement"
    ],
    tData: [
      {
        id: "a34d654df6ad",
        bankName: "State Bank of India",
        sanctionedLimit: 100000,
        utilizedLimit: 60000,
        viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />
      },
      {
        id: "a34d654df6ad",
        bankName: "State Bank of India",
        sanctionedLimit: 200000,
        utilizedLimit: 60000,
        viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />
      },
      {
        id: "a34d654df6ad",
        bankName: "State Bank of India",
        sanctionedLimit: 100000,
        utilizedLimit: 60000,
        viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />
      }
    ]
  };

  const pendingTableData = {
    theading: [
      "Master Agreement ID",
      "Bank Name",
      "Sanctioned Limit",
      "View Masteragreement"
    ],
    tData: [
      {
        id: "a34d654df6ad",
        bankName: "State Bank of India",
        sanctionedLimit: 100000,
        viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />
      },
      {
        id: "a34d654df6ad",
        bankName: "State Bank of India",
        sanctionedLimit: 200000,
        viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />
      },
      {
        id: "a34d654df6ad",
        bankName: "State Bank of India",
        sanctionedLimit: 300000,
        viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />
      }
    ]
  };

  const rejectedTableData = {
    theading: [
      "Master Agreement ID",
      "Bank Name",
      "Sanctioned Limit",
      "View Masteragreement"
    ],
    tData: [
      {
        id: "a34d654df6ad",
        bankName: "State Bank of India 1",
        sanctionedLimit: 100000,
        viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />
      },
      {
        id: "a34d654df6ad",
        bankName: "State Bank of India 2",
        sanctionedLimit: 200000,
        viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />
      },
      {
        id: "a34d654df6ad",
        bankName: "State Bank of India 3",
        sanctionedLimit: 100000,
        viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />
      }
    ]
  };

  return (
    <main className="flex-col px-4 overflow-y-auto">
      <h3 className="text-primary font-semibold lg:text-2xl">Master Agreement</h3>
      <Button callBack={() => updateModal('showCreateMasterAgreement')} title="Create Master Agreement" />
      <div className="px-4 flex gap-3 flex-wrap items-center justify-end py-3">
        {buttonTitle?.map((title: string, ind: number) => {
          return (
            <span
              key={ind}
              className={`bg-bgColor cursor-pointer shadow-md rounded-md px-10 py-1 ${currentTab === ind ? " border-b-2 border-primary" : ""
                }`}
              onClick={() => handleTab(ind)}
            >
              <span className={`text-primary font-semibold text-base`}>{title}</span>
            </span>
          );
        })}
      </div>

      <div className="px-4">
        {currentTab === 0 && <Approved theading={approvedTableData.theading} tData={approvedTableData.tData} show={false} />}
        {currentTab === 1 && <Rejected theading={rejectedTableData.theading} tData={rejectedTableData.tData} show={false} />}
        {currentTab === 2 && <Pending theading={pendingTableData.theading} tData={pendingTableData.tData} show={false} />}
      </div>
      {modal.state === "showCreateMasterAgreement" && <MasterAgreementRule role="nbfc" updateModal={updateModal} closeModal={closeModal} />}
      {modal.state === "Show Add Condition" && (
        <CommonPopUp
          title="Add condition for parameter"
          closeModal={() => {
            updateModal("showCreateMasterAgreement");
          }}
          component={<AddCondition role="nbfc" updateModal={updateModal} modal={modal} />}
        />
      )}
      {modal.state === "Add Condition" && (
        <CommonPopUp
          title="Add If condition"
          closeModal={() => {
            updateModal("showCreateMasterAgreement");
          }}
          component={<ChildCondition role="nbfc" updateModal={updateModal} modal={modal} parentCondition={[]} label={undefined} />}
        />
      )}
      {modal.state === "Show Parent Condition" && (
        <CommonPopUp
          title="Parent Conditions"
          closeModal={() => {
            updateModal("showCreateMasterAgreement");
          }}
          component={<AddCondition role="nbfc" updateModal={updateModal} modal={modal} />}
        />
      )}
      {(modal.state === "Add Product" || modal.state === "View Product Rule") && (
        <CommonPopUp
          title="Add Product"
          component={<AddProductComp editData={modal.data as addProduct} updateModal={updateModal} />}
          closeModal={() => {
            updateModal("showCreateMasterAgreement");
          }}
        />
      )}
    </main>
  );
};

export default MasterAgreement;
