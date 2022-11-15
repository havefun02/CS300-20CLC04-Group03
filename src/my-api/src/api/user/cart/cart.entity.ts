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
  @PrimaryColumn({ type: 'int' })
  public id_userFromApi: number;
  @Column({ type: 'int' })
  public id_product: number;
  @Column({ type: 'int' })
  public id_size: number;
  @Column({ type: 'int' })
  public id_color: number;
  @Column({ type: 'int' })
  public quantity: number;
}
