import { useForm } from 'react-hook-form';
import Button from "../Form-utils/Button";

const AddPayment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="flex items-center justify-center">
            <form className="w-full max-w-lg py-3 px-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-primary text-sm font-bold mb-2"
                            htmlFor="paymentDate"
                        >
                            Date of Payment
                        </label>
                        <input
                            className={`appearance-none block w-full text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor ${errors.paymentDate ? 'border-red-500' : ''
                                }`}
                            type="date"
                            {...register('paymentDate', { required: true })}
                        />
                        {errors.paymentDate && <p className="text-red-500 text-xs italic">Date of Payment is required.</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-primary text-sm font-bold mb-2"
                            htmlFor="utrNumber"
                        >
                            UTR Number
                        </label>
                        <input
                            className={`appearance-none block w-full text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor ${errors.utrNumber ? 'border-red-500' : ''
                                }`}
                            type="number"
                            {...register('utrNumber', { required: true })}
                        />
                        {errors.utrNumber && <p className="text-red-500 text-xs italic">UTR Number is required.</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-primary text-sm font-bold mb-2"
                            htmlFor="amount"
                        >
                            Amount
                        </label>
                        <input
                            className="appearance-none block w-full text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor"
                            type="number"
                            disabled
                            defaultValue="360000"
                            {...register('amount', { required: true })}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <Button title="Submit" callBack={() => true} />
                </div>
            </form>
        </div>
    );
};

export default AddPayment;
