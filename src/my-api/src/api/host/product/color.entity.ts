import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductDetail } from './product.entity';

@Entity()
export class Color {
  @PrimaryColumn({ type: 'varchar' })
  public id_color: string;
  @PrimaryColumn({ type: 'varchar' })
  public name_color: string;
  // @OneToMany(() => ProductDetail, (productdetail) => productdetail.color_)
  // public productcolor: ProductDetail[];
}
