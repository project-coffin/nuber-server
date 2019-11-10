import Twilio from 'twilio'

const twilioClient = Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

export const sendSMS = (to: string, body: string) => {
  return twilioClient.messages.create({
    body,
    to, // phoneNumber
    from: process.env.TIWLIO_PHONE_NUMBER,
  })
}

export const sendVerificationSMS = (to: string, key: string) =>
  sendSMS(to, `TEST: NUBER 인증 번호는 ${key}입니다.`)
