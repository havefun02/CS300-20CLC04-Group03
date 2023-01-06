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
@Entity()
export class Order extends BaseEntity {
  @PrimaryColumn({ type: 'varchar' })
  public id_order: string;
  @Column({ type: 'varchar' })
  public id_api: string;
  @Column({ type: 'timestamp', nullable: false })
  public set_at: Date | null;
  @Column({ type: 'varchar' })
  public method: string;
  @Column({ type: 'varchar' })
  public state: string;
  @Column({ type: 'varchar', nullable: true })
  public id_voucher: string;
}
