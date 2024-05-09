import Button from "../../utils/Form-utils/Button";
import AddFilds from "../../utils/popups/addFields";
import Table from "../../utils/Common/FormTable";
import useModal from "../../hooks/useModal";
import { useAppContext } from "../../ContextApi/AppContext";
const parameterManageMent = () => {
    const { parameterFields } = useAppContext()
    const { modal, updateModal, closeModal } = useModal()

    const tableData = {
        titles: ["Label Name", "Parameter Type", "View", "Edit", "Delete"],
        dataFields: parameterFields,
        title: "parameter"
    }

    return (
        <>
            <main className="flex-col px-4 overflow-y-auto">
                <h3 className="text-primary font-semibold lg:text-2xl pb-3">Parameter Management</h3>
                <Button callBack={() => updateModal("showAddModal")} title="Add Parameter" />
                <Table tableData={tableData} />
            </main>

            {
                modal?.state === "showAddModal" && <AddFilds closeModal={closeModal} title="Parameter" />
            }
        </>

    );
};

export default parameterManageMent;
