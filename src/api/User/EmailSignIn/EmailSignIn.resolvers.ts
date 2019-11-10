import { Resolvers } from '../../../types/resolvers'
import { MutationEmailSignInArgs, EmailSignInPayload } from 'generated/graphql'
import User from '../../../entities/User'
import createJWT from '../../../utils/createJWT'

const resolvers: Resolvers = {
  Mutation: {
    EmailSignIn: async (_, args: MutationEmailSignInArgs): Promise<EmailSignInPayload> => {
      try {
        const { email, password } = args
        const user = await User.findOne({ email })

        if (!user) {
          return {
            ok: false,
            error: 'No user with that email',
            token: null,
          }
        }

        const isMatched = await user.isCorrectPassword(password)

        if (isMatched) {
          return {
            ok: true,
            error: null,
            token: createJWT(user.id),
          }
        } else {
          return {
            ok: false,
            error: 'Wrong password',
            token: null,
          }
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
