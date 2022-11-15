import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class DetailOrder extends BaseEntity {
  @PrimaryColumn()
  public id_order: number;
  @Column()
  public id_cart: number; //product in cart
  @ManyToOne(() => Order, (order) => order.detail)
  @JoinColumn({ name: 'id_order' })
  public order: Order;
}
