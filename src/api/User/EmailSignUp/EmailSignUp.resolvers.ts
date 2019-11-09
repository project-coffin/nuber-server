import { Resolvers } from '../../../types/resolvers'
import { EmailSignUpPayload, MutationEmailSignUpArgs } from 'generated/graphql'
import User from '../../../entities/User'

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
          await User.create({ ...args }).save()
          return {
            ok: true,
            error: null,
            token: 'coming soon',
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
