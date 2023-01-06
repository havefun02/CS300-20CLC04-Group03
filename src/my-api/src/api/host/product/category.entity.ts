import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Category {
  @PrimaryColumn({ type: 'varchar' })
  public id_cate!: string;
  @PrimaryColumn({ type: 'varchar', nullable: false })
  public name_cate: string;
  // @OneToMany(() => Product, (product) => product.cate_)
  // public cate_product: Product[];
}
