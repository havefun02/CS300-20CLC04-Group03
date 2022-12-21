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
  @Column({ type: 'int' })
  public id_size: number;
  @Column({ type: 'int' })
  public id_color: number;
  @Column({ type: 'int' })
  public quantity: number;
  @OneToOne(() => UserFromApi, (user_Api) => user_Api.cart)
  @JoinColumn({ name: 'trainer_trainer_id' })
  cart!: UserFromApi;
}
