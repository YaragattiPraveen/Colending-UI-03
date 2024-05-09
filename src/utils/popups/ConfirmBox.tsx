import React, { useRef, MouseEvent } from "react";
import Button from "../Form-utils/Button";
import { HiMiniXMark } from "react-icons/hi2";

interface ConfirmBoxFieldProps {
    closeModal: () => void; // Make sure this matches the type from FormComponent
}

const ConfirmBox: React.FC<ConfirmBoxFieldProps> = ({ closeModal }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClose = (e: MouseEvent<HTMLDivElement>) => {
        if (modalRef.current === e.target) {
            closeModal();
        }
    };

    return (
        <div
            ref={modalRef}
            onClick={handleClose}
            className="overflow-y-auto flex bg-black inset-0 bg-opacity-60 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center w-full md:inset-0 h-[calc(100%)]"
        >
            <div className="relative p-4 w-full max-w-xl max-h-full ">
                {/* Modal content */}
                <div className="relative bg-whiteColor rounded-lg shadow">
                    {/* Modal header */}
                    <div className="flex items-center justify-between py-3 px-4 md:px-5 border-b rounded-t ">
                        <h3 className="text-xl font-semibold text-primary ">
                            Are you sure want to submit data?
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
                    <div className="text-center md:text-right mt-4 md:flex md:justify-end">

                        <Button callBack={() => {

                            closeModal();
                        }} title="Yes" />
                        <Button callBack={() => {
                            closeModal();
                        }} title="No" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ConfirmBox;
