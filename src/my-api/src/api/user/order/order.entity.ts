import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserFromApi } from '../user.entity';
import { DetailOrder } from './detailorder.entity';
import { PaymentMethod } from './payment.entity';
@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_order: number;
  @Column({ type: 'int' })
  public id_api: number;
  @Column({ type: 'timestamp', nullable: false })
  public set_at: Date | null;
  @Column({ type: 'varchar' })
  public method: number;
  @Column({ type: 'varchar' })
  public state: string;
  @Column({ type: 'varchar', nullable: true })
  public voucher: string;

  // @ManyToOne(() => PaymentMethod, (method) => method.orders)
  // public method_: PaymentMethod;

  // @OneToMany(() => DetailOrder, (detail) => detail.order)
  // public detail_: DetailOrder[];
}
