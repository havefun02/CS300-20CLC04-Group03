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
  @PrimaryGeneratedColumn()
  public id_cate!: number;
  @PrimaryColumn({ type: 'varchar', nullable: false })
  public name_cate: string;
  // @OneToMany(() => Product, (product) => product.cate_)
  // public cate_product: Product[];
}
