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
export class Notif extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  public id_item_notif: number;
  @PrimaryColumn({ type: 'int' })
  public id_api: number;
  @PrimaryColumn({ type: 'int' })
  public id_order: number;
  @Column({ type: 'varchar' })
  public title: string;
}
