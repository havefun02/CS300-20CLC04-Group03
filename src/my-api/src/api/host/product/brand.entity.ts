import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TrackingProduct } from '../tracking/tracking.entity';
import { Product } from './product.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  public id_brand!: number;
  @Column({ type: 'varchar', nullable: false })
  public name: string;
  @OneToMany(() => Product, (product) => product.brand, { cascade: true })
  public product_brand: Product[];
  @OneToMany(
    () => TrackingProduct,
    (productTrackingbrand) => productTrackingbrand.brand,
    {
      cascade: true,
    },
  )
  public productTrackingbrand: TrackingProduct[];
}
