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
import { Category } from '../category/category.entity';
@Entity()
export class SizeTable extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_product: number;
  @Column({ type: 'int', nullable: true })
  public size_XXS: number;
  @Column({ type: 'int', nullable: true })
  public size_XS: number;
  @Column({ type: 'int', nullable: true })
  public size_S: number;
  @Column({ type: 'int', nullable: true })
  public size_M: number;
  @Column({ type: 'int', nullable: true })
  public size_L: number;
  @Column({ type: 'int', nullable: true })
  public size_XL: number;
  @Column({ type: 'int', nullable: true })
  public size_2XL: number;
  @Column({ type: 'int', nullable: true })
  public size_3XL: number;
}

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_product!: number;
  @Column({ type: 'varchar' })
  public code: string;
  @Column({ type: 'varchar' })
  public id_cate: string;
  @Column({ type: 'varchar' })
  public gender: string;
  @Column({ type: 'varchar', nullable: true })
  public name: string | null;
  @Column({ type: 'int' })
  public price: number;
  @Column({ type: 'bool', nullable: true })
  public isSaleOff: boolean;
  @Column({ type: 'int', nullable: true })
  public priceOnSale: number;
  @Column({ type: 'int' })
  public uploadBy: number;
  @Column({ type: 'bytea' })
  public avar: Uint8Array;
  @Column({ type: 'timestamp', nullable: true, default: null })
  public uploadAt: Date | null;
  @OneToOne(() => SizeTable, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  public size: SizeTable;
  @ManyToOne(() => Category, (cate) => cate.product)
  public cate: Category;
}
@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface {
  beforeUpdate(event: UpdateEvent<any>): void | Promise<any> {}
  afterUpdate(event: UpdateEvent<any>): void | Promise<any> {}
}
