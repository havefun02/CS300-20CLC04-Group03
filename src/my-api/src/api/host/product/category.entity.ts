import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TrackingProduct } from '../tracking/tracking.entity';
import { Product } from './product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  public id_cate!: number;
  @Column({ type: 'varchar', nullable: false })
  public name: string;
  @OneToMany(() => Product, (product) => product.cate, { cascade: true })
  public product_cate: Product[];
  @OneToMany(
    () => TrackingProduct,
    (productTracking) => productTracking.tracking_cate,
    {
      cascade: true,
    },
  )
  public tracking_cate: TrackingProduct[];
}
