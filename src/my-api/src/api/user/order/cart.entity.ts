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
  @PrimaryColumn({ type: 'varchar' })
  public id_item: string;
  @Column({ type: 'varchar' })
  public id_api: string;
  @Column({ type: 'varchar' })
  public id_product: string;
  @Column({ type: 'varchar' })
  public size: string;
  @Column({ type: 'varchar' })
  public color: string;
  @Column({ type: 'int' })
  public quantity: number;
}
