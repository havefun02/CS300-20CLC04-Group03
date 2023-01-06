import { type } from 'os';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class DetailOrder extends BaseEntity {
  @PrimaryColumn({ type: 'varchar' })
  public id_order: string;
  @PrimaryColumn({ type: 'varchar' })
  public id_product: string;
  @PrimaryColumn({ type: 'varchar' })
  public size: string;
  @PrimaryColumn({ type: 'varchar' })
  public color: string;
  @PrimaryColumn({ type: 'int' })
  public quantity: number;
  @Column({ type: 'int', nullable: false })
  public price: number;
}
