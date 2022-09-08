import { useState } from 'react'
import postOperation from '../services/postOperation'

export const useForm = (initialState = '') => {
  const [input, setInput] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target

    setInput((old) => ({
      ...old,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    postOperation(input)

    reset()
  }

  const reset = () => {
    setInput(initialState)
  }

  return { input, handleChange, reset, handleSubmit }
}
