import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  public id_brand: number;
  @PrimaryColumn({ type: 'varchar', nullable: false })
  public name_brand: string;
  // @OneToMany(() => Product, (product) => product.brand_)
  // public brand_product: Product[];
}
