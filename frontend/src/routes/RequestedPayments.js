import Layout from "../components/Layout";
function RequestedPayments() {
  return (
    <Layout>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User id
                </th>
                <th scope="col" className="px-6 py-3">
                  User PolicyId
                </th>
                <th scope="col" className="px-6 py-3">
                  Bill Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount Requested
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">View Bill    </span>
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Pay    </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  user1
                </th>
                <td className="px-6 py-4">us146556</td>
                <td className="px-6 py-4">0x91787878</td>
                <td className="px-6 py-4">40000</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#form1"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View Bill
                  </a>
                </td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#form1"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Pay
                  </a>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
        </div>
    </Layout>
  );
}

export default RequestedPayments;
