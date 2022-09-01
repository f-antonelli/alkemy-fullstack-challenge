import { Router } from 'express'
import {
  createOperation,
  deleteOperation,
  getOperation,
  getOperations,
  updateOperation
} from '../controllers/operations.controller.js'

const router = Router()

router.get('/', getOperations)
router.get('/:id', getOperation)

router.post('/', createOperation)

router.put('/:id', updateOperation)

router.delete('/:id', deleteOperation)

export default router
