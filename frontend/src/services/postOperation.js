import axios from 'axios'

const apiResponse = (apiResponse) => {
  const { data = [] } = apiResponse

  return data.message
}

const postOperation = (data) => {
  const apiURL = 'http://localhost:3001/api/operations'

  data.amount = +data.amount

  return axios
    .post(apiURL, data)
    .catch(function (error) {
      console.log(error)
    })
    .then(apiResponse)
}

export default postOperation
