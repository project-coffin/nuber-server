import { Resolvers } from '../../../types/resolvers'
import {
  MutationStartPhoneVerificationArgs,
  StartPhoneVerificationPayload,
} from 'generated/graphql'
import Verification from '../../../entities/Verification'
import { sendVerificationSMS } from '../../../utils/sendSMS'

const resolvers: Resolvers = {
  Mutation: {
    StartPhoneVerification: async (
      _,
      args: MutationStartPhoneVerificationArgs,
    ): Promise<StartPhoneVerificationPayload> => {
      const { phoneNumber } = args
      try {
        const exisitingVerififation = await Verification.findOne({ payload: phoneNumber })

        // 기존 인증은 지우고 새 인증으로 대체
        if (exisitingVerififation) {
          exisitingVerififation.remove()
        }

        const newVerification = await Verification.create({
          payload: phoneNumber,
          target: 'PHONE',
        }).save()

        await sendVerificationSMS(newVerification.payload, newVerification.key)

        return {
          ok: true,
          error: null,
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        }
      }
    },
  },
}

export default resolvers
