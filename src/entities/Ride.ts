import {
  BaseEntity,
  CreateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'
import { rideStatus } from 'types/types'
import User from './User'

@Entity()
class Ride extends BaseEntity {
  @PrimaryGeneratedColumn() id: number

  @Column({
    type: 'text',
    enum: ['ACCEPTED', 'CANCLED', 'FINISHED', 'ONROUTE', 'REQUESTED'],
  })
  status: rideStatus

  @Column({ type: 'text' })
  pickUpAddress: string

  @Column({ type: 'double precision', default: 0 })
  pickUpLatitude: number

  @Column({ type: 'double precision', default: 0 })
  pickUpLongitude: number

  @Column({ type: 'text' })
  dropOffAddress: string

  @Column({ type: 'double precision', default: 0 })
  dropOffLattude: number

  @Column({ type: 'double precision', default: 0 })
  dropOffLongitude: number

  @Column({ type: 'double precision', default: 0 })
  price: number

  @Column({ type: 'text' })
  distance: string

  @Column({ type: 'text' })
  duration: string

  @ManyToOne(type => User, user => user.ridesAsPassenger)
  passenger: User

  @ManyToOne(type => User, user => user.ridesAsDriver)
  driver: User

  @CreateDateColumn() createdAt: string
  @UpdateDateColumn() updatedAt: string
}

export default Ride
