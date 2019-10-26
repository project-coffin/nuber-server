import { IsEmail } from 'class-validator'
import { BaseEntity, CreateDateColumn, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // Model
class User extends BaseEntity{
  @PrimaryGeneratedColumn() id: number

  @Column({type: 'text', unique: true}) 
  @IsEmail()
  email: string

  @Column({type: 'boolean', default: false})
  verifiedByEmail: boolean

  @Column({type: 'text'})
  firstName: string

  @Column({type: 'text'})
  lastName: string

  @Column({type: 'int'})
  age: string

  @Column({type: 'text'})
  password: string

  @Column({type: 'text'})
  phoneNumber: string

  @Column({type: 'boolean', default: false})
  verifiedByPhoneNumber: boolean

  @Column({type: 'text'})
  profilePhoto: string

  @Column({type: 'boolean', default: false})
  isDriving: boolean

  @Column({type: 'boolean', default: false})
  isRiding: boolean

  @Column({type: 'boolean', default: false})
  isTaken: boolean

  @Column({type: 'double precision', default: 0})
  lastLng: number

  @Column({type: 'double precision', default: 0})
  lastLat: number

  @Column({type: 'double precision', default: 0})
  lastOrientation: number

  get fullName(): string{
    return `${this.firstName} ${this.lastName}`
  }

  @CreateDateColumn() createdAt: string
  @CreateDateColumn() updatedAt: string
}

export default User
