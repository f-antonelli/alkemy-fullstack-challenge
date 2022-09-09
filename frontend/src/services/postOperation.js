import axios from 'axios'

const postOperation = async (data) => {
  const apiURL = 'http://localhost:3001/api/operations'
  data.amount = +data.amount

  return axios
    .post(apiURL, data)
    .catch(function (error) {
      console.log(error)
    })
}

export default postOperation
