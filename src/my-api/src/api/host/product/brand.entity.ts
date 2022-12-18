import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  public id_brand!: number;
  @Column({ type: 'varchar', nullable: false })
  public name: string;
  @OneToMany(() => Product, (product) => product.brand, { cascade: true })
  public product_brand: Product[];
}
