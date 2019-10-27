import {
  BaseEntity,
  CreateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
class Place extends BaseEntity {
  @PrimaryGeneratedColumn() id: number

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'double precision', default: 0 })
  latitude: number

  @Column({ type: 'double precision', default: 0 })
  longitude: number

  @Column({ type: 'text' })
  address: string

  @Column({ type: 'boolean', default: false })
  isFavorite: boolean

  @CreateDateColumn() createdAt: string
  @UpdateDateColumn() updatedAt: string
}

export default Place
