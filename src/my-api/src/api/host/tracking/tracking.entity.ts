import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class TrackingProduct extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_track: number;
  @PrimaryColumn()
  public id_host: number;
  @Column({ type: 'int' })
  public type: string;
  @Column({ type: 'int' })
  public id_product: number;
  @Column({ type: 'int' })
  public price: number;
  @Column({ type: 'timestamp', nullable: false })
  public upload_At: Date | null;
}
