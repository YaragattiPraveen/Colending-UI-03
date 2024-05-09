import React, { useRef, MouseEvent } from "react";
import FormComponent from "../../components/NBFC/FormBuilder/FormComponent";
import { HiMiniXMark } from "react-icons/hi2";
import { AddFieldsProps } from "../typeScript";

const AddFields: React.FC<AddFieldsProps> = ({ data, title = "", closeModal }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClose = (e: MouseEvent<HTMLDivElement>) => {
        if (modalRef.current === e.target) {
            closeModal();
        }
    };

    return (
        <div ref={modalRef} onClick={handleClose} className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-60 flex justify-center items-center">
            {/* Outer Modal */}
            <div className="absolute top-0 bottom-0 right-0 left-0" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* Inner Modal */}
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-whiteColor rounded-lg shadow">
                        {/* Modal header */}
                        <div className="flex items-center justify-between py-3 px-4 md:px-5 border-b rounded-t">
                            <h3 className="md:text-xl font-semibold text-primary">
                                {data ? `Edit ${title}` : `Add ${title}`}
                            </h3>
                            <button
                                onClick={closeModal}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:text-white"
                                data-modal-hide="default-modal"
                            >
                                <HiMiniXMark color="#283943" size={30} />
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="py-4 md:py-5 space-y-4 flex items-center justify-center">
                            <FormComponent title={title} modelClose={closeModal} data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFields;
