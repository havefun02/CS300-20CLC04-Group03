import {
  BaseEntity,
  Column,
  Entity,
  EntitySubscriberInterface,
  EventSubscriber,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateEvent,
} from 'typeorm';
@Entity()
export class Product extends BaseEntity {
  @PrimaryColumn({ type: 'varchar' })
  public id_product!: string;
  @Column({ type: 'varchar' })
  public code: string;
  @Column({ type: 'varchar', nullable: false })
  public brand: string;
  @Column({ type: 'varchar', nullable: false })
  public cate: string;
  @Column({ type: 'varchar', nullable: false })
  public name: string | null;
  @Column({ type: 'varchar', nullable: true })
  public kind: string | null;
  @Column({ type: 'text', nullable: true })
  public description: string | null;
  @Column({ type: 'int', nullable: false })
  public price: number;
  @Column({ type: 'int', nullable: true })
  public priceSale: number;
  @Column({ type: 'bool', nullable: true })
  public sale: boolean;
  @Column({ type: 'bool', nullable: true })
  public new: boolean;
  @Column({ type: 'int', nullable: true })
  public rate: number;
  @Column({ type: 'bytea', nullable: false })
  public avar: Uint8Array;

  // @OneToMany(() => GroupImg, (Product_img) => Product_img.img_product, {
  //   cascade: true,
  // })
  // public imgs: GroupImg[];
  // @OneToMany(() => ProductDetail, (product_detail) => product_detail.product, {
  //   cascade: true,
  // })
  // public details: ProductDetail[]; //a group of sub product which belong to id_product
  // // @ManyToOne(() => Brand, (brand) => brand.brand_product)
  // // @JoinColumn({ name: 'brand', referencedColumnName: 'name_brand' })
  // public brand_: Brand;
  // @ManyToOne(() => Category, (cate) => cate.cate_product)
  // // @JoinColumn({ name: 'cate', referencedColumnName: 'name_cate' })
  // public cate_: Category;
}

@Entity()
export class ProductDetail extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', nullable: false })
  public id_product: string;
  @PrimaryColumn({ type: 'varchar' })
  public size: string;
  @PrimaryColumn({ type: 'varchar' })
  public color: string;
  @Column({ type: 'int' })
  public quantity: number;

  // @ManyToOne(() => SizeTable, (size) => size.productsize, {
  //   cascade: true,
  //   onDelete: 'CASCADE',
  // })
  // // @JoinColumn({ name: 'size', referencedColumnName: 'name_size' })
  // public size_: SizeTable;

  // @ManyToOne(() => Color, (color) => color.productcolor, {
  //   cascade: true,
  //   onDelete: 'CASCADE',
  // })
  // // @JoinColumn({ name: 'color', referencedColumnName: 'name_color' })
  // public color_: Color;

  // @ManyToOne(() => Product, (product) => product.details)
  // @JoinColumn({ name: 'id_product' })
  // public product: Product; //is belong to product
}

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface {
  beforeUpdate(event: UpdateEvent<any>): void | Promise<any> {}
  afterUpdate(event: UpdateEvent<any>): void | Promise<any> {}
}
