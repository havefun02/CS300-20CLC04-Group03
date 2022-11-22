import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Trans } from '../trans/trans.entity';
import { Order } from './order.entity';

@Entity()
export class PaymentMethod extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_method: number;
  @Column({ type: 'varchar' })
  public title: string;
  // @OneToMany(() => Trans, (trans) => trans.method)
  // public trans: Trans[];
  @OneToMany(() => Order, (order) => order.method)
  public orders: Order[];
}
