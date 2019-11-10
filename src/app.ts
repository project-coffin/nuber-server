import cors from 'cors'
import { GraphQLServer } from 'graphql-yoga'
import helmet from 'helmet'
import logger from 'morgan'
import schema from './schema'
import decodeJWT from './utils/decodeJWT'
import { NextFunction, Response } from 'express'

class App {
  public app: GraphQLServer

  constructor() {
    this.app = new GraphQLServer({
      schema,
    })

    this.middlewares()
  }

  private middlewares = (): void => {
    this.app.express.use(cors()) // express: graphql-yoga의 서버 (django나 rails 같은 것)
    this.app.express.use(logger('dev'))
    this.app.express.use(helmet())
    this.app.express.use(this.jwtMiddleware)
  }

  // next ->  다음 미들웨어로 넘어간다.
  private jwtMiddleware = async (request, _: Response, next: NextFunction): Promise<void> => {
    const token = request.get('X-JWT') // X-JWT: header의 token값과 상응하는 키
    if (token) {
      const user = await decodeJWT(token) // emailSignUp에서 얻은 token
      request.user = user || undefined
    }

    next() // 로직이 끝나면 다음 middleware 실행
  }
}

export default new App().app
