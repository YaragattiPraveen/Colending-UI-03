import { useState } from "react"
import useModal from "../../hooks/useModal"
import Button from "../../utils/Form-utils/Button"
import MasterAgreementRule from "../../utils/popups/masterAgreementRule"
import Approved from "../NBFC/Tabs/MasterAgreementTabs/Approved"
import Rejected from "../NBFC/Tabs/MasterAgreementTabs/Rejected"
import Pending from "../NBFC/Tabs/MasterAgreementTabs/Pending"
import { buttonTitle } from "../../Constants/ButtonTitles"
import CommonPopUp from "../../utils/Common/CommonPopUp"
import AddCondition from "../../utils/Common/AddCondition"
import ChildCondition from "../../utils/Common/ChildCondition"

const MasterAgreement = () => {
    const { modal, updateModal, closeModal } = useModal()
    const [currentTab, setCurrentTab] = useState<number>(0)
    const handleTab = (ind: number) => {
        setCurrentTab(ind)
    }

    // Approved table data 
    const approvedTableData = {
        theading: [
            "Master Agreement ID",
            "NBFC Name",
            "Sanctioned Limit",
            "Utilized Limit",
            "View Masteragreement"
        ],
        tData: [
            {
                id: "a34d654df6ad",
                bankName: "Bajaj Finance Limited",
                sanctionedLimit: 100000,
                utilizedLimit: 60000,
                viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />
            },
            {
                id: "a34d654df6ad",
                bankName: "Bajaj Finance Limited",
                sanctionedLimit: 200000,
                utilizedLimit: 60000,
                viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />
            },
            {
                id: "a34d654df6ad",
                bankName: "Bajaj Finance Limited",
                sanctionedLimit: 100000,
                utilizedLimit: 60000,
                viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />
            }
        ]
    }

    // Pending table data 
    const pendingTableData = {
        theading: [
            "Master Agreement ID",
            "NBFC Name",
            "Sanctioned Limit",
            "View Masteragreement",
            "Action"
        ],
        tData: [
            {
                id: "a34d654df6ad",
                bankName: "Bajaj Finance Limited",
                sanctionedLimit: 100000,
                viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />,
                actions: [
                    "Approve",
                    "Reject"
                ]
            },
            {
                id: "a34d654df6ad",
                bankName: "Bajaj Finance Limited",
                sanctionedLimit: 200000,
                viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />,
                actions: [
                    "Approve",
                    "Reject"
                ]
            },
            {
                id: "a34d654df6ad",
                bankName: "Bajaj Finance Limited",
                sanctionedLimit: 300000,
                viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />,
                actions: [
                    "Approve",
                    "Reject"
                ]
            }
        ]
    }

    // Reject table data
    const rejectedTableData = {
        theading: [
            "Master Agreement ID",
            "NBFC Name",
            "Sanctioned Limit",
            "View Masteragreement"
        ],
        tData: [
            {
                id: "a34d654df6ad",
                bankName: "Bajaj Finance Limited 1",
                sanctionedLimit: 100000,
                viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />
            },
            {
                id: "a34d654df6ad",
                bankName: "Bajaj Finance Limited 2",
                sanctionedLimit: 200000,
                viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />
            },
            {
                id: "a34d654df6ad",
                bankName: "Bajaj Finance Limited 3",
                sanctionedLimit: 100000,
                viewApplication: <Button callBack={() => updateModal("showCreateMasterAgreement")} title="view" />
            }
        ]
    }

    return (
        <main className="flex-col px-4 overflow-y-auto">
            <h3 className="text-primary font-semibold lg:text-2xl">Master Agreement</h3>

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
                {currentTab === 0 && <Approved theading={approvedTableData.theading} tData={approvedTableData.tData} />}
                {currentTab === 1 && <Rejected theading={rejectedTableData.theading} tData={rejectedTableData.tData} />}
                {currentTab === 2 && <Pending theading={pendingTableData.theading} tData={pendingTableData.tData} />}
            </div>
            {modal.state === "showCreateMasterAgreement" && <MasterAgreementRule updateModal={updateModal} closeModal={closeModal} />}
            {
                modal.state === "Show Add Condition" && <CommonPopUp title="Add condition for parameter" closeModal={() => {
                    updateModal("showCreateMasterAgreement")
                }} component={<AddCondition updateModal={updateModal} modal={modal} />} />
            }
            {modal.state === "Add Condition" && <CommonPopUp title="Add If condition" closeModal={() => {
                updateModal("showCreateMasterAgreement")
            }} component={<ChildCondition updateModal={updateModal} modal={modal} label={undefined} parentCondition={[]} />} />}

            {
                modal.state === "Show Parent Condition" && <CommonPopUp title="Parent Conditions" closeModal={() => {
                    updateModal("showCreateMasterAgreement")
                }} component={<AddCondition updateModal={updateModal} modal={modal} />} />
            }
        </main>
    )
}

export default MasterAgreement
