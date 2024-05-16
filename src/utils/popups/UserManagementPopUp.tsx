import Button from "../Form-utils/Button";

const UserManagementPopUp = () => {
    return <form className="w-full py-3 px-2 mx-auto">
        <div className="flex gap-2">
            <div className="flex w-full flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-primary text-sm font-bold mb-2"
                        htmlFor="grid-label"
                    >
                        Username
                    </label>
                    <input
                        className={`appearance-none block w-full  text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor`}
                        type="text"
                        required={true}
                    />
                </div>
            </div>
            <div className="flex w-full flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-primary text-sm font-bold mb-2"
                        htmlFor="grid-label"
                    >
                        Email Address
                    </label>
                    <input
                        className={`appearance-none block w-full  text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor`}
                        type="email"
                        required={true}
                    />
                </div>
            </div>
        </div>
        <div className="flex gap-2">
            <div className="flex w-full flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-primary text-sm font-bold mb-2"
                        htmlFor="grid-label"
                    >
                        Role
                    </label>
                    <input
                        className={`appearance-none block w-full  text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor`}
                        type="text"
                        required={true}
                    />
                </div>
            </div>
            <div className="flex w-full flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-primary text-sm font-bold mb-2"
                        htmlFor="grid-label"
                    >
                        Contact Number
                    </label>
                    <input
                        className={`appearance-none block w-full  text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor`}
                        type="number"
                        required={true}
                    />
                </div>
            </div>
        </div>
        <div className="flex gap-2">
            <div className="flex w-full flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-primary text-sm font-bold mb-2"
                        htmlFor="grid-type"
                    >
                        Master Agreement
                    </label>
                    <select

                        required={true}
                        className={`block appearance-none w-full  border text-primary py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-borderColor `}
                        id="grid-type"
                    >
                        <option value="not-applicable">Not Applicable</option>
                        <option value="view-access">View Access</option>
                        <option value="full-access">Full Access</option>
                    </select>
                </div>
            </div>
            <div className="flex w-full flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-primary text-sm font-bold mb-2"
                        htmlFor="grid-type"
                    >
                        Disbursement
                    </label>
                    <select

                        required={true}
                        className={`block appearance-none w-full  border text-primary py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-borderColor `}
                        id="grid-type"
                    >
                        <option value="not-applicable">Not Applicable</option>
                        <option value="view-access">View Access</option>
                        <option value="full-access">Full Access</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="flex gap-2">
            <div className="flex w-full flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-primary text-sm font-bold mb-2"
                        htmlFor="grid-type"
                    >
                        Repayment
                    </label>
                    <select

                        required={true}
                        className={`block appearance-none w-full  border text-primary py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-borderColor `}
                        id="grid-type"
                    >
                        <option value="not-applicable">Not Applicable</option>
                        <option value="view-access">View Access</option>
                        <option value="full-access">Full Access</option>
                    </select>
                </div>
            </div>
            <div className="flex w-full flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-primary text-sm font-bold mb-2"
                        htmlFor="grid-type"
                    >
                        Management Fees
                    </label>
                    <select

                        required={true}
                        className={`block appearance-none w-full  border text-primary py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-borderColor `}
                        id="grid-type"
                    >
                        <option value="not-applicable">Not Applicable</option>
                        <option value="view-access">View Access</option>
                        <option value="full-access">Full Access</option>
                    </select>
                </div>
            </div>
        </div>


        <Button title="Submit" callBack={() => true} />
    </form>
}

export default UserManagementPopUp