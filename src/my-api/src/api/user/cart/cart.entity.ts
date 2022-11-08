import { Product } from '@/api/host/product/product.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Cart extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  public id_userFromApi: number;
  @PrimaryGeneratedColumn({ type: 'int' })
  public id_cart: number;

  // @OneToMany(() => InCart, (items) => items.cart)
  // public items: InCart[];
}
export class InCart extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  public id_product: number;
  @PrimaryColumn({ type: 'int' })
  public id_size: number;
  @PrimaryColumn({ type: 'int' })
  public id_color: number;
  @Column({ type: 'int' })
  public quantity: number;
  @PrimaryColumn({ type: 'int' })
  public id_cart: number;
  // @ManyToOne(() => Cart, (cart) => cart.items)
  // @JoinColumn()
  // public cart: Cart;
}
