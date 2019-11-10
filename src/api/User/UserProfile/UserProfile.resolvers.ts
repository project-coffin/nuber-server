import { Resolvers } from '../../../types/resolvers'

const resolvers: Resolvers = {
  Query: {
    UserProfile: async (_, __, { request }) => {
      const { user } = request

      return {
        ok: true,
        user,
        error: null,
      }
    },
  },
}

export default resolvers
