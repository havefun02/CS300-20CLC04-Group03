import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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
  public type: string;
  @Column({ type: 'int' })
  public id_product: number;
  @Column({ type: 'int' })
  public price: number;
  @Column({ type: 'text' })
  public product_property: string;
}
