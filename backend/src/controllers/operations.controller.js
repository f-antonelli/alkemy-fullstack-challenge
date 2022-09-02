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

export const getOperation = async (req, res) => {
  const { id } = req.params

  try {
    const operation = await Operation.findOne({
      where: {
        id
      }
    })
    res.json(operation)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

export const updateOperation = async (req, res) => {
  const { id } = req.params
  const { concept, amount } = req.body

  try {
    const operation = await Operation.findByPk(id)

    operation.concept = concept
    operation.amount = amount

    await operation.save()

    res.json(operation)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

export const deleteOperation = async (req, res) => {
  const { id } = req.params
  try {
    await Operation.destroy({
      where: {
        id
      }
    })

    return res.sendStatus(204)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
