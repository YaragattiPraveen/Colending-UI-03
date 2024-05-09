import React from 'react';
import { useForm } from 'react-hook-form';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { FormData, setFormState } from '../../utils/typeScript';



const Signup = ({ setFormState }: setFormState) => {
    const { register, handleSubmit, reset } = useForm<FormData>();

    const [showPassword, setShowPassword] = React.useState(true);

    const navigate = useNavigate()

    const onSubmit = (data: FormData) => {
        console.log(data)
        navigate("/")
        reset()
    };

    return (
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-primary">
                Create Account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-5 sm:mt-8">
                <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative w-full rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none">
                            <input
                                type="text"
                                {...register('fullName', { required: true })}
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-primary  focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                                required
                                id='fullName'
                            />
                            <label
                                htmlFor="fullName"
                                className="absolute text-sm bg-gray-100 rounded-md text-primary  duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                Full Name
                            </label>
                        </div>
                        <div className="relative w-full rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none">
                            <input
                                type="text"
                                {...register('username', { required: true })}
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-primary  focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                                required
                                id='Username'
                            />
                            <label
                                htmlFor="Username"
                                className="absolute text-sm bg-gray-100 rounded-md text-primary  duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                Username
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative w-full rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none">
                            <input
                                type={showPassword ? "text" : 'password'}
                                id="password"
                                {...register('password', { required: true })}
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
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
                        <div className="relative w-full rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none">
                            <input
                                type="text"
                                {...register('city', { required: true })}
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-primary  focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                                required
                                id='City'
                            />
                            <label
                                htmlFor="City"
                                className="absolute text-sm bg-gray-100 rounded-md text-primary  duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                City
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative w-full rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none">
                            <input
                                type="text"
                                {...register('state', { required: true })}
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-primary  focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                                required
                                id='State'
                            />
                            <label
                                htmlFor="State"
                                className="absolute text-sm bg-gray-100 rounded-md text-primary  duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                State
                            </label>
                        </div>
                        <div className="relative w-full rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none">
                            <input
                                type="number"
                                {...register('contactNumber', { required: true })}
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-primary  focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                                required
                                id='contactNumber'
                            />
                            <label
                                htmlFor="contactNumber"
                                className="absolute text-sm bg-gray-100 rounded-md text-primary  duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                Contact Number
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative w-full rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none">
                            <input
                                type="email"
                                {...register('emailAddress', { required: true })}
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-primary  focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                                required
                                id='Email'
                            />
                            <label
                                htmlFor="Email"
                                className="absolute text-sm bg-gray-100 rounded-md text-primary  duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                Email
                            </label>
                        </div>
                        <div className="relative w-full rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none">
                            <input
                                type="text"
                                {...register('website', { required: true })}
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-primary  focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                                required
                                id='websiteName'
                            />
                            <label
                                htmlFor="websiteName"
                                className="absolute text-sm bg-gray-100 rounded-md text-primary  duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                Website Name
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative w-full rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none">
                            <input
                                type="number"
                                {...register('ciNumber', { required: true })}
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-primary  focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                                required
                                id='ciNumber'
                            />
                            <label
                                htmlFor="ciNumber"
                                className="absolute text-sm bg-gray-100 rounded-md text-primary  duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                CI Number
                            </label>
                        </div>
                        <div className="relative w-full rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none">
                            <input
                                type="text"
                                {...register('licenseKey', { required: true })}
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-primary  focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                                required
                                id='licenseKey'
                            />
                            <label
                                htmlFor="licenseKey"
                                className="absolute text-sm bg-gray-100 rounded-md text-primary  duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                License Key
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative w-full rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none">
                            <input
                                type="text"
                                {...register('registeredOfficeAddress', { required: true })}
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-primary  focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                                required
                                id='registeredOfficeAddress'
                            />
                            <label
                                htmlFor="registeredOfficeAddress"
                                className="absolute text-sm bg-gray-100 rounded-md text-primary  duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                Registered Office Address
                            </label>
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                        <button type="submit" className="flex items-center justify-center bg-primary px-20 py-2 rounded-md text-whiteColor shadow-lg">
                            Sign Up
                        </button>
                    </div>
                    <div className='text-center py-3 text-sm text-Secondary__Color font-semibold rounded-b-xl shadow-outer'>
                        Already have an account? <span onClick={() => setFormState('login')} className="font-semibold text-primary cursor-pointer">Sign In</span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;
