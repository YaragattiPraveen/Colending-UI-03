import useModal from "../../hooks/useModal"
import Button from "../Form-utils/Button"
import UserManagementPopUp from "../popups/UserManagementPopUp"
import CommonPopUp from "./CommonPopUp"
import Table from "./Table"

const UserManagement = () => {
    const { updateModal, closeModal, modal } = useModal()
    const tData = {
        tHeading: ["User Name", "Role", "Email Address", "Contact Number", "View/Edit", "Action"],
        data: [
            {
                username: "Ramesh",
                role: "Admin",
                email: "ramesh121@gmail.com",
                contactNumber: "9865235412",
                action: <Button callBack={() => updateModal("showUserModal")} title="View" />,
                status: <Button title="Inactive" callBack={() => true} />
            },
            {
                username: "Ramesh1",
                role: "Admin",
                email: "ramesh121@gmail.com",
                contactNumber: "9865235412",
                action: <Button callBack={() => updateModal("showUserModal")} title="View" />,
                status: <Button title="Inactive" callBack={() => true} />
            }
        ]
    }
    return (
        <>
            <main className="flex-col px-4 overflow-y-auto">
                <h3 className="text-primary font-semibold lg:text-2xl pb-3">User Management</h3>
                <Button callBack={() => updateModal("showUserModal")} title="Add User" />
                <Table theading={tData.tHeading} tData={tData.data} tname="User Management" />
            </main>
            {
                modal.state === "showUserModal" && <CommonPopUp title="User Management" component={<UserManagementPopUp />} closeModal={closeModal} />
            }
        </>
    )
}

export default UserManagement