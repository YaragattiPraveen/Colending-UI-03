import Button from "./Button"

const UploadFile = () => {
    return (
        <div className=" mx-auto">
            <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
            >
                Upload file
            </label>
            <input
                className="appearance-none block w-full  text-primary border rounded py-3 my-2 px-4 leading-tight focus:outline-none focus:bg-whiteColor focus:border-borderColor"
                id="file_input"
                type="file"
            />
            <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
            >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
            <div className="flex items-end justify-end">
                <Button callBack={() => true} title="Submit" />
            </div>
        </div>

    )
}

export default UploadFile