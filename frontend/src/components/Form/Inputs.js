import { useForm } from '../../hooks/useForm'

const Inputs = () => {
  const { input, handleChange, handleSubmit } = useForm({
    concept: '',
    amount: '',
    type: 'entry'
  })
  const { concept, amount } = input

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <label
        className='block text-white text-sm font-bold mb-2'
        htmlFor='concept'
      >
        Enter a operation name
      </label>
      <input
        type='text'
        name='concept'
        className='shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight'
        onChange={handleChange}
        value={concept}
      />

      <label
        className='block text-white text-sm font-bold my-2'
        htmlFor='amount'
      >
        Enter value
      </label>
      <input
        type='number'
        name='amount'
        className='shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight'
        onChange={handleChange}
        value={amount}
      />

      <label
        className='block text-white text-sm font-bold my-2'
        htmlFor='type'
      >
        Enter operation type
      </label>
      <select
        name='type'
        className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight'
        onChange={handleChange}
      >
        <option value='entry'>ENTRY</option>
        <option value='egress'>EGRESS</option>
      </select>

      <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4'>
        SEND
      </button>
    </form>
  )
}

export default Inputs
