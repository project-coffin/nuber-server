import { QuerysayHelloArgs, SayHelloPayload } from "generated/graphql"

const resolvers = {
  Query: {
    sayHello: (_, args: QuerysayHelloArgs): SayHelloPayload => { 
      const { name } = args
      return {
        text: `Hello ${name}, how are you?`,
        error: false 
      }}
  }
}

export default resolvers
