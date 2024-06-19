import { useForm } from "react-hook-form";
import Button from "../../../utils/Form-utils/Button";
import { useAppContext } from "../../../ContextApi/AppContext";
import { addProduct } from "../../../utils/typeScript";

type AddProductProp = {
    editData?: addProduct;
    updateModal: (state: string, val?: {} | undefined) => void;
};

const defaultValues: addProduct = {
    "Product ID": "",
    "Product Name": '',
    "Reference Product ID": '',
    "Sanctioned Limit": 0,
    "Bank Contribution": 0,
    "NBFC Contribution": 0,
    "Maximum Blended Rate": "%",
    "Bank Interest Rate": "%",
    "Management Fees": 0,
    "Cutoff Date": '',
    "Pay In Date": '',
    "Pay Out Date": '',
    "Interest Debit Date Bank": '',
    "Interest Debit Date NBFC": '',
    "Mode of Repayment": "",
    "Penalty Rate Bank": "%",
    "Penalty Rate NBFC": "%",
};

const AddProductComp = ({ updateModal, editData }: AddProductProp) => {
    const mergedValues = { ...defaultValues, ...editData };

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: mergedValues
    });

    const { setAddProduct, addProduct } = useAppContext();

    const onSubmit = (data: addProduct) => {
        setAddProduct([...addProduct, data]);
        updateModal("showCreateMasterAgreement");
        console.log(data);
    };

    const renderDayDropdown = (fieldName: any) => {
        const days = Array.from({ length: 31 }, (_, i) => i + 1);
        const isRepaymentMode = fieldName === "Mode of Repayment";

        return (
            <div className="relative flex items-center after:w-[8px] after:h-[8px] after:border-black/70 after:border-b after:border-r after:transform after:rotate-45 after:absolute after:right-3">
                <select
                    className="appearance-none block w-full text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor focus:border-borderColor"
                    {...register(fieldName, { required: true })}
                >
                    {isRepaymentMode ? (
                        <>
                            <option value="EMI">EMI</option>
                            <option value="Interest: Monthly; Principal: Bullet">Interest: Monthly; Principal: Bullet</option>
                            <option value="Bullet Repayment">Bullet Repayment</option>
                        </>
                    ) : (
                        <>
                            <option value="">Select day</option>
                            {days.map(day => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </>
                    )}
                </select>
            </div>
        );
    };

    const fields = [
        { label: "Product ID", type: "text" },
        { label: "Product Name", type: "text" },
        { label: "Reference Product ID", type: "text" },
        { label: "Sanctioned Limit", type: "number" },
        { label: "Bank Contribution", type: "number" },
        { label: "NBFC Contribution", type: "number" },
        { label: "Maximum Blended Rate", type: "number", placeholder: "In %" },
        { label: "Bank Interest Rate", type: "number", placeholder: "In %" },
        { label: "Management Fees", type: "number" },
        { label: "Cutoff Date", type: "dropdown" },
        { label: "Pay In Date", type: "dropdown" },
        { label: "Pay Out Date", type: "dropdown" },
        { label: "Interest Debit Date Bank", type: "dropdown" },
        { label: "Interest Debit Date NBFC", type: "dropdown" },
        { label: "Mode of Repayment", type: "dropdown" },
        { label: "Penalty Rate Bank", type: "number", placeholder: "In %" },
        { label: "Penalty Rate NBFC", type: "number", placeholder: "In %" },
    ];

    return (
        <div className="overflow-y-scroll h-[60vh]">
            <form className="w-full py-3" onSubmit={handleSubmit(onSubmit)}>
                <table className="min-w-full text-start bg-white">
                    <thead className="text-xs text-start text-whiteColor bg-primary uppercase z-40">
                        <tr>
                            <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Label Name</th>
                            <th className="sticky top-0 text-left bg-primary py-3 px-3 border-b">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fields.map((field, index) => (
                            <tr key={index} className="border-b capitalize text-sm hover:bg-gray-50">
                                <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                                    {field.label}
                                </td>
                                <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                                    {field.type === 'dropdown' ? (
                                        renderDayDropdown(field.label)
                                    ) : (
                                        <input
                                            className="appearance-none block w-full text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor focus:border-borderColor"
                                            placeholder={field.placeholder}
                                            type={field.type}
                                            {...register(field.label as keyof addProduct, { required: true })}
                                        />
                                    )}
                                    {errors[field.label as keyof addProduct] && (
                                        <span className="text-red-500 text-xs">This field is required</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex items-center justify-end">
                    <Button callBack={handleSubmit(onSubmit)} title="Submit" />
                </div>
            </form>
        </div>
    );
};

export default AddProductComp;
