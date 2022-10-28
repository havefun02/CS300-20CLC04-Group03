import { Exclude } from 'class-transformer';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserFromApi extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id_userFromApi: number;
}
