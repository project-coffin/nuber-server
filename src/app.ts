import cors from 'cors'
import { GraphQLServer} from 'graphql-yoga'
import helmet from 'helmet'
import logger from "morgan"

class App {
  public app: GraphQLServer
  
  constructor(){
    this.app = new GraphQLServer({
      
    })
    this.middlewares()
  }

  private middlewares = (): void => {
    this.app.express.use(cors()) // express: graphql-yoga의 서버 (django나 rails 같은 것)
    this.app.express.use(logger('dev'))
    this.app.express.use(helmet()) 
  
  }
}

export default new App().app
