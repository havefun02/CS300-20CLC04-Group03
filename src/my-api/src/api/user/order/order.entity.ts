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
  @PrimaryGeneratedColumn()
  public id_order: number;
  @Column({ type: 'int' })
  public id_api: number;
  @Column({ type: 'timestamp', nullable: false })
  public set_at: Date | null;
  @Column({ type: 'varchar' })
  public method: number;
  @Column({ type: 'varchar' })
  public state: string;
  @Column({ type: 'varchar', nullable: true })
  public voucher: string;
}
