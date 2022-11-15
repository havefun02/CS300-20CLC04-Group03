import internal from 'stream';
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

@Entity()
export class Items extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  public noItems: number;
  @Column({})
  public id_trans: number;
  @Column({ type: 'int' })
  public id_product: number;
  @Column({ type: 'int' })
  public id_size: number;
  @Column({ type: 'int' })
  public id_color: number;
  @Column({ type: 'int' })
  public quantity: number;
}
