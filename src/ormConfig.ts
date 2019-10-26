import { ConnectionOptions } from 'typeorm'

const connectionOptions: ConnectionOptions = {
  type: "mysql",
  database: 'nuber',
  synchronize: true,
  logging: true,
  entities: [ 
    'entities/**/*.*',
  ],
  host: process.env.DB_ENDPOINT || 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME || 'roseline',
  password: process.env.DB_PASSWORD || '',
}

export default connectionOptions