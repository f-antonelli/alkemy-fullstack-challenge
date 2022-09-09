import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import deleteOperation from '../../services/deleteOperation'

const Operation = ({ values }) => {
  const { concept, amount, type, createdAt, id } = values
  const [updateValue, setUpdateValue] = useState(false)
  const { input, handleChange, handleSubmitPut } = useForm({
    concept: '',
    amount: ''
  })

  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <th
        scope='row'
        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
      >
        {updateValue
          ? (
            <input
              type='text'
              onChange={handleChange}
              name='concept'
              value={input.concept}
              placeholder='Change concept'
              className='text-black'
            />
            )
          : (
              concept
            )}
      </th>
      <td className='py-4 px-6'>
        {updateValue
          ? (
            <input
              type='text'
              name='amount'
              onChange={handleChange}
              value={input.amount}
              placeholder='Change amount'
              className='text-black'
            />
            )
          : (
              '$' + amount
            )}
      </td>

      <td className='py-4 px-6'>{type.toUpperCase()}</td>
      <td className='py-4 px-6'>{createdAt}</td>
      <td className='py-4 px-6'>
        {updateValue
          ? (
            <button
              className='focus:outline-none text-white bg-green-800 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5'
              onClick={(e) => {
                handleSubmitPut(e, id)
                setUpdateValue(false)
              }}
            >
              Save
            </button>
            )
          : (
            <button
              className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5'
              onClick={() => setUpdateValue(true)}
            >
              Edit
            </button>
            )}
      </td>
      <td className='py-4 px-6'>
        <button
          className='focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5'
          onClick={() => deleteOperation(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Operation
