import { useRef } from "react"
import { HiMiniXMark } from "react-icons/hi2"
import Button from "../Form-utils/Button"
import { ModalProp } from "../typeScript"

const CommonPopUp = ({ title, closeModal, component }: ModalProp) => {
    const modalRef = useRef<HTMLDivElement>(null)
    return (
        <div onClick={(e) => {
            if (modalRef?.current === e.target) {
                closeModal()
            }
        }
        } ref={modalRef} className="overflow-y-auto flex bg-black inset-0 bg-opacity-60 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center item-center w-full md:inset-0 h-[calc(100%)]">
            <div className="relative p-4 w-full max-w-4xl max-h-full">
                {/* Modal content */}
                <div className="relative bg-whiteColor rounded-lg shadow">
                    {/* Modal header */}
                    <div className="flex items-center justify-between py-3 px-4 md:px-5 border-b rounded-t ">
                        <h3 className="md:text-xl font-semibold text-primary ">
                            {title}
                        </h3>
                        <button
                            onClick={() => closeModal()}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:text-white"
                            data-modal-hide="default-modal"
                        >
                            <HiMiniXMark color="#283943" size={30} />
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="pt-4 md:py-5 space-y-4 flex-col items-center justify-center px-4">
                        {
                            component
                        }
                        {
                            title === "Compliance Check" && <div className="flex items-center justify-end">
                                <Button callBack={() => true} title="Submit" />
                            </div>
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CommonPopUp