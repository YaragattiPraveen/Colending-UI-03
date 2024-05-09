import { useAppContext } from "../../ContextApi/AppContext"
import useModal from "../../hooks/useModal"
import Table from "../../utils/Common/FormTable";
import Button from "../../utils/Form-utils/Button"
import AddFields from "../../utils/popups/addFields"

const ProductManagement = () => {
  const { parameterFields } = useAppContext()
  const { modal, updateModal, closeModal } = useModal()
  console.log(parameterFields)

  const tableData = {
    titles: ["Product Name", "Edit", "Delete"],
    dataFields: parameterFields,
    title: "Product"
  }
  return (
    <main className="flex-col px-4 overflow-y-auto">
      <h3 className="text-primary font-semibold lg:text-2xl pb-3">Product Management</h3>
      <Button callBack={() => updateModal("showAddModal")} title="Add Product" />
      <Table tableData={tableData} />
      {
        modal?.state === "showAddModal" && <AddFields closeModal={closeModal} title="Product" />
      }
    </main>
  )
}

export default ProductManagement