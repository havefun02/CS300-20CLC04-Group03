import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductDetail } from './product.entity';

@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  public id_color: number;
  @Column({ type: 'varchar' })
  public title: string;
  @OneToMany(() => ProductDetail, (productdetail) => productdetail.color)
  public productcolor: ProductDetail[];
}
