import Button from "../Form-utils/Button"

const Update_Profile = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-[550px]">
                <form>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="fName"
                                    className="block mb-2 font-Roboto font-medium text-primary"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="fName"
                                    id="fName"
                                    placeholder=""
                                    className="w-full py-2 px-3 shadow-sm bg-gray-50 border outline-primary border-gray-300 text-silver__color text-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="lName"
                                    className="block mb-2 font-Roboto font-medium text-primary"
                                >
                                    Mobile Number
                                </label>
                                <input
                                    type="text"
                                    name="lName"
                                    id="lName"
                                    placeholder=""
                                    className="w-full py-2 px-3 shadow-sm bg-gray-50 border outline-primary border-gray-300 text-silver__color text-sm rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="fName"
                                    className="block mb-2 font-Roboto font-medium text-primary"
                                >
                                    Old Password
                                </label>
                                <input
                                    type="text"
                                    name="fName"
                                    id="fName"
                                    placeholder=""
                                    className="w-full py-2 px-3 shadow-sm bg-gray-50 border outline-primary border-gray-300 text-silver__color text-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="lName"
                                    className="block mb-2 font-Roboto font-medium text-primary"
                                >
                                    New Password
                                </label>
                                <input
                                    type="text"
                                    name="lName"
                                    id="lName"
                                    placeholder=""
                                    className="w-full py-2 px-3 shadow-sm bg-gray-50 border outline-primary border-gray-300 text-silver__color text-sm rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="fName"
                                    className="block mb-2 font-Roboto font-medium text-primary"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="text"
                                    name="fName"
                                    id="fName"
                                    placeholder=""
                                    className="w-full py-2 px-3 shadow-sm bg-gray-50 border outline-primary border-gray-300 text-silver__color text-sm rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button callBack={() => true} title="Update Profile" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update_Profile