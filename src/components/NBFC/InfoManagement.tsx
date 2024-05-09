import { useAppContext } from "../../ContextApi/AppContext";
import useModal from "../../hooks/useModal"
import Table from "../../utils/Common/FormTable";
import Button from "../../utils/Form-utils/Button"
import AddFields from "../../utils/popups/addFields";

const InfoManagement = () => {
    const { modal, updateModal, closeModal } = useModal()
    const { informationFields } = useAppContext()
    const tableData = {
        titles: ["Label Name", "Information field TYPE", "View", "Edit", "Delete"],
        dataFields: informationFields,
        title: "Information"
    }
    return (
        <main className="flex-col px-4 overflow-y-auto">
            <h3 className="text-primary font-semibold lg:text-2xl pb-3">Information Management</h3>

            <Button callBack={() => updateModal("showAddModal")} title="Add Information" />

            <Table tableData={tableData} />
            {
                modal?.state === "showAddModal" && <AddFields closeModal={closeModal} title="Information" />
            }
        </main>

    );
}

export default InfoManagement