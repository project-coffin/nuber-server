import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'

import Message from './Message'
import User from './User'

@Entity()
class Chat extends BaseEntity {
  @PrimaryGeneratedColumn() id: number

  @OneToMany(_ => Message, message => message.chat)
  messages: Message[]

  @OneToMany(_ => User, user => user.chat)
  participants: User[]

  @CreateDateColumn() createdAt: string
  @UpdateDateColumn() updatedAt: string
}

export default Chat
