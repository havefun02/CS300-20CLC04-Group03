import internal from 'stream';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from '../cart/cart.entity';

@Entity()
export class Trans extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_trans: number;
  @Column({ type: 'varchar', nullable: false })
  public id_userFromApi: number;
  // @Column({ type: 'int', nullable: false })
  // public total: number;
  @Column({ type: 'timestamp', nullable: false })
  public set_at: Date | null;
  @Column({ type: 'varchar' })
  public id_method: number;
  // @OneToOne(() => Cart, { cascade: true, onDelete: 'CASCADE' })
  // @JoinColumn({
  //   name: 'id_userFromApi',
  //   referencedColumnName: 'id_userFromApi',
  // })
  // cart: Cart;
}
export class PaymentMethod extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_method: number;
  @Column({ type: 'varchar' })
  public title: string;
}
