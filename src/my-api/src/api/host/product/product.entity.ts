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
export class SizeTable {
  @PrimaryGeneratedColumn()
  public id_size: number;
  @Column({ type: 'varchar' })
  public title: string;

  @OneToMany(
    () => ProductProperty,
    (ProductProperty) => ProductProperty.isProduct,
  )
  public groupSizeProduct: ProductProperty[];
}
@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  public id_color: number;
  @Column({ type: 'varchar' })
  public title: string;
  @OneToMany(
    () => ProductProperty,
    (groupColorProduct) => groupColorProduct.isColor,
  )
  public groupColorProduct: ProductProperty[];
}
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  public id_cate!: number;
  @Column({ type: 'varchar', nullable: false })
  public name: string;
  @OneToMany(() => Product, (product) => product.GroupCate, { cascade: true })
  public product: Product[];
}

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
  @Column({ type: 'int', nullable: false })
  public price: number;
  @Column({ type: 'int', nullable: false })
  public rate: number;

  @Column({ type: 'int', nullable: true })
  public priceOnSale: number;
  @Column({ type: 'bytea', nullable: false })
  public avar: Uint8Array;

  @OneToMany(() => ProductProperty, (subProduct) => subProduct.isProduct, {
    cascade: true,
  })
  public subProduct: ProductProperty[]; //a group of sub product which belong to id_product

  @ManyToOne(() => Category, (cate) => cate.product)
  @JoinColumn({ name: 'id_cate' })
  public GroupCate: Category;
}
@Entity()
export class ProductProperty extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  public id_product: number;
  @PrimaryColumn({ type: 'int' })
  public id_size: number;
  @PrimaryColumn({ type: 'int' })
  public id_color: number;
  @Column({ type: 'int' })
  public quantity: number;
  @ManyToOne(() => SizeTable, (size) => size.groupSizeProduct, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_size' })
  public isSize: SizeTable;

  @ManyToOne(() => Color, (color) => color.groupColorProduct, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_color' })
  public isColor: Color;

  @ManyToOne(() => Product, (product) => product.subProduct)
  @JoinColumn({ name: 'id_product' })
  public isProduct: Product; //is belong to product
}

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface {
  beforeUpdate(event: UpdateEvent<any>): void | Promise<any> {}
  afterUpdate(event: UpdateEvent<any>): void | Promise<any> {}
}
