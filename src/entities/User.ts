import bcrypt from 'bcrypt'
import { IsEmail } from 'class-validator'
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'
import Chat from './Chat'
import Message from './Message'
import Ride from './Ride'
import Verification from './Verification'

const BCRYPT_TIMES = 10

@Entity() // Model
class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number

  @ManyToOne(type => Chat, chat => chat.participants)
  chat: Chat

  @OneToMany(type => Message, message => message.user)
  messages: Message[]

  @OneToMany(type => Verification, verification => verification.user)
  verifications: Verification[]

  @OneToMany(type => Ride, ride => ride.passenger)
  ridesAsPassenger: Ride[]

  @OneToMany(type => Ride, ride => ride.driver)
  ridesAsDriver: Ride[]

  @Column({ type: 'text', unique: true })
  @IsEmail()
  email: string

  @Column({ type: 'boolean', default: false })
  verifiedByEmail: boolean

  @Column({ type: 'text' })
  firstName: string

  @Column({ type: 'text' })
  lastName: string

  @Column({ type: 'int' })
  age: string

  @Column({ type: 'text' })
  password: string

  @Column({ type: 'text' })
  phoneNumber: string

  @Column({ type: 'boolean', default: false })
  verifiedByPhoneNumber: boolean

  @Column({ type: 'text' })
  profilePhoto: string

  @Column({ type: 'boolean', default: false })
  isDriving: boolean

  @Column({ type: 'boolean', default: false })
  isRiding: boolean

  @Column({ type: 'boolean', default: false })
  isTaken: boolean

  @Column({ type: 'double precision', default: 0 })
  lastLng: number

  @Column({ type: 'double precision', default: 0 })
  lastLat: number

  @Column({ type: 'double precision', default: 0 })
  lastOrientation: number

  @CreateDateColumn() createdAt: string
  @UpdateDateColumn() updatedAt: string

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  public isCorrectPassword(userPassword: string): Promise<boolean> {
    return bcrypt.compare(userPassword, this.password)
  }

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.password) {
      // hash the password
      const hashedPassword = await this.hashPassword(this.password)
      this.password = hashedPassword
    }
  }

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, BCRYPT_TIMES)
  }
}

export default User
