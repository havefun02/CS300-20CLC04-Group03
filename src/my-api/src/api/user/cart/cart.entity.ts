import { BaseEntity, PrimaryColumn } from 'typeorm';

export class Cart extends BaseEntity {
  @PrimaryColumn()
  public id_product: number;
}
