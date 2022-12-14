import ListOperations from '../../components/Operations/ListOperations'
import Form from '../../components/Form/Form'
import { useOperations } from '../../hooks/useOperations'

const Home = () => {
  const { operations } = useOperations()

  return (
    <div className='container m-auto text-white'>
      <h1 className='text-3xl font-bold p-4 border-b-2'>
        ALKEMY FULLSTACK CHALLENGE
      </h1>
      <Form />
      <h2 className='text-2xl font-bold py-4'>Last 10 Operations</h2>
      <ListOperations operations={operations} />
    </div>
  )
}

export default Home
