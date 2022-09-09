import { useEffect, useState } from 'react'
import getOperations from '../services/getOperations'

export const useOperations = () => {
  const [operations, setOperations] = useState([])

  useEffect(() => {
    getOperations().then(data => setOperations(data))
  }, [setOperations])

  return {
    operations
  }
}
