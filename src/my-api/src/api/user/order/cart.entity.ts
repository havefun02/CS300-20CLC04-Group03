import { Product } from '@/api/host/product/product.entity';
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
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  public id_item: number;
  @Column({ type: 'int' })
  public id_api: number;
  @Column({ type: 'int' })
  public id_product: number;
  @Column({ type: 'varchar' })
  public size: string;
  @Column({ type: 'varchar' })
  public color: string;
  @Column({ type: 'int' })
  public quantity: number;
}
