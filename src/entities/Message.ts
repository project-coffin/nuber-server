import {
  BaseEntity,
  CreateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'

import Chat from './Chat'
import User from './User'

@Entity()
class Message extends BaseEntity {
  @PrimaryGeneratedColumn() id: number

  @Column({ type: 'text' })
  text: string

  @ManyToOne(_ => Chat, chat => chat.messages)
  chat: Chat

  @ManyToOne(_ => User, user => user.messages)
  user: User

  @CreateDateColumn() createdAt: string
  @UpdateDateColumn() updatedAt: string
}

export default Message
