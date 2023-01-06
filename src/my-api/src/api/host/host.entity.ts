import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn({ type: 'varchar' })
  public id_user!: string;

  @Column({ type: 'varchar' })
  public username!: string;

  @Exclude()
  @Column({ type: 'varchar' })
  public password!: string;

  @Column({ type: 'varchar', nullable: true })
  public name: string | null;

  @Column({ type: 'timestamp', nullable: true, default: null })
  public lastLoginAt: Date | null;
}
