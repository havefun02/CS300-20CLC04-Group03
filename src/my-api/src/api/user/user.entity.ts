import { Exclude } from 'class-transformer';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserFromApi extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_userFromApi: number;
  @Column({ type: 'varchar', nullable: false })
  public email!: string;
  @Column({ type: 'varchar', nullable: false })
  public name: string;
  @Column({ type: 'varchar', nullable: false })
  public phonenumber: string;
  @Column({ type: 'varchar', nullable: false })
  public address: string;
}

export class Bill extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_bill: number;
  @Column({ type: 'varchar', nullable: false })
  public id_userFromApi: number;
}
