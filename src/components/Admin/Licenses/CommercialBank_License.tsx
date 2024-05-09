const CommercialBank_License = () => {
  return (
    <>
      <form
        className="flex"
      >
        <div className="my-3 border shadow-lg bg-bgColor rounded-md">
          <input
            type="text"
            className=" outline-none p-2  rounded-md"
            placeholder="Enter user name"
            required
            aria-describedby="button-addon2"
          />
          <button className="bg-primary text-whiteColor py-2 px-2 rounded-tr-md rounded-br-md"
            type="submit"
            id="button-addon2"
          >
            Generate License Key
          </button>
        </div>
      </form>
      <div className="overflow-hidden shadow-lg rounded-md my-1">
        <table className="min-w-full text-left text-sm font-light table-auto">
          <thead className="text-xs text-medium bg-primary border-b uppercase text-whiteColor">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-medium font-Roboto text-left"
              >
                S.No
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-medium font-Roboto text-left"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-medium font-Roboto text-left"
              >
                License Key
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-medium font-Roboto text-left"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-medium font-Roboto text-left"
              >
                Created Date
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-medium font-Roboto text-left"
              >
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-300">
            <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
              <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                1
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                Commercial Bank - 1
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                cc3f9638-2b47-4c01-a3bd-dea3b7f7d433
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                Unassigned
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                01/06/23
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                Delete
              </td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
              <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                1
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                Commercial Bank - 2
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                cc3f9638-2b47-4c01-a3bd-dea3b7f7d433
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                Unassigned
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                01/06/23
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                Delete
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CommercialBank_License