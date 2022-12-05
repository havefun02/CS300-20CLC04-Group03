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
import { Brand } from '../product/brand.entity';
import { Category } from '../product/category.entity';
import { Color } from '../product/color.entity';
import { Product } from '../product/product.entity';
import { SizeTable } from '../product/size.entity';

@Entity()
export class TrackingProduct extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_track: number;
  @PrimaryColumn()
  public id_host: number;
  @Column({ type: 'varchar' })
  public type: string;
  @Column({ type: 'varchar' })
  public name: string;
  @Column({ type: 'int' })
  public id_product: number;
  @Column({ type: 'int' })
  public id_cate: number;
  @Column({ type: 'int' })
  public id_brand: number;
  @Column({ type: 'int' })
  public id_color: number;
  @Column({ type: 'int' })
  public id_size: number;
  @Column({ type: 'int' })
  public quantity: number;
  public price: number;
  @Column({ type: 'timestamp', nullable: false })
  public upload_At: Date | null;

  @ManyToOne(() => Brand, (brand) => brand.product_brand)
  @JoinColumn({ name: 'id_brand' })
  public brand: Brand;
  @ManyToOne(() => Category, (cate) => cate.tracking_cate)
  @JoinColumn({ name: 'id_cate' })
  public tracking_cate: Category;
  @ManyToOne(() => SizeTable, (size) => size.productsize, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_size' })
  public size: SizeTable;

  @ManyToOne(() => Color, (color) => color.productcolor, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_color' })
  public color: Color;
}
