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

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_product!: number;
  @Column({ type: 'varchar', nullable: false })
  public code: string;
  @Column({ type: 'varchar', nullable: false })
  public name: string | null;
  @Column({ type: 'varchar', nullable: false })
  public kind: string | null;
  @Column({ type: 'text', nullable: false })
  public description: string | null;
  @Column({ type: 'int', nullable: false })
  public price: number;
  @Column({ type: 'int', nullable: false })
  public priceSale: number;
  @Column({ type: 'int', nullable: false })
  public rate: number;
  @Column({ type: 'int' })
  public id_picture: number;
  @OneToMany(() => GroupImg, (Product_img) => Product_img.img_product, {
    cascade: true,
  })
  public product_img: GroupImg[];
  @OneToMany(
    () => ProductDetail,
    (product_detail) => product_detail.detail_product,
    {
      cascade: true,
    },
  )
  public product_detail: ProductDetail[]; //a group of sub product which belong to id_product
  @ManyToOne(() => Brand, (brand) => brand.product_brand)
  @JoinColumn({ name: 'id_brand' })
  public brand: Brand;
  @ManyToOne(() => Category, (cate) => cate.product_cate)
  @JoinColumn({ name: 'id_cate' })
  public cate: Brand;
}

@Entity()
export class GroupImg {
  @PrimaryColumn({ type: 'int' })
  public id_product: number;
  @PrimaryGeneratedColumn({ type: 'int' })
  public id_picture: number;
  @Column({ type: 'bytea', nullable: false })
  public source: Uint8Array;
  @ManyToOne(() => Product, (img_product) => img_product.product_img)
  @JoinColumn({ name: 'id_product' })
  public img_product: Product; //is belong to product
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

  @ManyToOne(() => Product, (detail_product) => detail_product.product_detail)
  @JoinColumn({ name: 'id_product' })
  public detail_product: Product; //is belong to product
}

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface {
  beforeUpdate(event: UpdateEvent<any>): void | Promise<any> {}
  afterUpdate(event: UpdateEvent<any>): void | Promise<any> {}
}
