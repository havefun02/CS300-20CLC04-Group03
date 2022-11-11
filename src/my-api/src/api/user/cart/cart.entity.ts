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
  public id_cart: number;
  @Column({ type: 'int' })
  public id_userFromApi: number;
  @OneToMany(() => Item, (items) => items.cart)
  public items: Item[];
}
@Entity()
export class Item extends BaseEntity {
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
  @ManyToOne(() => Cart, (cart) => cart.items)
  @JoinColumn({ name: 'id_cart' })
  public cart: Cart;
}
