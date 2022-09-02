import { Operation } from '../models/Operation.js'

export const getOperations = async (req, res) => {
  try {
    const operations = await Operation.findAll()

    res.json(operations)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

export const createOperation = async (req, res) => {
  const { concept, amount, type } = req.body

  try {
    const newOperation = await Operation.create({
      concept,
      type,
      amount
    })

    return res.json(newOperation)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

export const getOperation = () => {
}

export const updateOperation = () => {
}

export const deleteOperation = () => {
}
