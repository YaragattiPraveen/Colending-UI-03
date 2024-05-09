import { inputFieldsProp } from "../typeScript"

const SelectBox = (inputField: inputFieldsProp) => {
    const options = inputField?.inputField?.options
    return (
        <div className="w-full">
            <select
                name="type"
                disabled={inputField?.disable}
                className="block appearance-none w-full  border text-primary py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-borderColor"
                id="grid-type"
            >
                {
                    options && options?.map((value: string, ind: number) => {
                        return <option key={ind} value={value.toLowerCase()}>{value}</option>
                    })
                }
            </select>
        </div>
    )
}

export default SelectBox