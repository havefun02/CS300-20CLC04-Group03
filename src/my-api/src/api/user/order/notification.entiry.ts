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
export class Notification extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  public id_api: number;
  @PrimaryGeneratedColumn({ type: 'int' })
  public id_item: number;
  @PrimaryColumn({ type: 'int' })
  public id_order: number;

  // @OneToOne(() => UserFromApi, (user_Api) => user_Api.cart)
  // cart!: UserFromApi;
}
