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
@Entity()
export class SizeTable extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_product: number;
  @Column({ type: 'int', nullable: true })
  public UK6: number;
  @Column({ type: 'int', nullable: true })
  public UK6_5: number;
  @Column({ type: 'int', nullable: true })
  public UK7: number;
  @Column({ type: 'int', nullable: true })
  public UK7_5: number;
  @Column({ type: 'int', nullable: true })
  public UK8: number;
  @Column({ type: 'int', nullable: true })
  public UK8_5: number;
  @Column({ type: 'int', nullable: true })
  public UK9: number;
  @Column({ type: 'int', nullable: true })
  public UK9_5: number;
  @Column({ type: 'int', nullable: true })
  public UK10: number;
  @Column({ type: 'int', nullable: true })
  public UK10_5: number;
  @Column({ type: 'int', nullable: true })
  public UK11: number;
  @Column({ type: 'int', nullable: true })
  public UK11_5: number;
  @Column({ type: 'int', nullable: true })
  public UK12: number;
}
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
  @Column({ type: 'varchar', nullable: false })
  public id_cate: string;
  @Column({ type: 'varchar', nullable: false })
  public gender: string;
  @Column({ type: 'varchar', nullable: false })
  public name: string | null;
  @Column({ type: 'int', nullable: false })
  public price: number;
  @Column({ type: 'int', nullable: false })
  public rate: number;
  @Column({ type: 'bool', nullable: true })
  public isSaleOff: boolean;
  @Column({ type: 'int', nullable: true })
  public priceOnSale: number;
  @Column({ type: 'int', nullable: false })
  public uploadBy: number;
  @Column({ type: 'bytea', nullable: false })
  public avar: Uint8Array;
  @Column({ type: 'timestamp', nullable: true, default: null })
  public uploadAt: Date | null;
  @OneToOne(() => SizeTable, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  public size: SizeTable;
  @ManyToOne(() => Category, (cate) => cate.product)
  @JoinColumn({ name: 'id_cate' })
  public cate: Category;
}

export class Category {
  @PrimaryGeneratedColumn()
  public id_cate!: number;
  @Column({ type: 'varchar', nullable: false })
  public name: string;
  @OneToMany(() => Product, (product) => product.cate, { cascade: true })
  public product: Product[];
}
@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface {
  beforeUpdate(event: UpdateEvent<any>): void | Promise<any> {}
  afterUpdate(event: UpdateEvent<any>): void | Promise<any> {}
}
