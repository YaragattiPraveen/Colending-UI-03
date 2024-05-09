import { inputFieldsProp } from "../typeScript"

const RadioButton = (inputField: inputFieldsProp) => {
  const options = inputField?.inputField?.options
  return (
    <div className="w-full">
      <div className="flex">
        {
          options && options?.map((value: string, ind: number) => {
            return <div key={ind} className="flex items-start mb-5 pr-3">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="radio"
                  name={inputField?.inputField?.label}
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
    </div>
  )
}

export default RadioButton