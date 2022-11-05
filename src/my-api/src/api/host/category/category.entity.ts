import { Exclude } from 'class-transformer';
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class Category extends BaseEntity {
  @PrimaryColumn()
  public id_cate: string;

  @Column({ type: 'varchar', nullable: true })
  public name_cate: string | null;

  @Column({ type: 'int' })
  public quantityOfcate: number;

  @OneToMany(() => Product, (product) => product.cate, { cascade: true })
  // @JoinColumn({ name: 'id_cate' })
  product: Product[];
}
