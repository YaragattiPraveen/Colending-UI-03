import { buttonProp } from "../typeScript"

const Button = ({ title, disabled = false, callBack }: buttonProp) => {
    return (
        <button onClick={callBack} disabled={disabled} className="bg-whiteColor md:w-auto w-[180px] my-3 p-1 shadow-md rounded-md flex items-center justify-center">
            <span className="text-sm w-full text-center uppercase px-3 xl:px-4 font-semibold bg-primary py-1.5 text-whiteColor rounded-md">{title}</span>
        </button>
    )
}

export default Button