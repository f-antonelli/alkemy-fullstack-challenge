import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
  'alkemy-db',
  'postgres',
  'password',
  {
    host: 'localhost',
    dialect: 'postgres',
    port: '3002'
  }
)
