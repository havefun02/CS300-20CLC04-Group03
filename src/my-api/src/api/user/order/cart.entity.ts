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
import { UserFromApi } from '../user.entity';

@Entity()
export class Cart extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  public id_userFromApi: number;
  @Column({ type: 'int' })
  public id_product: number;
  @PrimaryGeneratedColumn({ type: 'int' })
  public id_item: number;

  @Column({ type: 'varchar' })
  public size: string;
  @Column({ type: 'varchar' })
  public color: string;
  @Column({ type: 'int' })
  public quantity: number;
  // @OneToOne(() => UserFromApi, (user_Api) => user_Api.cart)
  // cart!: UserFromApi;
}
