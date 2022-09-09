import { useState } from 'react'
import postOperation from '../services/postOperation'
import updateOperation from '../services/updateOperation'

export const useForm = (initialState = '') => {
  const [input, setInput] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target

    setInput((old) => ({
      ...old,
      [name]: value
    }))
  }

  const handleSubmitPost = (e) => {
    e.preventDefault()

    postOperation(input)

    reset()
  }

  const handleSubmitPut = (e, id) => {
    e.preventDefault()

    updateOperation(input, id)
  }

  const reset = () => {
    setInput(initialState)
  }

  return { input, handleChange, reset, handleSubmitPost, handleSubmitPut }
}
