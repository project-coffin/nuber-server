import { Resolvers } from '../../../types/resolvers'
import { MutationEmailSignInArgs, EmailSignInPayload } from 'generated/graphql'
import User from 'entities/User'

const resolvers: Resolvers = {
  Mutation: {
    EmailSigIn: async (_, args: MutationEmailSignInArgs): Promise<EmailSignInPayload> => {
      try {
        const { email, password } = args
        const user = await User.findOne({ email })

        if (!user) {
          return {
            verified: false,
            error: 'No user with that email',
            token: null,
          }
        }

        const isMatched = await user.isCorrectPassword(password)

        if (isMatched) {
          return {
            verified: true,
            error: null,
            token: 'coming soon',
          }
        } else {
          return {
            verified: false,
            error: 'Wrong password',
            token: null,
          }
        }
      } catch (error) {
        return {
          verified: false,
          error: error.message,
          token: null,
        }
      }
    },
  },
}

export default resolvers
