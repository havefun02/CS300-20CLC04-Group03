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
  @PrimaryGeneratedColumn({ type: 'int' })
  public id: number;
  @PrimaryColumn()
  public id_order: number;
  @PrimaryColumn({ type: 'int' })
  public id_product: number;
  @PrimaryColumn({ type: 'varchar' })
  public size: string;
  @PrimaryColumn({ type: 'varchar' })
  public color: string;
  @PrimaryColumn({ type: 'int' })
  public quantity: number;
  @Column({ type: 'int', nullable: false })
  public price: number;
}
