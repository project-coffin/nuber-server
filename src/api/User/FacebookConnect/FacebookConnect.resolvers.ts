import { Resolvers } from 'types/resolvers'
import { MutationFacebookConnectArgs, FacebookConnectPayload } from 'generated/graphql'
import User from 'entities/User'

const resolvers: Resolvers = {
  mutation: {
    FacebookConnect: async (
      _,
      args: MutationFacebookConnectArgs,
    ): Promise<FacebookConnectPayload> => {
      const { facebookID } = args
      try {
        const existingUser = await User.findOne({ facebookID })
        if (existingUser) {
          return {
            responseStatus: true,
            error: null,
            token: 'coming soon',
          }
        }
      } catch (error) {
        return {
          responseStatus: false,
          error: error.message,
          token: null,
        }
      }

      try {
        // create new user
        await User.create({
          ...args,
          profilePhoto: `http://graph.facebook.com/${facebookID}/picture?type=square`,
        }).save()

        return {
          responseStatus: true,
          error: null,
          token: 'coming soon',
        }
      } catch (error) {
        return {
          responseStatus: false,
          error: error.message,
          token: null,
        }
      }
    },
  },
}

export default resolvers
