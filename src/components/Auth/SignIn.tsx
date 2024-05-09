import React from 'react';
import { useForm } from 'react-hook-form';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

type FormData = {
    username: string;
    password: string;
};

type setFormState = {
    setFormState: React.Dispatch<React.SetStateAction<string>>
}

const SignIn = ({ setFormState }: setFormState) => {
    const { register, handleSubmit, reset } = useForm<FormData>();

    const [showPassword, setShowPassword] = React.useState(true);

    const navigate = useNavigate()

    const onSubmit = (data: FormData) => {
        if (data?.username === 'nbfc' && data?.password === '123456') {
            navigate('nbfc')
        } else if (data?.username === 'admin' && data?.password === '123456') {
            navigate('admin')
        } else if (data?.username === 'Commercial Bank' && data?.password === '123456') {
            navigate('commericalbank')
        }
        reset()
    };

    return (
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0 flex-col items-center justify-center">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-primary">
                Sign In
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-5 sm:mt-8">
                <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">

                    <div className="relative w-full rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none">
                        <input
                            type="text"
                            id="username"
                            {...register('username', { required: true })}
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                            placeholder=" "
                            required
                        />

                        <label
                            htmlFor="username"
                            className="absolute text-sm bg-gray-100 rounded-md text-primary  duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            Username or Email
                        </label>
                    </div>

                    <div className="relative w-full rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none">
                        <input
                            type={showPassword ? "text" : 'password'}
                            id="password"
                            {...register('password', { required: true })}
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                            placeholder=" "
                            required
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            {showPassword ? <HiEyeSlash size={20} onClick={() => setShowPassword(false)} /> : <HiEye size={20} onClick={() => setShowPassword(true)} />}
                        </div>
                        <label
                            htmlFor="password"
                            className="absolute text-sm bg-gray-100 rounded-md text-primary  duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            Password
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                        <button type="submit" className="flex items-center justify-center bg-primary px-20 py-2 rounded-md text-whiteColor shadow-lg">
                            Sign In
                        </button>
                    </div>
                    <div className='text-center py-3 text-sm text-Secondary__Color font-semibold rounded-b-xl shadow-outer'>
                        Don't have an account? <span onClick={() => setFormState('register')} className="font-semibold text-primary cursor-pointer">Sign Up</span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
