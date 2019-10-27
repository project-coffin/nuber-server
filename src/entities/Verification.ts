import {
  BaseEntity,
  CreateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm'

import { verificationTarget } from '../types/types'

@Entity()
class Verification extends BaseEntity {
  @PrimaryGeneratedColumn() id: number

  @Column({ type: 'text', enum: [verificationTarget.PHONE, verificationTarget.EMAIL] })
  target: verificationTarget.PHONE | verificationTarget.EMAIL

  @Column({ type: 'text' })
  payload: string

  @Column({ type: 'text' })
  key: string

  @Column({ type: 'boolean', default: false })
  used: boolean

  @CreateDateColumn() createdAt: string
  @UpdateDateColumn() updatedAt: string

  @BeforeInsert()
  createKey(): void {
    this.key = verificationTarget.PHONE
      ? Math.floor(Math.random() * 1000000).toString()
      : // EMAIL인 경우
        (this.key = Math.random()
          .toString(36)
          .substr(2))
  }
}

export default Verification
