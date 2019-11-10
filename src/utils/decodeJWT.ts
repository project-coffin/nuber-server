// import User from '../entities/User'
import jwt from 'jsonwebtoken'
import User from '../entities/User'

const decodeJWT = async (token: string): Promise<User | undefined> => {
  try {
    // sign up 할 때 얻은 token으로 가입한 유저가 맞는지 verify 한다.
    const decodedJWT: any = jwt.verify(token, process.env.JWT_SECRET_KEY as string)
    const { id } = decodedJWT
    const user = await User.findOne({ id })

    return user
  } catch (error) {
    return undefined
  }
}

export default decodeJWT
