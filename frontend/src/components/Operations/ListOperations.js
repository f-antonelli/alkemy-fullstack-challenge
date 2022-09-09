import { useOperations } from '../../hooks/useOperations'

import Operation from './Operation'

const ListOperations = () => {
  const { operations } = useOperations()

  return (
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='py-3 px-6'>
              CONCEPT
            </th>
            <th scope='col' className='py-3 px-6'>
              AMOUNT
            </th>
            <th scope='col' className='py-3 px-6'>
              TYPE
            </th>
            <th scope='col' className='py-3 px-6'>
              DATE
            </th>
            <th scope='col' className='py-3 px-6' />
            <th scope='col' className='py-3 px-6' />
          </tr>
        </thead>
        <tbody>
          {operations.map((op) => (
            <Operation key={op.id} values={op} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListOperations
