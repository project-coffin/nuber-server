import {
  BaseEntity,
  BeforeInsert,
  CreateDateColumn,
  Column,
  Entity,
  // ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { verificationTarget } from '../types/types'
// import User from './User'

@Entity()
class Verification extends BaseEntity {
  @PrimaryGeneratedColumn() id: number

  @Column({ type: 'enum', enum: ['PHONE', 'EMAIL'], default: 'EMAIL' })
  target: verificationTarget

  @Column({ type: 'text' })
  payload: string

  @Column({ type: 'text' })
  key: string

  // @ManyToOne(_ => User, user => user.verifications, { nullable: true })
  // user: User

  @CreateDateColumn() createdAt: string
  @UpdateDateColumn() updatedAt: string

  @BeforeInsert()
  createKey(): void {
    this.key =
      this.target === 'PHONE'
        ? Math.floor(Math.random() * 1000000).toString()
        : // EMAIL인 경우
          (this.key = Math.random()
            .toString(36)
            .substr(2))
  }
}

export default Verification
