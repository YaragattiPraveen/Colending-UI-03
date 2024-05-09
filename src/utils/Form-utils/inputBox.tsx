import { inputFieldsProp } from "../typeScript"

const InputBox = (inputField: inputFieldsProp) => {
    return (
        <div className="w-full">
            <input
                name="label"
                disabled={inputField?.disable}
                className="appearance-none block w-full  text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor focus:border-borderColor"
                id="grid-label"
                type={inputField?.inputField?.type}
            />
        </div>
    )
}

export default InputBox