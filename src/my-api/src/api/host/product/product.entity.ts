import {
  BaseEntity,
  Column,
  Entity,
  EntitySubscriberInterface,
  EventSubscriber,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateEvent,
} from 'typeorm';
import { Brand } from './brand.entity';
import { Category } from './category.entity';
import { Color } from './color.entity';
import { SizeTable } from './size.entity';
//originals
//run
//basketball
//sport
//tenis
//football

//men
//women
//kid

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_product!: number;
  @Column({ type: 'varchar', nullable: false })
  public code: string;
  @Column({ type: 'int', nullable: false })
  public id_cate: number;
  @Column({ type: 'varchar', nullable: false })
  public name: string | null;
  @Column({ type: 'text', nullable: false })
  public description: string | null;
  @Column({ type: 'int', nullable: false })
  public price: number;
  @Column({ type: 'int', nullable: false })
  public rate: number;
  @Column({ type: 'int', nullable: true })
  public priceOnSale: number;
  @Column({ type: 'bytea', nullable: false })
  public avar: Uint8Array;
  @Column({ type: 'timestamp', nullable: false })
  public upload_At: Date | null;
  @Column({})
  public upload_By: number;
  @OneToMany(
    () => ProductDetail,
    (productdetail) => productdetail.productdetail,
    {
      cascade: true,
    },
  )
  public product: ProductDetail[]; //a group of sub product which belong to id_product

  @ManyToOne(() => Category, (cate) => cate.products)
  @JoinColumn({ name: 'id_cate' })
  public cate: Category;
  @ManyToOne(() => Brand, (brand) => brand.product_brand)
  @JoinColumn({ name: 'id_brand' })
  public brand: Brand;
}
@Entity()
export class ProductDetail extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  public id_product: number;
  @PrimaryColumn({ type: 'int' })
  public id_size: number;
  @PrimaryColumn({ type: 'int' })
  public id_color: number;
  @Column({ type: 'int' })
  public quantity: number;
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

  @ManyToOne(() => Product, (product) => product.product)
  @JoinColumn({ name: 'id_product' })
  public productdetail: Product; //is belong to product
}

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface {
  beforeUpdate(event: UpdateEvent<any>): void | Promise<any> {}
  afterUpdate(event: UpdateEvent<any>): void | Promise<any> {}
}
