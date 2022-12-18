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
  @Column({ type: 'int' })
  public id_product: number;
  @Column({ type: 'int' })
  public id_size: number;
  @Column({ type: 'int' })
  public id_color: number;
  @Column({ type: 'int' })
  public quantity: number;
  @ManyToOne(() => Order, (order) => order.detail)
  @JoinColumn({ name: 'id_order' })
  public order: Order;
}
