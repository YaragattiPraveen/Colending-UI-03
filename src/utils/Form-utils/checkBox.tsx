import { inputFieldsProp } from "../typeScript"

const CheckBox = (inputField: inputFieldsProp) => {
  const options = inputField?.inputField?.options
  return (
    <div className="w-full">
      {
        options && options?.map((value: string, ind: number) => {
          return <div key={ind} className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                defaultValue=""
                disabled={inputField?.disable}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"

              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium capitalize text-primary dark:text-primary"
            >
              {value}
            </label>
          </div>
        })
      }

    </div>
  )
}

export default CheckBox