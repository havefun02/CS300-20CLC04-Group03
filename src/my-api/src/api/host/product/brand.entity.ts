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
  @PrimaryColumn({ type: 'varchar' })
  public id_brand: string;
  @PrimaryColumn({ type: 'varchar', nullable: false })
  public name_brand: string;
  // @OneToMany(() => Product, (product) => product.brand_)
  // public brand_product: Product[];
}
