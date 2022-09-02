const Operation = ({ values }) => {
  const { concept, amount, type, createdAt } = values
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <th
        scope='row'
        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
      >
        {concept}
      </th>
      <td className='py-4 px-6'>${amount}</td>
      <td className='py-4 px-6'>{type.toUpperCase()}</td>
      <td className='py-4 px-6'>{createdAt}</td>
      <td className='py-4 px-6'>
        <button
          className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5  '
        >
          Edit
        </button>
      </td>
      <td className='py-4 px-6'>
        <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5  '>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Operation
