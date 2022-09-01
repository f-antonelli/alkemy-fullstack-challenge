import { DataTypes } from 'sequelize'
import { sequelize } from '../db/database.js'

export const Operation = sequelize.define('operations', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  concept: {
    type: DataTypes.STRING
  },
  amount: {
    type: DataTypes.INTEGER
  },
  type: {
    type: DataTypes.STRING
  }
})
