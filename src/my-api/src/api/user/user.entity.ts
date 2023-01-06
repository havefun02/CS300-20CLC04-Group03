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

@Entity()
export class UserFromApi extends BaseEntity {
  @PrimaryColumn({ type: 'varchar' })
  public id_api: string;
  @Column({ type: 'varchar', nullable: false })
  public email!: string;
  @Column({ type: 'varchar', nullable: false })
  public name: string;
  @Column({ type: 'varchar', nullable: true })
  public phone: string;
  @Column({ type: 'varchar', nullable: true })
  public address: string;
  @Column({ type: 'varchar', nullable: true })
  public sex: string;
  @Column({ type: 'int', nullable: true })
  public point: number;
  @Column({ type: 'int', nullable: true })
  public level: number;
  @Column({ type: 'varchar', nullable: true })
  public token: string;
  // @OneToMany(() => Voucher, (user_voucher) => user_voucher.voucher, {
  //   cascade: true,
  //   nullable: true,
  // })
  // public user_voucher: Voucher[];
  // @OneToOne(() => Cart, { cascade: true, onDelete: 'CASCADE' })
  // cart!: Cart;
}
@Entity()
export class Voucher extends BaseEntity {
  @PrimaryColumn()
  public id_voucher: string;
  @PrimaryColumn({ type: 'varchar' })
  public id_api: string;
  @Column({ type: 'int' })
  public num: number;
  // @ManyToMany(
  //   () => VoucherDefault,
  //   (vouchers) => vouchers.voucher_default, //optional
  // )
  // @JoinColumn({ name: 'id_voucher' })
  // default_voucher?: VoucherDefault[];
  // @ManyToOne(() => UserFromApi, (voucher) => voucher.user_voucher)
  // @JoinColumn({ name: 'id_userFromApi' })
  // public voucher: UserFromApi;
}
