import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductDetail } from './product.entity';

@Entity()
export class SizeTable extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_size: number;
  @Column({ type: 'varchar' })
  public title: string;
  @OneToMany(() => ProductDetail, (productdetail) => productdetail.size)
  public productsize: ProductDetail[];
}