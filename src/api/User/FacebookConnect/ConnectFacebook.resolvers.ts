import { Resolvers } from '../../../types/resolvers'
import { MutationConnectFacebookArgs, FacebookConnectPayload } from 'generated/graphql'

import User from '../../../entities/User'
import createJWT from '../../../utils/createJWT'

const resolvers: Resolvers = {
  Mutation: {
    ConnectFacebook: async (
      _,
      args: MutationConnectFacebookArgs,
    ): Promise<FacebookConnectPayload> => {
      const { facebookID } = args
      try {
        const existingUser = await User.findOne({ facebookID })
        if (existingUser) {
          return {
            ok: true,
            error: null,
            token: createJWT(existingUser.id),
          }
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        }
      }

      try {
        // create new user
        const newUser = await User.create({
          ...args,
          profilePhoto: `http://graph.facebook.com/${facebookID}/picture?type=square`,
        }).save()

        return {
          ok: true,
          error: null,
          token: createJWT(newUser.id),
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        }
      }
    },
  },
}

export default resolvers
