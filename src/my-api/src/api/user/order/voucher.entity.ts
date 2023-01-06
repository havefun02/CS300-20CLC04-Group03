import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Voucher extends BaseEntity {
  @PrimaryColumn({ type: 'varchar' })
  public id_api: string;
  @PrimaryColumn({ type: 'varchar' })
  public id_voucher: string;
  @Column({ type: 'int' })
  public num: number;
  @Column({ type: 'date', nullable: true })
  public date: Date | null;
}
