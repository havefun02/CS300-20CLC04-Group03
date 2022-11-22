import exp from 'constants';
import internal from 'stream';
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
import { Cart } from '../cart/cart.entity';
import { Trans } from '../trans/trans.entity';
import { UserFromApi } from '../user.entity';
import { DetailOrder } from './detailorder.entity';
import { PaymentMethod } from './payment.entity';
@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_order: number;
  @Column({ type: 'int' })
  public id_userFromApi: number;
  @Column({ type: 'int' })
  public total: number;
  @Column({ type: 'timestamp', nullable: false })
  public set_at: Date | null;
  @Column({ type: 'varchar' })
  public id_method: number;

  @Column({ type: 'varchar' })
  public state: string;

  @ManyToOne(() => UserFromApi, (user) => user.trans)
  @JoinColumn({ name: 'id_userFromApi' })
  public user: UserFromApi;

  @ManyToOne(() => PaymentMethod, (method) => method.orders)
  @JoinColumn({ name: 'id_method' })
  public method: PaymentMethod;

  @OneToMany(() => DetailOrder, (detail) => detail.order)
  public detail: DetailOrder[];
}
