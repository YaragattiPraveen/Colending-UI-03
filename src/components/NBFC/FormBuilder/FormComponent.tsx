import { useForm, SubmitHandler } from 'react-hook-form';
import { InputFields } from '../../../utils/typeScript';
import { useAppContext } from '../../../ContextApi/AppContext';
import useModal from '../../../hooks/useModal';
import ConfirmBox from '../../../utils/popups/ConfirmBox';

interface FormComponentProps {
    modelClose: () => void
    data?: {
        label?: string;
        type?: string;
        numberType?: string;
        options?: string[] | undefined;
    };
    title: string
}

const FormComponent: React.FC<FormComponentProps> = ({ data, modelClose, title }) => {
    const { setParameterFields, setInformationFields } = useAppContext();
    const { modal, closeModal, updateModal } = useModal()
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<InputFields>({
        defaultValues: {
            label: data?.label || '',
            type: data?.type || 'text',
            numberType: data?.numberType || 'integer',
            options: data?.options || [''],
        },
    });

    const optionInputs = watch('options') || [''];

    const handleAddOption = () => {
        setValue('options', [...optionInputs, '']);
    };
    const showConfirm = () => updateModal("showConfirmBox")


    const onSubmit: SubmitHandler<InputFields> = async (formData) => {

        if (title === 'Information') {
            await setInformationFields((prevFields) => {
                const existingIndex = prevFields.findIndex((field) => field.label === data?.label);

                if (existingIndex !== -1) {
                    const updatedFields = [...prevFields];
                    updatedFields[existingIndex] = { ...updatedFields[existingIndex], ...formData };
                    return updatedFields;
                } else {
                    return [...prevFields, { ...formData }];
                }
            });
        } else {
            await setParameterFields((prevFields) => {
                const existingIndex = prevFields.findIndex((field) => field.label === data?.label);

                if (existingIndex !== -1) {
                    const updatedFields = [...prevFields];
                    updatedFields[existingIndex] = { ...updatedFields[existingIndex], ...formData };
                    return updatedFields;
                } else {
                    return [...prevFields, { ...formData }];
                }
            });
        }

        modelClose();
    };



    return (
        <form className="w-full max-w-lg py-3 px-2" onSubmit={handleSubmit(onSubmit, showConfirm)}>
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-primary text-sm font-bold mb-2"
                        htmlFor="grid-label"
                    >
                        Label Name
                    </label>
                    <input
                        {...register('label', { required: true })}
                        value={watch('label')}
                        onChange={(e) => setValue('label', e.target.value)}
                        className={`appearance-none block w-full  text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor ${errors?.label ? 'border-red-500' : 'focus:border-borderColor'}`}
                        type="text"
                        required={true}
                    />
                </div>
            </div>
            {
                title === "Product" ? "" : <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-primary text-sm font-bold mb-2"
                            htmlFor="grid-type"
                        >
                            Select Type
                        </label>
                        <select
                            {...register('type', { required: true })}
                            value={watch('type')}
                            onChange={(e) => setValue('type', e.target.value)}
                            required={true}
                            className={`block appearance-none w-full  border text-primary py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-borderColor ${errors?.type ? 'border-red-500' : 'focus:border-borderColor'}`}
                            id="grid-type"
                        >
                            <option value="button">Button</option>
                            <option value="checkbox">Checkbox</option>
                            <option value="color">Color</option>
                            <option value="date">Date</option>
                            <option value="datetime-local">Datetime Local</option>
                            <option value="email">Email</option>
                            <option value="file">File</option>
                            <option value="hidden">Hidden</option>
                            <option value="image">Image</option>
                            <option value="month">Month</option>
                            <option value="number">Number</option>
                            <option value="password">Password</option>
                            <option value="radio">Radio</option>
                            <option value="range">Range</option>
                            <option value="reset">Reset</option>
                            <option value="search">Search</option>
                            <option value="submit">Submit</option>
                            <option value="tel">Telephone</option>
                            <option value="text">Text</option>
                            <option value="time">Time</option>
                            <option value="url">URL</option>
                            <option value="week">Week</option>
                            <option value="select">Select</option>
                        </select>
                    </div>
                </div>
            }

            {(watch('type') === 'number') && (
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-primary text-sm font-bold mb-2"
                            htmlFor="grid-numberType"
                        >
                            Select Number Type
                        </label>
                        <select
                            {...register('numberType', { required: true })}
                            value={watch('numberType')}
                            onChange={(e) => setValue('numberType', e.target.value)}
                            required={true}
                            className={`block appearance-none w-full  border text-primary py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-borderColor ${errors?.numberType ? 'border-red-500' : 'focus:border-borderColor'}`}
                            id="grid-numberType"
                        >
                            <option value="integer">Integer</option>
                            <option value="dcimal">Decimal</option>
                            <option value="percentage">Percentage</option>
                        </select>
                    </div>
                </div>
            )}
            {(watch('type') === 'select' || watch('type') === 'checkbox' || watch('type') === 'radio') && (
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-primary text-sm font-bold mb-2"
                            htmlFor="grid-options"
                        >
                            Options
                        </label>
                        {optionInputs.map((option, index) => (
                            <div key={index} className="flex items-center">
                                <input
                                    {...register(`options.${index}`, { required: true })}
                                    value={option}
                                    onChange={(e) => setValue(`options.${index}`, e.target.value)}
                                    className={`appearance-none block w-full text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor ${errors?.options?.[index] ? 'border-red-500' : 'focus:border-borderColor'}`}
                                    type="text"
                                    required={true}
                                />
                                {index === optionInputs.length - 1 && (
                                    <button
                                        onClick={handleAddOption}
                                        className="ml-2 px-2 py-1 text-whiteColor bg-primary rounded"
                                        type="button"
                                    >
                                        +
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <button
                onClick={() => updateModal('ShowConfirmBox')}
                className="w-full bg-primary border-primary border-4 text-whiteColor py-1 px-2 rounded"
                type="submit"
            >
                Add {title}
            </button>
            {
                modal?.state === "ShowConfirmBox" && <ConfirmBox closeModal={closeModal} />
            }
        </form>

    );
};

export default FormComponent;
