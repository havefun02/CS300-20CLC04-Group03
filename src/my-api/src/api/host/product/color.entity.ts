import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TrackingProduct } from '../tracking/tracking.entity';
import { ProductDetail } from './product.entity';

@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  public id_color: number;
  @Column({ type: 'varchar' })
  public title: string;
  @OneToMany(() => ProductDetail, (productdetail) => productdetail.color)
  public productcolor: ProductDetail[];
  @OneToMany(
    () => TrackingProduct,
    (productTrackingdetail) => productTrackingdetail.color,
  )
  public productTrackingcolor: TrackingProduct[];
}
