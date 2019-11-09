import { Resolvers } from '../../../types/resolvers'
import {
  MutationCompletePhoneVerificationArgs,
  CompletePhoneVerificationPayload,
} from 'generated/graphql'
import Verification from '../../../entities/Verification'
import User from '../../../entities/User'

const resolvers: Resolvers = {
  Mutation: {
    CompletePhoneVerification: async (
      _,
      args: MutationCompletePhoneVerificationArgs,
    ): Promise<CompletePhoneVerificationPayload> => {
      const { phoneNumber, key } = args

      try {
        const verification = await Verification.findOne({
          payload: phoneNumber,
          key,
        })

        if (!verification) {
          return {
            ok: false,
            error: 'Verification key not valid',
            token: null,
          }
        } else {
          verification.verified = true
          verification.save()
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        }
      }

      try {
        const user = await User.findOne({
          phoneNumber,
        })

        if (user) {
          user.verfiedByPhoneNumber = true
          user.save()

          return {
            ok: true,
            error: null,
            token: 'coming soon',
          }
        } else {
          // phone number is verified, but the user is new person.
          return {
            ok: true,
            error: null,
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
