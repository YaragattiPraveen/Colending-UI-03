import { useState } from 'react'
import SignUp from '../../assets/login.svg'
import Signup from './Signup'
import SignIn from './SignIn'
const AuthForm = () => {
    const [formState, setFormState] = useState("login")
    return (
        <div>
            <div className="flex justify-center items-center w-full h-[100vh] bg-bgColor px-5 py-5">
                <div className="xl:max-w-7xl bg-white w-full rounded-md flex justify-between items-center px-5 xl:px-5 py-2.5">
                    <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
                        <img
                            src={SignUp}
                            alt="login"
                            className="h-[500px]"
                        />
                    </div>
                    {
                        formState === "login" ? <SignIn setFormState={setFormState} /> : <Signup setFormState={setFormState} />
                    }
                </div>
            </div>
        </div>
    )
}

export default AuthForm