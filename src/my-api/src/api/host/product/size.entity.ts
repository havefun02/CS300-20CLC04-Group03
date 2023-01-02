import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductDetail } from './product.entity';

@Entity()
export class SizeTable extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_size: number;
  @PrimaryColumn({ type: 'varchar' })
  public name_size: string;
  // @OneToMany(() => ProductDetail, (productdetail) => productdetail.size_)
  // public productsize: ProductDetail[];
}
