import express from 'express'
import morgan from 'morgan'
import { sequelize } from './db/database.js'
import operationsRoutes from './routes/operations.routes.js'

const PORT = 3001

const app = express()

//  MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  next()
})

//  ROUTES
app.use('/api/operations', operationsRoutes)

const main = async () => {
  try {
    await sequelize.sync({ force: false })
    app.listen(PORT)
    console.log('Listening on port', PORT)
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

main()
