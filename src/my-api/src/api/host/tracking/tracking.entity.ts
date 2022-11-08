import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class TrackingProduct extends BaseEntity {
  @PrimaryColumn({ type: 'timestamp', nullable: false })
  public upload_At: Date | null;
  @PrimaryColumn()
  public id_host: number;
  @Column({ type: 'int' })
  public id_type: string;
  @Column({ type: 'int' })
  public id_product: number;
  @Column({ type: 'int' })
  public price: number;
  @Column({ type: 'text' })
  public product_property: string;
}
export class TypeUpload extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_type: number;
  @Column({ type: 'varchar' })
  public title: string;
}
