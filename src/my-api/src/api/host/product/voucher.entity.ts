import { Voucher } from '@/api/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class VoucherDefault extends BaseEntity {
  @PrimaryColumn()
  public id_voucher: string;
  @Column({ type: 'varchar' })
  public title: string;
  @Column({ type: 'int' })
  public discount: number;
}
