import { Resolvers } from '../../../types/resolvers'
import { EmailSignUpPayload, MutationEmailSignUpArgs } from 'generated/graphql'
import User from '../../../entities/User'
import createJWT from '../../../utils/createJWT'

const resolvers: Resolvers = {
  Mutation: {
    EmailSignUp: async (_, args: MutationEmailSignUpArgs): Promise<EmailSignUpPayload> => {
      const { email } = args

      try {
        const existingUser = await User.findOne({ email })

        if (existingUser) {
          return {
            ok: false,
            error: 'You hava already signed up. Please Log in.',
            token: null,
          }
        } else {
          const newUser = await User.create({ ...args }).save()
          return {
            ok: true,
            error: null,
            token: createJWT(newUser.id),
          }
        }
      } catch (error) {
        return {
          ok: false,
          error: error.messages,
          token: null,
        }
      }
    },
  },
}

export default resolvers
