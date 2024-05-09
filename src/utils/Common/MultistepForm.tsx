import { useState } from "react"
import Button from "../Form-utils/Button"

const MultistepForm = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const handleNext = () => {
        setCurrentPage((prevPage: number) => prevPage + 1)
    }
    const handlePrev = () => {
        setCurrentPage((prevPage: number) => prevPage - 1)
    }
    return (
        <>
            <div className=" mx-auto px-4 mb-6">
                <div>
                    {
                        currentPage === 1 && <form className="w-full py-3">
                            <h3 className="text-primary font-semibold lg:text-xl pb-3">Parameter Managment Information</h3>
                            <div className=" flex justify-between w-full items-center">
                                <label
                                    className="block tracking-wide text-primary text-base font-semibold flex-1"
                                >
                                    Sanctioned Limit <span className="text-sm">(In Rupees)</span>
                                </label>
                                <input
                                    className="appearance-none block w-full flex-1  text-primary border rounded py-2 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor"
                                    type="number"
                                />
                            </div>
                            <div className=" flex justify-between w-full items-center">
                                <label
                                    className="block tracking-wide text-primary text-base font-semibold flex-1"
                                >
                                    Intrest rate charged by Commercial Bank <span className="text-sm">(In %)</span>
                                </label>
                                <input
                                    className="appearance-none block w-full flex-1  text-primary border rounded py-2 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor"
                                    type="number"
                                />
                            </div>
                            <div className=" flex justify-between w-full items-center">
                                <label
                                    className="block tracking-wide text-primary text-base font-semibold flex-1"
                                >
                                    Management fees charged by NBFC <span className="text-sm">(In %)</span>
                                </label>
                                <input
                                    className="appearance-none block w-full flex-1  text-primary border rounded py-2 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor"
                                    type="number"
                                />
                            </div>
                            <div className=" flex justify-between w-full items-center">
                                <label
                                    className="block tracking-wide text-primary text-base font-semibold flex-1"
                                >
                                    Penalty on delayed repayment charged by NBFC <span className="text-sm">(In %)</span>
                                </label>
                                <input
                                    className="appearance-none block w-full flex-1  text-primary border rounded py-2 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor"
                                    type="number"
                                />
                            </div>
                            <div className=" flex justify-between w-full items-center">
                                <label
                                    className="block tracking-wide text-primary text-base font-semibold flex-1"
                                >
                                    Penalty on delayed repayment charged by Commercial Bank <span className="text-sm">(In %)</span>
                                </label>
                                <input
                                    className="appearance-none block w-full flex-1  text-primary border rounded py-2 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor"
                                    type="number"
                                />
                            </div>
                            <div className=" flex justify-between w-full items-center">
                                <label
                                    className="block tracking-wide text-primary text-base font-semibold flex-1"
                                >
                                    Share of Commercial Bank in NPAs <span className="text-sm">(In %)</span>
                                </label>
                                <input
                                    className="appearance-none block w-full flex-1  text-primary border rounded py-2 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor"
                                    type="number"
                                />
                            </div>
                            <div className=" flex justify-between w-full items-center">
                                <label
                                    className="block tracking-wide text-primary text-base font-semibold flex-1"
                                >
                                    Share of NBFC in NPAs <span className="text-sm">(In %)</span>
                                </label>
                                <input
                                    className="appearance-none block w-full flex-1  text-primary border rounded py-2 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor"
                                    type="number"
                                />
                            </div>
                        </form>
                    }
                    {
                        currentPage === 2 &&
                        <form className="w-full py-3">
                            <h3 className="text-primary font-semibold lg:text-xl pb-3">Information Managment</h3>
                            <div className=" flex justify-between w-full items-center">
                                <label
                                    className="block tracking-wide text-primary text-base font-semibold flex-1"
                                >
                                    Sanctioned Limit <span className="text-sm">(In Rupees)</span>
                                </label>
                                <input
                                    className="appearance-none block w-full flex-1  text-primary border rounded py-2 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor"
                                    type="number"
                                />
                            </div>
                            <div className=" flex justify-between w-full items-center">
                                <label
                                    className="block tracking-wide text-primary text-base font-semibold flex-1"
                                >
                                    Intrest rate charged by Commercial Bank <span className="text-sm">(In %)</span>
                                </label>
                                <input
                                    className="appearance-none block w-full flex-1  text-primary border rounded py-2 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor"
                                    type="number"
                                />
                            </div>
                            <div className=" flex justify-between w-full items-center">
                                <label
                                    className="block tracking-wide text-primary text-base font-semibold flex-1"
                                >
                                    Management fees charged by NBFC <span className="text-sm">(In %)</span>
                                </label>
                                <input
                                    className="appearance-none block w-full flex-1  text-primary border rounded py-2 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor"
                                    type="number"
                                />
                            </div>
                            <div className=" flex justify-between w-full items-center">
                                <label
                                    className="block tracking-wide text-primary text-base font-semibold flex-1"
                                >
                                    Penalty on delayed repayment charged by NBFC <span className="text-sm">(In %)</span>
                                </label>
                                <input
                                    className="appearance-none block w-full flex-1  text-primary border rounded py-2 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor"
                                    type="number"
                                />
                            </div>
                            <div className=" flex justify-between w-full items-center">
                                <label
                                    className="block tracking-wide text-primary text-base font-semibold flex-1"
                                >
                                    Penalty on delayed repayment charged by Commercial Bank <span className="text-sm">(In %)</span>
                                </label>
                                <input
                                    className="appearance-none block w-full flex-1  text-primary border rounded py-2 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor"
                                    type="number"
                                />
                            </div>
                            <div className=" flex justify-between w-full items-center">
                                <label
                                    className="block tracking-wide text-primary text-base font-semibold flex-1"
                                >
                                    Share of Commercial Bank in NPAs <span className="text-sm">(In %)</span>
                                </label>
                                <input
                                    className="appearance-none block w-full flex-1  text-primary border rounded py-2 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor"
                                    type="number"
                                />
                            </div>
                            <div className=" flex justify-between w-full items-center">
                                <label
                                    className="block tracking-wide text-primary text-base font-semibold flex-1"
                                >
                                    Share of NBFC in NPAs <span className="text-sm">(In %)</span>
                                </label>
                                <input
                                    className="appearance-none block w-full flex-1  text-primary border rounded py-2 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor"
                                    type="number"
                                />
                            </div>
                        </form>
                    }
                </div>
            </div>

            <div className="flex items-center justify-end px-4">

                {
                    currentPage > 1 && <Button callBack={handlePrev} title="Previous" />
                }

                {
                    currentPage < 2 && <Button callBack={handleNext} title="Next" />
                }

            </div></>
    )
}

export default MultistepForm