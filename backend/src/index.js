import express from 'express'
import morgan from 'morgan'
import { sequelize } from './db/database.js'

const PORT = 3001

const app = express()
app.use(morgan('dev'))
app.use(express.json())

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
