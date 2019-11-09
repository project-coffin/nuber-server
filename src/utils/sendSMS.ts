// TODO: replace twilio to facebook account kit
import Twilio from 'twilio'

const twilioClient = new Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

const sendSMS = (to: string, body: string) => {
  return twilioClient.messages.create({
    body,
    to, // phoneNumber
    from: process.env.TIWLIO_PHONE_NUMBER,
  })
}

export const sendVerificationSMS = (to: string, key: string) =>
  sendSMS(to, `Your verification key is ${key}`)
