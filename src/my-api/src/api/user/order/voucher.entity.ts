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
  @PrimaryColumn({ type: 'int' })
  public id_api: number;
  @PrimaryGeneratedColumn({ type: 'int' })
  public id_voucher: number;
  @Column({ type: 'int' })
  public num: number;
  @Column({ type: 'date', nullable: true })
  public date: Date | null;
}
