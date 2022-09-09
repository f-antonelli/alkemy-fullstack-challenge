import axios from 'axios'

export const deleteOperation = async (id) => {
  const apiURL = `http://localhost:3001/api/operations/${id}`

  return axios
    .delete(apiURL)
    .catch(function (error) {
      console.log(error)
    })
}

export default deleteOperation
