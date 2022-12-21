import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../host/host.entity';
import { VoucherDefault } from '../host/product/voucher.entity';
import { Cart } from './cart/cart.entity';

@Entity()
export class UserFromApi extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  public id_userFromApi: number;
  @Column({ type: 'varchar', nullable: false })
  public email!: string;
  @Column({ type: 'varchar', nullable: false })
  public name: string;
  @Column({ type: 'varchar', nullable: false })
  public phonenumber: string;
  @Column({ type: 'varchar', nullable: false })
  public address: string;
  @Column({ type: 'int', nullable: true })
  public point: number;
  @Column({ type: 'int', nullable: true })
  public level: number;
  @OneToMany(() => Voucher, (user_voucher) => user_voucher.voucher)
  public user_voucher: Voucher[];
  @OneToOne(() => Cart)
  @JoinColumn({
    name: 'id_userFromApi',
  })
  cart: Cart;
}
@Entity()
export class Voucher extends BaseEntity {
  @PrimaryColumn()
  public id_voucher: number;
  @PrimaryColumn({ type: 'int' })
  public id_user: number;
  @Column({ type: 'int' })
  public num: number;
  @ManyToMany(
    () => VoucherDefault,
    (vouchers) => vouchers.voucher_default, //optional
  )
  @JoinColumn({ name: 'id_voucher' })
  default_voucher?: VoucherDefault[];
  @ManyToOne(() => UserFromApi, (voucher) => voucher.user_voucher)
  @JoinColumn({ name: 'id_userFromApi' })
  public voucher: UserFromApi;
}
