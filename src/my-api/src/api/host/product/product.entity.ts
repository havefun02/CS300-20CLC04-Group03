import { Exclude } from 'class-transformer';
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
export class SizeTable extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_size: number;
  @Column({ type: 'varchar' })
  public title: string;

  // @OneToMany(
  //   () => ProductSizeProperty,
  //   (productProperty) => productProperty.size,
  //   { cascade: true },
  // )
  // public productProperty: ProductSizeProperty[];
}

export class Color extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_color: number;
  @Column({ type: 'varchar' })
  public title: string;
  // @OneToMany(
  //   () => ProductSizeProperty,
  //   (productProperty) => productProperty.color,
  //   { cascade: true },
  // )
  // public productProperty: ProductSizeProperty[];
}
export class Category {
  @PrimaryGeneratedColumn()
  public id_cate!: number;
  @Column({ type: 'varchar', nullable: false })
  public name: string;
  // @OneToMany(() => Product, (product) => product.cate, { cascade: true })
  // public product: Product[];
}
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_product!: number;
  @Column({ type: 'varchar', nullable: false })
  public code: string;
  @Column({ type: 'int', nullable: false })
  public id_cate: number;
  @Column({ type: 'varchar', nullable: false })
  public name: string | null;
  @Column({ type: 'int', nullable: false })
  public price: number;
  @Column({ type: 'int', nullable: false })
  public rate: number;

  @Column({ type: 'int', nullable: true })
  public priceOnSale: number;
  @Column({ type: 'bytea', nullable: false })
  public avar: Uint8Array;

  // @OneToMany(() => ProductSizeProperty, (property) => property.product, {
  //   cascade: true,
  // })
  // public property: ProductSizeProperty[];

  // @ManyToOne(() => Category, (cate) => cate.product)
  // @JoinColumn({ name: 'id_cate' })
  // public cate: Category;
}

export class ProductSizeProperty extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  public id_product: number;
  @PrimaryColumn({ type: 'int' })
  public id_size: number;
  @PrimaryColumn({ type: 'int' })
  public id_color: number;
  @Column({ type: 'int' })
  public quantity: number;
  // @ManyToOne(() => SizeTable, (size) => size.productProperty, {
  //   cascade: true,
  //   onDelete: 'CASCADE',
  // })
  // @JoinColumn()
  // public size: SizeTable;

  // @ManyToOne(() => Color, (color) => color.productProperty, {
  //   cascade: true,
  //   onDelete: 'CASCADE',
  // })
  // @JoinColumn()
  // public color: Color;

  // @ManyToOne(() => Product, (product) => product.property)
  // @JoinColumn({ name: 'id_product' })
  // public product: Product;
}

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface {
  beforeUpdate(event: UpdateEvent<any>): void | Promise<any> {}
  afterUpdate(event: UpdateEvent<any>): void | Promise<any> {}
}
