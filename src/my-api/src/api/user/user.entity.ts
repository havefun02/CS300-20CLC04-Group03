import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from './cart/cart.entity';
import { Trans } from './trans/trans.entity';

@Entity()
export class UserFromApi extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  public id_userFromApi: number;
  @Column({ type: 'varchar', nullable: false })
  public email!: string;
  @Column({ type: 'varchar', nullable: false })
  public name: string;
  @Column({ type: 'varchar', nullable: false })
  public phonenumber: string;
  @Column({ type: 'varchar', nullable: false })
  public address: string;
  @OneToMany(() => Trans, (trans) => trans.user)
  public trans: Trans[];
  @OneToOne(() => Cart, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'id_userFromApi',
  })
  cart: Cart;
}
