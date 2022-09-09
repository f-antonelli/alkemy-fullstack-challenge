import axios from 'axios'

const updateOperation = async (data, id) => {
  const apiURL = `http://localhost:3001/api/operations/${id}`

  data.amount = +data.amount
  console.log('lo renderizo')
  return axios
    .put(apiURL, data)
    .catch(function (error) {
      console.log(error)
    })
}

export default updateOperation
