import { Voucher } from '@/api/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class VoucherDefault extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_voucher: number;
  @Column({ type: 'varchar' })
  public title: string;
  @Column({ type: 'int' })
  public discount: number;
  // @ManyToMany(() => Voucher, (voucher) => voucher.default_voucher)
  // voucher_default?: Voucher[];
}
