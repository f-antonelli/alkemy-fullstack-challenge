import axios from 'axios'

const apiResponse = (apiResponse) => {
  const { data = [] } = apiResponse

  return data.message
}

const updateOperation = (data, id) => {
  const apiURL = `http://localhost:3001/api/operations/${id}`

  data.amount = +data.amount

  return axios
    .put(apiURL, data)
    .catch(function (error) {
      console.log(error)
    })
    .then(apiResponse)
}

export default updateOperation
