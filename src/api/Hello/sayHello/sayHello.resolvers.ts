import { Greeting } from "types/graph"
import { QuerysayHelloArgs } from "generated/graphql"

const resolvers = {
  Query: {
    sayHello: (_, args: QuerysayHelloArgs): Greeting => { 
      const { name } = args
      return {
        text: `Hello ${name}, how are you?`,
        error: false 
      }}
  }
}

export default resolvers
