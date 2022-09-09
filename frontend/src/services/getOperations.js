import axios from 'axios'

const fromApiResponseToProducts = (apiResponse) => {
  const { data = [] } = apiResponse

  return data
}

export const getOperations = async () => {
  const apiURL = 'http://localhost:3001/api/operations'

  return await axios
    .get(apiURL)
    .catch(function (error) {
      console.log(error)
    })
    .then(fromApiResponseToProducts)
}

export default getOperations
