import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from '../cart/cart.entity';
import { PaymentMethod } from '../order/payment.entity';
import { UserFromApi } from '../user.entity';

@Entity()
export class Trans extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_trans: number;
  @Column({ type: 'int' })
  public id_userFromApi: number;
  @Column({ type: 'int' })
  public total: number;
  @Column({ type: 'timestamp', nullable: false })
  public set_at: Date | null;
  @Column({ type: 'varchar' })
  public id_method: number;
  @ManyToOne(() => UserFromApi, (user) => user.trans)
  @JoinColumn({ name: 'id_userFromApi' })
  public user: UserFromApi;
  // @ManyToOne(() => PaymentMethod, (method) => method.trans)
  // @JoinColumn({ name: 'id_method' })
  // public method: PaymentMethod;
}
