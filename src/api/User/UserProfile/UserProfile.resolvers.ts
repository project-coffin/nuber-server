import { Resolvers } from '../../../types/resolvers'
import privateResolver from '../../../utils/privateResolver'

const resolvers: Resolvers = {
  Query: {
    UserProfile: privateResolver(async (_, __, { request }) => {
      const { user } = request

      return {
        ok: true,
        error: null,
        user,
      }
    }),
  },
}

export default resolvers
