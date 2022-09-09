import axios from 'axios'

const fromApiResponseToProducts = (apiResponse) => {
  const { data = [] } = apiResponse

  return data
}

export const deleteOperation = (id) => {
  const apiURL = `http://localhost:3001/api/operations/${id}`

  return axios
    .delete(apiURL)
    .catch(function (error) {
      console.log(error)
    })
    .then(fromApiResponseToProducts)
}

export default deleteOperation
