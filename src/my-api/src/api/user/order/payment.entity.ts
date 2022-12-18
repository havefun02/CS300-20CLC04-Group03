import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class PaymentMethod extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_method: number;
  @Column({ type: 'varchar' })
  public title: string;

  @OneToMany(() => Order, (order) => order.method)
  public orders: Order[];
}
